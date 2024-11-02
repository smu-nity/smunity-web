import {atom, RecoilState} from 'recoil'
import {ResultData} from '../types/ResultData'
import {Result} from '../types/Result'
import {Course} from '../types/Course'
import {Culture} from '../types/Culture'

const initState: ResultData = {
  advanced: {} as Result<Course>,
  optional: {} as Result<Course>,
  basic: {} as Result<Culture>,
  core: {} as Result<Culture>,
  balance: {} as Result<Culture>
}

const resultState: RecoilState<ResultData> = atom({
  key: 'resultState',
  default: initState
})

export default resultState
