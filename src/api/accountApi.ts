import {AxiosResponse} from 'axios'
import api from '@/api/config'
import jwtAxios from '@/util/jwtUtil'

export type TLoginParam = {
  username: string
  password: string
}

export type TRegisterParam = {
  username: string
  password: string
  email: string
  name: string
  department: string
}

export const login = async (loginParam: TLoginParam): Promise<AxiosResponse> =>
  await api.post('/api/v1/accounts/login', loginParam)

export const register = async (
  registerParam: TRegisterParam,
  authToken?: string
): Promise<AxiosResponse> =>
  await api.post('/api/v1/accounts/register', registerParam, {
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })

export const logout = async (refreshToken: string): Promise<AxiosResponse> =>
  await jwtAxios.post('/api/v1/accounts/logout', {refreshToken: refreshToken})
