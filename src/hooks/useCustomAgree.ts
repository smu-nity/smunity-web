import {useRecoilState} from 'recoil'
import checkState from '../atoms/agreeState'
import {auth, TLoginParam} from '../api/accountsApi'
import {setCookie} from '../util/cookieUtil'
import {Auth} from '../types/Auth'
import autheState from '../atoms/authState'

export interface TCustomAgree {
  agreeState: boolean
  authState: Auth
  clickCheckBox: () => void
  doAuth: (loginParam: TLoginParam) => Promise<any>
  isAuth: () => boolean
}

const useCustomAgree = (): TCustomAgree => {
  const [agreeState, setAgreeState] = useRecoilState(checkState)
  const [authState, setAuthState] = useRecoilState(autheState)

  const clickCheckBox = () => {
    setAgreeState(!agreeState)
  }

  const doAuth = async (loginParam: TLoginParam) => {
    const response = await auth(loginParam)
    const success = response.status < 400
    success ? saveAsCookie(response.data) : alert(response.data.message)
    return success
  }

  const saveAsCookie = (data: Auth) => {
    setCookie('auth', JSON.stringify(data), 1) //1일
    setAuthState(data)
  }

  const isAuth = () => {
    return !!authState.username
  }

  return {agreeState, authState, clickCheckBox, doAuth, isAuth}
}

export default useCustomAgree
