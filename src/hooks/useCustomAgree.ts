import {useRecoilState, useResetRecoilState} from 'recoil'
import checkState from '../atoms/agreeState'
import {auth, TLoginParam} from '../api/accountApi'
import {removeCookie, setCookie} from '../util/cookieUtil'
import {Auth} from '../types/Auth'
import autheState from '../atoms/authState'

export interface TCustomAgree {
  agreeState: boolean
  authState: Auth
  clickCheckBox: () => void
  doAuth: (loginParam: TLoginParam) => Promise<boolean>
  isAuth: () => boolean
  removeAuth: () => void
}

const useCustomAgree = (): TCustomAgree => {
  const [agreeState, setAgreeState] = useRecoilState(checkState)
  const [authState, setAuthState] = useRecoilState(autheState)
  const resetAgreeState = useResetRecoilState(checkState)
  const resetAuthState = useResetRecoilState(autheState)

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

  const removeAuth = () => {
    removeCookie('auth')
    resetAgreeState()
    resetAuthState()
    setAgreeState(false)
    setAuthState({})
  }

  return {agreeState, authState, clickCheckBox, doAuth, isAuth, removeAuth}
}

export default useCustomAgree
