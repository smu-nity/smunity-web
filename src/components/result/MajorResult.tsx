import useCustomResult, {TCustomResult} from '../../hooks/useCustomResult'
import {Category} from '../../types/Course'
import {Domain} from '../../types/Culture'

interface MajorResultProps {
  type: Category | Domain
}

const MajorResult: React.FC<MajorResultProps> = ({type}) => {
  const {getResult}: TCustomResult = useCustomResult()
  const result = getResult(type)
  return <div>{result?.status.total}</div>
}

export default MajorResult
