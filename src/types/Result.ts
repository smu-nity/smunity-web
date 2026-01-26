import {Status} from '@/types/Status'

export interface Base<T> {
  count: number
  content: [T]
}

export interface Result<T> extends Base<T> {
  completed: boolean
  status: Status
}
