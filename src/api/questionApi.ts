import {Page} from '../types/Page'
import {Question} from '../types/Question'
import jwtAxios from '../util/jwtUtil'
import api from './config'

export const fetchQuestions = async (
  params?: Record<string, string>
): Promise<Page<Question>> => {
  const res = await api.get('/api/v1/questions', {params})
  return res.data
}

export const fetchQuestion = async (id: string): Promise<Question> => {
  const res = await api.get(`/api/v1/questions/${id}`)
  return res.data
}

export const deleteQuestion = async (id: number) => {
  await jwtAxios.delete(`/api/v1/questions/${id}`)
}
