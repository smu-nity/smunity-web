import {Culture} from '@/types/Culture'
import {Base} from '@/types/Result'
import jwtAxios from '@/util/jwtUtil'

export const fetchCultures = async (
  params?: Record<string, string>
): Promise<Base<Culture>> => {
  const res = await jwtAxios.get('/api/v1/cultures', {params})
  return res.data
}
