import {AxiosResponse} from 'axios'
import api from './config'
import {TLoginParam} from './accountApi'

export const auth = async (loginParam: TLoginParam): Promise<AxiosResponse> =>
  await api.post('/api/v1/auth/register', loginParam)

export const authPassword = async (loginParam: TLoginParam): Promise<AxiosResponse> =>
  await api.post('/api/v1/auth/password/reset', loginParam)
