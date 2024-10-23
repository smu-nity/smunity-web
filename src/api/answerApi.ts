import {AxiosResponse} from 'axios'
import jwtAxios from '../util/jwtUtil'

export const fetchAnswer = async (id: string): Promise<AxiosResponse> => {
  return await jwtAxios.get(`/api/v1/questions/${id}/answer`)
}

export const deleteAnswer = async (id: number) => {
  await jwtAxios.delete(`/api/v1/questions/${id}/answer`)
}
