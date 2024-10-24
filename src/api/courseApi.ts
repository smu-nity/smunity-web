import {Course} from '../types/Course'
import {Credit} from '../types/Credit'
import {Culture, Domain} from '../types/Culture'
import {Result} from '../types/Result'
import jwtAxios from '../util/jwtUtil'

export const fetchCourses = async (
  params?: Record<string, string>
): Promise<Result<Course>> => {
  const res = await jwtAxios.get('/api/v1/courses', {params})
  return res.data
}

export const fetchCredit = async (): Promise<Credit> => {
  const res = await jwtAxios.get('/api/v1/courses/credit')
  return res.data
}

export const fetchCulture = async (domain: Domain): Promise<Result<Culture>> => {
  const res = await jwtAxios.get(`/api/v1/courses/cultures/${domain}`)
  return res.data
}
