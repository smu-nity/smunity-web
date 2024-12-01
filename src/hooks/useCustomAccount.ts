import {login, register, TLoginParam, TRegisterParam} from '../api/accountApi'
import {Member} from '../types/Member'
import {useRecoilState, useResetRecoilState} from 'recoil'
import signinState from '../atoms/accountState'
import {removeCookie, setCookie} from '../util/cookieUtil'
import useCustomAgree, {TCustomAgree} from './useCustomAgree'
import useCustomMove, {TCustomMove} from './useCustomMove'
import {resetPassword, TPasswordParam} from '../api/memberApi'

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
    const response = await login(loginParam)
    const success = response.status < 400
    success ? saveAsCookie(response.data) : alert(response.data.message)
    return success
  }

  //----------회원가입 함수
  const doRegister = async (registerParam: TRegisterParam, authToken?: string) => {
    const response = await register(registerParam, authToken)
    const success = response.status < 400
    if (success) {
      moveToPath('/accounts/login')
      removeAuth()
      return doLogin(requestParam(registerParam))
    } else {
      alert(response.data.message)
    }
    return success
  }

  const saveAsCookie = (data: Member) => {
    setCookie('member', JSON.stringify(data), 1) //1일
    setLoginState(data)
  }

  //---------------로그아웃 함수
  const doLogout = () => {
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
    const response = await resetPassword(passwordParam, authToken)
    const success = response.status < 400
    !success && alert(response.data.message)
    return success
  }

  const requestParam = (registerParam: TRegisterParam) => {
    return {
      username: registerParam.username,
      password: registerParam.password
    }
  }

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
