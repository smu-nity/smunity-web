import {AxiosResponse} from 'axios'
import api from '@/api/config'
import {TLoginParam} from '@/api/accountApi'

export const auth = async (loginParam: TLoginParam): Promise<AxiosResponse> =>
  await api.post('/api/v1/auth/register', loginParam, {timeout: 30000})

export const authPassword = async (loginParam: TLoginParam): Promise<AxiosResponse> =>
  await api.post('/api/v1/auth/password/reset', loginParam, {timeout: 30000})
