import {DepartmentEditable} from '../types/DepartmentEditable'
import {Base} from '../types/Result'
import jwtAxios from '../util/jwtUtil'

export const fetchEditableDepartments = async (): Promise<Base<DepartmentEditable>> => {
  const res = await jwtAxios.get('/api/v1/departments/editable')
  return res.data
}
