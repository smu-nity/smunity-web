import {AxiosResponse} from 'axios'
import {Page} from '../types/Page'
import {Question, QuestionRequest} from '../types/Question'
import jwtAxios from '../util/jwtUtil'

export const fetchQuestions = async (
  params: Record<string, string>
): Promise<Page<Question>> => {
  if (params.page) {
    params.page = (parseInt(params.page) - 1).toString()
  }
  const res = await jwtAxios.get('/api/v1/questions', {params})
  return res.data
}

export const fetchQuestion = async (id: string): Promise<AxiosResponse> =>
  await jwtAxios.get(`/api/v1/questions/${id}`)

export const createQuestion = async (request: QuestionRequest): Promise<AxiosResponse> =>
  await jwtAxios.post('/api/v1/questions', request)

export const updateQuestion = async (
  id: string,
  request: QuestionRequest
): Promise<AxiosResponse> => await jwtAxios.put(`/api/v1/questions/${id}`, request)

export const deleteQuestion = async (id: number) =>
  await jwtAxios.delete(`/api/v1/questions/${id}`)
