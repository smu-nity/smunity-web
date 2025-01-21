import {AxiosResponse} from 'axios'
import api from './config'

export const fetchCurrentTerm = async (): Promise<AxiosResponse> =>
  await api.get('/api/v1/terms/current')
