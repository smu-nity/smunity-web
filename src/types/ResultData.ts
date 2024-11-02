import {Course} from './Course'
import {Culture} from './Culture'
import {Result} from './Result'

export interface ResultData {
  advanced: Result<Course>
  optional: Result<Course>
  basic: Result<Culture>
  core: Result<Culture>
  balance: Result<Culture>
}
