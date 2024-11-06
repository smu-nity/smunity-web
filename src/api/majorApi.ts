import {Major} from '../types/Major'
import {Base} from '../types/Result'
import jwtAxios from '../util/jwtUtil'

export const fetchMajors = async (
  params?: Record<string, string>
): Promise<Base<Major>> => {
  const res = await jwtAxios.get('/api/v1/majors', {params})
  return res.data
}
