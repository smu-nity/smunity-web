import {AxiosResponse} from 'axios'
import {MemberInfo} from '../types/MemberInfo'
import jwtAxios from '../util/jwtUtil'
import {TLoginParam} from './accountApi'
import api from './config'

export type TPasswordParam = {
  password: string
}

export type TDepartmentParam = {
  departmentId: number
}

export const fetchMember = async (): Promise<MemberInfo> => {
  const res = await jwtAxios.get('/api/v1/members/me')
  return res.data
}

export const updateMember = async (loginParam: TLoginParam): Promise<AxiosResponse> =>
  await jwtAxios.put('/api/v1/members/me', loginParam)

export const changePassword = async (passwordParam: TPasswordParam) =>
  await jwtAxios.patch('/api/v1/members/me/password', passwordParam)

export const changeDepartment = async (departmentParam: TDepartmentParam) =>
  await jwtAxios.patch('/api/v1/members/me/department', departmentParam)

export const deleteMember = async (): Promise<AxiosResponse> =>
  await jwtAxios.delete('/api/v1/members/me')

export const resetPassword = async (passwordParam: TPasswordParam, authToken?: string) =>
  await api.patch('/api/v1/members/password/reset', passwordParam, {
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
