import {atom, RecoilState} from 'recoil'
import {ResultData} from '../types/ResultData'
import {Result} from '../types/Result'
import {Course, CourseCulture} from '../types/Course'

const initState: ResultData = {
  advanced: {} as Result<Course>,
  optional: {} as Result<Course>,
  first: {} as Result<Course>,
  second: {} as Result<Course>,
  basic: {} as Result<CourseCulture>,
  core: {} as Result<CourseCulture>,
  balance: {} as Result<CourseCulture>
}

const resultState: RecoilState<ResultData> = atom({
  key: 'resultState',
  default: initState
})

export default resultState
