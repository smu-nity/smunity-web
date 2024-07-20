import {RecoilState, atom} from 'recoil'
import {Member} from '../interfaces/Member'
import {getCookie} from '../util/cookieUtil'

const initState: Member = {
  email: ''
}

//쿠키에서 체크
const loadMemberCookie = (): Member => {
  const memberInfo = getCookie('member')

  //닉네임 처리
  if (memberInfo && memberInfo.nickname) {
    memberInfo.nickname = decodeURIComponent(memberInfo.nickname)
  }
  return memberInfo
}

const signinState: RecoilState<Member> = atom({
  key: 'signinState',
  default: loadMemberCookie() || initState
})

export default signinState
