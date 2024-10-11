import {Page} from '../types/Page'
import {Question} from '../types/Question'
import api from './config'

export const fetchQuestions = async (
  params?: Record<string, string>
): Promise<Page<Question>> => {
  const res = await api.get('/api/v1/questions', {params})
  return res.data
}
