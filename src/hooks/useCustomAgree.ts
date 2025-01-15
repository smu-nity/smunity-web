import {useRecoilState, useResetRecoilState} from 'recoil'
import checkState from '../atoms/agreeState'
import {removeCookie, setCookie} from '../util/cookieUtil'
import {Auth} from '../types/Auth'
import autheState from '../atoms/authState'
import {auth, authPassword} from '../api/authApi'
import {TLoginParam} from '../api/accountApi'
import authePasswordState from '../atoms/authPasswordState'

export interface TCustomAgree {
  agreeState: boolean
  authState: Auth
  authPasswordState: Auth
  clickCheckBox: () => void
  doAuth: (loginParam: TLoginParam) => Promise<boolean>
  doPasswordAuth: (loginParam: TLoginParam) => Promise<boolean>
  isAuth: () => boolean
  isAuthPassword: () => boolean
  removeAuth: () => void
}

const useCustomAgree = (): TCustomAgree => {
  const [agreeState, setAgreeState] = useRecoilState(checkState)
  const [authState, setAuthState] = useRecoilState(autheState)
  const [authPasswordState, setAuthPasswordState] = useRecoilState(authePasswordState)
  const resetAgreeState = useResetRecoilState(checkState)
  const resetAuthState = useResetRecoilState(autheState)

  const clickCheckBox = () => {
    setAgreeState(!agreeState)
  }

  const doAuth = async (loginParam: TLoginParam) => {
    const response = await auth(loginParam)
    const success = response.status < 400
    success ? saveAuth(response.data) : alertError(response.data)
    return success
  }

  const doPasswordAuth = async (loginParam: TLoginParam) => {
    const response = await authPassword(loginParam)
    const success = response.status < 400
    success ? saveAuthPassword(response.data) : alertError(response.data)
    return success
  }

  const saveAuth = (data: Auth) => {
    setCookie('auth', JSON.stringify(data), 1) //1일
    setAuthState(data)
  }

  const saveAuthPassword = (data: Auth) => {
    setCookie('authPassword', JSON.stringify(data), 1) //1일
    setAuthPasswordState(data)
  }

  const isAuth = () => {
    return !!authState.username
  }

  const isAuthPassword = () => {
    return !!authPasswordState.username
  }

  const removeAuth = () => {
    removeCookie('auth')
    resetAgreeState()
    resetAuthState()
    setAgreeState(false)
    setAuthState({})
  }

  const alertError = (data: any) =>
    alert(
      data.detail
        ? `${data.message}\n${Object.values(data.detail).join('\n')}`
        : data.message
    )

  return {
    agreeState,
    authPasswordState,
    authState,
    clickCheckBox,
    doAuth,
    doPasswordAuth,
    isAuth,
    isAuthPassword,
    removeAuth
  }
}

export default useCustomAgree
