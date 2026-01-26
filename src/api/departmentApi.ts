import {Department} from '@/types/Department'
import {DepartmentEditable} from '@/types/DepartmentEditable'
import {Base} from '@/types/Result'
import jwtAxios from '@/util/jwtUtil'

export const fetchDepartments = async (): Promise<Base<Department>> => {
  const res = await jwtAxios.get('/api/v1/departments')
  return res.data
}

export const fetchEditableDepartments = async (): Promise<Base<DepartmentEditable>> => {
  const res = await jwtAxios.get('/api/v1/departments/editable')
  return res.data
}
