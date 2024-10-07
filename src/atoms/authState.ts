import {atom, RecoilState} from 'recoil'
import {Auth} from '../interfaces/Auth'
import {getCookie} from '../util/cookieUtil'

const initState: Auth = {}

//쿠키에서 체크
const loadAuthCookie = (): Auth => {
  return getCookie('auth')
}

const autheState: RecoilState<Auth> = atom({
  key: 'autheState',
  default: loadAuthCookie() || initState
})

export default autheState
