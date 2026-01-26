import {atom, RecoilState} from 'recoil'
import {Auth} from '@/types/Auth'
import {getCookie} from '@/util/cookieUtil'

const initState: Auth = {}

//쿠키에서 체크
const loadAuthCookie = (): Auth => {
  return getCookie('authPassword')
}

const authePasswordState: RecoilState<Auth> = atom({
  key: 'authePasswordState',
  default: loadAuthCookie() || initState
})

export default authePasswordState
