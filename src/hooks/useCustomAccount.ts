import {login, logout, register, TLoginParam, TRegisterParam} from '@/api/accountApi'
import {Member} from '@/types/Member'
import {useRecoilState, useResetRecoilState} from 'recoil'
import signinState from '@/atoms/accountState'
import {getCookie, removeCookie, setCookie} from '@/util/cookieUtil'
import useCustomAgree, {TCustomAgree} from '@/hooks/useCustomAgree'
import useCustomMove, {TCustomMove} from '@/hooks/useCustomMove'
import {resetPassword, TPasswordParam} from '@/api/memberApi'
import {AxiosError} from 'axios'

export interface TCustomAccount {
  loginState: Member
  doLogin: (loginParam: TLoginParam) => Promise<boolean>
  doRegister: (registerParam: TRegisterParam, authToken?: string) => Promise<boolean>
  doLogout: () => void
  saveAsCookie: (data: Member) => void
  isLogin: () => boolean
  isAdmin: () => boolean
  getUsername: () => string
  passwordReset: (passwordParam: TPasswordParam, authToken?: string) => Promise<boolean>
}

const useCustomAccount = (): TCustomAccount => {
  const [loginState, setLoginState] = useRecoilState(signinState)
  const resetState = useResetRecoilState(signinState)
  const {removeAuth}: TCustomAgree = useCustomAgree()
  const {moveToPath}: TCustomMove = useCustomMove()

  //----------로그인 함수
  const doLogin = async (loginParam: TLoginParam) => {
    try {
      const response = await login(loginParam)
      saveAsCookie(response.data)
      return true
    } catch (err) {
      const error = err as AxiosError<{message: string; detail?: Record<string, string>}>
      if (error.response?.data) {
        alertError(error.response.data)
      }
      return false
    }
  }

  //----------회원가입 함수
  const doRegister = async (registerParam: TRegisterParam, authToken?: string) => {
    try {
      await register(registerParam, authToken)
      moveToPath('/accounts/login')
      removeAuth()
      alert('회원가입이 완료되었습니다.')
      return true
    } catch (err) {
      const error = err as AxiosError<{message: string; detail?: Record<string, string>}>
      if (error.response?.data) {
        alertError(error.response.data)
      }
      return false
    }
  }

  const saveAsCookie = (data: Member) => {
    setCookie('member', JSON.stringify(data), 1) //1일
    setLoginState(data)
  }

  //---------------로그아웃 함수
  const doLogout = async () => {
    const memberCookieValue = getCookie('member')
    await logout(memberCookieValue.refreshToken)
    removeCookie('member')
    resetState()
    setLoginState({})
  }

  const isLogin = () => {
    return !!(loginState.accessToken && loginState.refreshToken)
  }

  const isAdmin = () => {
    return loginState.memberRole === 'ROLE_ADMIN'
  }

  const getUsername = () => {
    return loginState.username || ''
  }

  const passwordReset = async (passwordParam: TPasswordParam, authToken?: string) => {
    try {
      await resetPassword(passwordParam, authToken)
      return true
    } catch (err) {
      const error = err as AxiosError<{message: string; detail?: Record<string, string>}>
      if (error.response?.data) {
        alertError(error.response.data)
      }
      return false
    }
  }

  const alertError = (data: {message: string; detail?: Record<string, string>}) =>
    alert(
      data.detail
        ? `${data.message}\n${Object.values(data.detail).join('\n')}`
        : data.message
    )

  return {
    loginState,
    doLogin,
    doRegister,
    doLogout,
    saveAsCookie,
    isLogin,
    isAdmin,
    getUsername,
    passwordReset
  }
}

export default useCustomAccount
