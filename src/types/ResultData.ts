import {Course, CourseCulture} from './Course'
import {Result} from './Result'

export interface ResultData {
  advanced: Result<Course>
  optional: Result<Course>
  basic: Result<CourseCulture>
  core: Result<CourseCulture>
  balance: Result<CourseCulture>
}
