import {AxiosResponse} from 'axios'
import {MemberInfo} from '../types/MemberInfo'
import jwtAxios from '../util/jwtUtil'
import {TLoginParam} from './accountApi'

export type TPasswordParam = {
  password: string
}

export const fetchMember = async (): Promise<MemberInfo> => {
  const res = await jwtAxios.get('/api/v1/members/me')
  return res.data
}

export const updateMember = async (loginParam: TLoginParam): Promise<AxiosResponse> =>
  await jwtAxios.put('/api/v1/members/me', loginParam)

export const changePassword = async (passwordParam: TPasswordParam) =>
  await jwtAxios.patch('/api/v1/members/me/password', passwordParam)
