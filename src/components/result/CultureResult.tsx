import useCustomResult, {TCustomResult} from '../../hooks/useCustomResult'
import {Category, Domain} from '../../types/Course'

interface CultureResultProps {
  type: Category | Domain
}

const CultureResult: React.FC<CultureResultProps> = ({type}) => {
  const {getResult}: TCustomResult = useCustomResult()
  const result = getResult(type)
  return <div>{result?.status.total}</div>
}

export default CultureResult
