import {MemberInfo} from '../types/MemberInfo'
import jwtAxios from '../util/jwtUtil'

export const getMember = async (): Promise<MemberInfo> => {
  const res = await jwtAxios.get(`/api/v1/members/me`)
  return res.data
}
