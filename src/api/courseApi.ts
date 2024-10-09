import {Course} from '../types/Course'
import {Result} from '../types/Result'
import jwtAxios from '../util/jwtUtil'

export const getCourses = async (): Promise<Result<Course>> => {
  const res = await jwtAxios.get(`/api/v1/courses`)
  return res.data
}
