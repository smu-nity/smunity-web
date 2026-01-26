import {RecoilState, atom} from 'recoil'
import {Member} from '@/types/Member'
import {getCookie} from '@/util/cookieUtil'

const initState: Member = {}

//쿠키에서 체크
const loadMemberCookie = (): Member => {
  return getCookie('member')
}

const signinState: RecoilState<Member> = atom({
  key: 'signinState',
  default: loadMemberCookie() || initState
})

export default signinState
