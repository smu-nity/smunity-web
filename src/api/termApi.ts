import {AxiosResponse} from 'axios'
import api from '@/api/config'

export const fetchCurrentTerm = async (): Promise<AxiosResponse> =>
  await api.get('/api/v1/terms/current')
