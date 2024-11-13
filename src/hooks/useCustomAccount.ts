import {login, register, TLoginParam, TRegisterParam} from '../api/accountApi'
import {Member} from '../types/Member'
import {useRecoilState, useResetRecoilState} from 'recoil'
import signinState from '../atoms/accountState'
import {removeCookie, setCookie} from '../util/cookieUtil'

export interface TCustomAccount {
  loginState: Member
  doLogin: (loginParam: TLoginParam) => Promise<boolean>
  doRegister: (registerParam: TRegisterParam, authToken?: string) => Promise<boolean>
  doLogout: () => void
  saveAsCookie: (data: Member) => void
  isLogin: () => boolean
  isAdmin: () => boolean
}

const useCustomAccount = (): TCustomAccount => {
  const [loginState, setLoginState] = useRecoilState(signinState)
  const resetState = useResetRecoilState(signinState)

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
      removeCookie('auth')
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
    isAdmin
  }
}

export default useCustomAccount
