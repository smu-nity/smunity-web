import {AxiosResponse} from 'axios'
import jwtAxios from '@/util/jwtUtil'
import {AnswerRequest} from '@/types/Answer'

export const fetchAnswer = async (id: string): Promise<AxiosResponse> =>
  await jwtAxios.get(`/api/v1/questions/${id}/answer`)

export const createAnswer = async (id: string, request: AnswerRequest) =>
  await jwtAxios.post(`/api/v1/questions/${id}/answer`, request)

export const updateAnswer = async (id: string, request: AnswerRequest) =>
  await jwtAxios.put(`/api/v1/questions/${id}/answer`, request)

export const deleteAnswer = async (id: number) =>
  await jwtAxios.delete(`/api/v1/questions/${id}/answer`)
