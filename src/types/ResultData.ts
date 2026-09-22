import {Course, CourseCulture} from '@/types/Course'
import {Result} from '@/types/Result'

export interface ResultData {
  advanced: Result<Course>
  major: Result<Course>
  first: Result<Course>
  second: Result<Course>
  basic: Result<CourseCulture>
  core: Result<CourseCulture>
  balance: Result<CourseCulture>
}
