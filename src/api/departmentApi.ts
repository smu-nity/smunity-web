import {DepartmentEditable} from '../types/DepartmentEditable'
import {Base} from '../types/Result'
import api from './config'

export const fetchEditableDepartments = async (): Promise<Base<DepartmentEditable>> => {
  const res = await api.get('/api/v1/departments/editable')
  return res.data
}
