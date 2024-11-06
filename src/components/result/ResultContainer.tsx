import React from 'react'
import {Domain} from '../../types/Culture'
import {Category} from '../../types/Course'
import MajorTable from './MajorTable'
import CultureBasicResult from './CultureBasicResult'
import CultureResult from './CultureResult'
import useCustomResult, {TCustomResult} from '../../hooks/useCustomResult'

interface ResultContainerProps {
  type: Category | Domain
}

const ResultContainer: React.FC<ResultContainerProps> = ({type}) => {
  const table = {
    ALL: null,
    MAJOR_ADVANCED: <MajorTable type={type} />,
    MAJOR_OPTIONAL: <MajorTable type={type} />,
    CULTURE: null,
    BASIC: <CultureBasicResult type={type} />,
    CORE: <CultureResult type={type} />,
    BALANCE: <CultureResult type={type} />
  }[type]
  const {getResult, getExplain}: TCustomResult = useCustomResult()
  const result = getResult(type)
  const required =
    type === 'MAJOR_ADVANCED' || type === 'MAJOR_OPTIONAL'
      ? result?.status.required.toString()
      : undefined
  const explain = getExplain(type, result?.completed, required)

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
