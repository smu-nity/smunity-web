import {MemberInfo} from '../types/MemberInfo'
import jwtAxios from '../util/jwtUtil'

export const fetchMember = async (): Promise<MemberInfo> => {
  const res = await jwtAxios.get('/api/v1/members/me')
  return res.data
}
