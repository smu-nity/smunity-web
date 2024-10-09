import {Status} from './Status'

export interface Result<T> {
  completed: boolean
  status: Status
  count: number
  content: [T]
}
