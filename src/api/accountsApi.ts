import axios from 'axios'
import {Member} from '../interfaces/Member'

export type TLoginParam = {
  username: string
  password: string
}

export const login = async (loginParam: TLoginParam): Promise<Member> => {
  const header = {headers: {'Content-Type': 'x-www-form-urlencoded'}}

  const form = new FormData()
  form.append('username', loginParam.username)
  form.append('password', loginParam.password)

  const res = await axios.post(`$/api/v1/login`, form, header)
  return res.data
}
