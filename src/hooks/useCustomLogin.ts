import {login, TLoginParam} from '../api/accountsApi'
import {Member} from '../interfaces/Member'
import {useRecoilState, useResetRecoilState} from 'recoil'
import signinState from '../atoms/accountState'
import {removeCookie, setCookie} from '../util/cookieUtil'

export interface TCusotmLogin {
  loginState: Member
  doLogin: (loginParam: TLoginParam) => Promise<any>
  doLogout: () => void
  saveAsCookie: (data: Member) => void
}

const useCustomLogin = (): TCusotmLogin => {
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

  return {loginState, doLogin, doLogout, saveAsCookie}
}

export default useCustomLogin
