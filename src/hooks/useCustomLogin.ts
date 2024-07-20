import {useNavigate} from 'react-router-dom'
import {login, TLoginParam} from '../api/accountsApi'
import {Member} from '../interfaces/Member'
import {useRecoilState, useResetRecoilState} from 'recoil'
import signinState from '../atoms/accountState'
import {removeCookie, setCookie} from '../util/cookieUtil'

export interface TCusotmLogin {
  loginState: Member
  doLogin: (loginParam: TLoginParam) => Promise<any>
  doLogout: () => void
  moveToPath: (path: string) => void
  moveToLogin: () => void
  saveAsCookie: (data: Member) => void
}

const useCustomLogin = (): TCusotmLogin => {
  const navigate = useNavigate()

  const [loginState, setLoginState] = useRecoilState(signinState)
  const resetState = useResetRecoilState(signinState)

  //----------로그인 함수
  const doLogin = async (loginParam: TLoginParam) => {
    const result = await login(loginParam)
    console.log(result)
    saveAsCookie(result)
    return result
  }

  const saveAsCookie = (data: Member) => {
    setCookie('member', JSON.stringify(data), 1) //1일
    setLoginState(data)
  }

  //---------------로그아웃 함수
  const doLogout = () => {
    removeCookie('member')
    resetState()
  }

  //----------------페이지 이동
  const moveToPath = (path: string) => {
    navigate({pathname: path}, {replace: true})
  }

  //----------------------로그인 페이지로 이동
  const moveToLogin = () => {
    navigate({pathname: '/member/login'}, {replace: true})
  }

  return {loginState, doLogin, doLogout, moveToPath, moveToLogin, saveAsCookie}
}

export default useCustomLogin
