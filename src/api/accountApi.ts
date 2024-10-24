import {AxiosResponse} from 'axios'
import api from './config'

export type TLoginParam = {
  username: string
  password: string
}

export type TRegisterParam = {
  username: string
  password: string
  email: string
  name: string
  department: string
}

export const login = async (loginParam: TLoginParam): Promise<AxiosResponse> => {
  return await api.post('/api/v1/accounts/login', loginParam)
}

export const auth = async (loginParam: TLoginParam): Promise<AxiosResponse> => {
  return await api.post('/api/v1/auth', loginParam)
}

export const register = async (registerParam: TRegisterParam): Promise<AxiosResponse> => {
  return await api.post('/api/v1/accounts/register', registerParam)
}
