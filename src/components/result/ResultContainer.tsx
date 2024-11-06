import React from 'react'
import {Culture, Domain} from '../../types/Culture'
import {Category} from '../../types/Course'
import MajorTable from './MajorTable'
import CultureBasicTable from './CultureBasicTable'
import CultureResult from './CultureResult'
import useCustomResult, {TCustomResult} from '../../hooks/useCustomResult'
import {Result} from '../../types/Result'

interface ResultContainerProps {
  type: Category | Domain
}

const ResultContainer: React.FC<ResultContainerProps> = ({type}) => {
  const {getResult, getExplain}: TCustomResult = useCustomResult()
  const result = getResult(type)
  const required =
    type === 'MAJOR_ADVANCED' || type === 'MAJOR_OPTIONAL'
      ? result?.status.required.toString()
      : undefined
  const explain = getExplain(type, result?.completed, required)

  const table = {
    ALL: null,
    MAJOR_ADVANCED: <MajorTable type={type} />,
    MAJOR_OPTIONAL: <MajorTable type={type} />,
    CULTURE: null,
    BASIC: <CultureBasicTable result={result as Result<Culture>} />,
    CORE: <CultureResult type={type} />,
    BALANCE: <CultureResult type={type} />
  }[type]

  return (
    <>
      <div className="modal-scroll">{table}</div>
      <div className="partdiv">
        <span className={`text-${result?.completed ? 'completed' : 'uncompleted'}`}>
          {explain}
        </span>
      </div>
    </>
  )
}

export default ResultContainer
