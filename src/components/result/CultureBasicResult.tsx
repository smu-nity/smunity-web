import useCustomResult, {TCustomResult} from '../../hooks/useCustomResult'
import {Category} from '../../types/Course'
import {Domain} from '../../types/Culture'

interface CultureBasicResultProps {
  type: Category | Domain
}

const CultureBasicResult: React.FC<CultureBasicResultProps> = ({type}) => {
  const {getResult}: TCustomResult = useCustomResult()
  const result = getResult(type)
  return <div>{result?.status.total}</div>
}

export default CultureBasicResult
