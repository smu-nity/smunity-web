import {atom, RecoilState} from 'recoil'

const checkState: RecoilState<boolean> = atom({
  key: 'checkState',
  default: false
})

export default checkState
