import {useRecoilState} from 'recoil'
import checkState from '../atoms/agreeState'

export interface TCusotmAgree {
  clickCheckBox: () => void
  agreeState: boolean
}

const useCustomAgree = (): TCusotmAgree => {
  const [agreeState, setAgreeState] = useRecoilState(checkState)

  const clickCheckBox = () => {
    setAgreeState(!agreeState)
  }

  return {agreeState, clickCheckBox}
}

export default useCustomAgree
