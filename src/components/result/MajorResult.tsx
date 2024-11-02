import useCustomResult, {TCustomResult} from '../../hooks/useCustomResult'

const MajorResult = () => {
  const {resultDataState}: TCustomResult = useCustomResult()

  return <div>{resultDataState.advanced.count}</div>
}

export default MajorResult
