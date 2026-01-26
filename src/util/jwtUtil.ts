import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
  AxiosRequestConfig
} from 'axios'

import {getCookie, removeCookie, setCookie} from '@/util/cookieUtil'
import {ErrorResponse} from '@/types/ErrorResponse'

const config: AxiosRequestConfig = {
  validateStatus: function (status: number) {
    return status < 500 && status !== 401
  },
  timeout: 10000,
  withCredentials: true
}

const jwtAxios: AxiosInstance = axios.create(config)

const refreshJWT = async (refreshToken: string) => {
  const header = {headers: {'Content-Type': 'application/json'}}
  const data = JSON.stringify({refreshToken})
  const res = await axios.post('/api/v1/accounts/refresh', data, header)
  return res.data
}

// before request
const beforeReq = async (
  config: InternalAxiosRequestConfig
): Promise<InternalAxiosRequestConfig> => {
  const memberInfo = getCookie('member')
  if (!memberInfo) {
    return config
  }
  const {accessToken} = memberInfo

  // Authorization 헤더 처리
  config.headers.Authorization = `Bearer ${accessToken}`
  return config
}

// fail request
const requestFail = (err: AxiosError | Error): Promise<AxiosError> => {
  return Promise.reject(err)
}

// before return response
const beforeRes = async (res: AxiosResponse): Promise<AxiosResponse> => {
  return res
}

// fail response
let isRefreshing = false // 토큰 갱신 중인지 여부
type PendingRequestCallback = (accessToken: string | null) => void
let pendingRequests: PendingRequestCallback[] = [] // 대기 중인 요청 배열

const onRefreshed = (accessToken: string) => {
  pendingRequests.forEach(callback => callback(accessToken))
  pendingRequests = [] // 대기 요청 초기화
}

const responseFail = async (err: AxiosError): Promise<Error> => {
  const originalRequest = err.config as AxiosRequestConfig
  const responseData = err.response?.data as ErrorResponse
  if (
    err.response?.status === 401 &&
    responseData.code &&
    !responseData.code.includes('AUTH')
  ) {
    if (isRefreshing) {
      // 이미 토큰 갱신 중이라면 대기
      return new Promise(resolve => {
        pendingRequests.push((accessToken: string | null) => {
          if (accessToken && originalRequest.headers) {
            originalRequest.headers.Authorization = `Bearer ${accessToken}`
          }
          resolve(axios(originalRequest))
        })
      })
    }

    isRefreshing = true
    const memberCookieValue = getCookie('member')
    try {
      const result = await refreshJWT(memberCookieValue.refreshToken)
      memberCookieValue.accessToken = result.accessToken
      memberCookieValue.refreshToken = result.refreshToken
      setCookie('member', JSON.stringify(memberCookieValue), 1)
      onRefreshed(result.accessToken)
    } catch {
      // 갱신 실패 시, 대기 요청을 모두 거부
      pendingRequests.forEach(callback => callback(null))
      pendingRequests = []
      removeCookie('member')
      window.location.href = '/accounts/login'
    } finally {
      isRefreshing = false // 토큰 갱신 상태 초기화
    }

    if (originalRequest.headers) {
      originalRequest.headers.Authorization = `Bearer ${memberCookieValue.accessToken}`
    }
    return axios(originalRequest)
  }
  return Promise.reject(err)
}

jwtAxios.interceptors.request.use(beforeReq, requestFail)
jwtAxios.interceptors.response.use(beforeRes, responseFail)

export default jwtAxios
