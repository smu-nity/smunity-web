import {Answer} from '../types/Answer'
import jwtAxios from '../util/jwtUtil'

export const fetchAnswer = async (id: string): Promise<Answer> => {
  const res = await jwtAxios.get(`/api/v1/questions/${id}/answer`)
  return res.data
}
