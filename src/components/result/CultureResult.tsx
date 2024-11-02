import useCustomResult, {TCustomResult} from '../../hooks/useCustomResult'
import {Category} from '../../types/Course'
import {Domain} from '../../types/Culture'

interface CultureResultProps {
  type: Category | Domain
}

const CultureResult: React.FC<CultureResultProps> = ({type}) => {
  const {getResult}: TCustomResult = useCustomResult()
  const result = getResult(type)
  return <div>{result?.status.total}</div>
}

export default CultureResult
