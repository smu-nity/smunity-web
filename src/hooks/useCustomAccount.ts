import {login, register, TLoginParam, TRegisterParam} from '../api/accountsApi'
import {Member} from '../interfaces/Member'
import {useRecoilState, useResetRecoilState} from 'recoil'
import signinState from '../atoms/accountState'
import {removeCookie, setCookie} from '../util/cookieUtil'

export interface TCustomAccount {
  loginState: Member
  doLogin: (loginParam: TLoginParam) => Promise<any>
  doRegister: (registerParam: TRegisterParam) => Promise<any>
  doLogout: () => void
  saveAsCookie: (data: Member) => void
}

const useCustomAccount = (): TCustomAccount => {
  const [loginState, setLoginState] = useRecoilState(signinState)
  const resetState = useResetRecoilState(signinState)

  //----------로그인 함수
  const doLogin = async (loginParam: TLoginParam) => {
    const response = await login(loginParam)
    const success = response.status < 400
    if (success) {
      saveAsCookie(response.data)
    }
    return success
  }

  //----------회원가입 함수
  const doRegister = async (registerParam: TRegisterParam) => {
    const response = await register(registerParam)
    const success = response.status < 400
    if (success) {
      removeCookie('auth')
      const loginParam = {
        username: registerParam.username,
        password: registerParam.password
      }
      return doLogin(loginParam)
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

  return {loginState, doLogin, doRegister, doLogout, saveAsCookie}
}

export default useCustomAccount
