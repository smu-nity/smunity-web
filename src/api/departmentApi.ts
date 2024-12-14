import {Department} from '../types/Department'
import {Base} from '../types/Result'
import api from './config'

export const fetchDepartments = async (
  params?: Record<string, string>
): Promise<Base<Department>> => {
  const res = await api.get('/api/v1/departments', {params})
  return res.data
}
