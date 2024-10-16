import {Answer} from '../types/Answer'
import api from './config'

export const fetchAnswer = async (id: string): Promise<Answer> => {
  const res = await api.get(`/api/v1/questions/${id}/answer`)
  return res.data
}
