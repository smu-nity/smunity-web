import {AxiosResponse} from 'axios'
import api from './config'

export type TLoginParam = {
  username: string
  password: string
}

export const login = async (
  loginParam: TLoginParam
): Promise<AxiosResponse<any, any>> => {
  const header = {headers: {'Content-Type': 'application/json'}}
  return await api.post(`/api/v1/accounts/login`, JSON.stringify(loginParam), header)
}

export const auth = async (loginParam: TLoginParam): Promise<AxiosResponse<any, any>> => {
  const header = {headers: {'Content-Type': 'application/json'}}
  return await api.post(`/api/v1/auth`, JSON.stringify(loginParam), header)
}
