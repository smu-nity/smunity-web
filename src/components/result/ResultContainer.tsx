import React from 'react'
import {Category, CourseCulture, Domain} from '../../types/Course'
import MajorTable from './MajorTable'
import CultureBasicTable from './CultureBasicTable'
import useCustomResult, {TCustomResult} from '../../hooks/useCustomResult'
import {Result} from '../../types/Result'
import CultureTable from './CultureTable'
import CultureResultTable from './CultureResultTable'

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
    FIRST_MAJOR: <MajorTable type={type} />,
    SECOND_MAJOR: <MajorTable type={type} />,
    CULTURE: null,
    BASIC: <CultureBasicTable result={result as Result<CourseCulture>} />,
    CORE: <CultureTable result={result as Result<CourseCulture>} />,
    BALANCE: <CultureTable result={result as Result<CourseCulture>} />
  }[type]

  return (
    <>
      <div className="modal-scroll">{table}</div>
      <div className="partdiv">
        <span className={`text-${result?.completed ? 'completed' : 'uncompleted'}`}>
          {explain}
        </span>
        {(type === 'CORE' || type === 'BALANCE') &&
          !result?.completed &&
          (result as Result<CourseCulture>).content
            .filter(culture => !culture.completed)
            .map((culture, index) => (
              <CultureResultTable
                key={index}
                subDomain={culture.subDomain}
                subDomainName={culture.subDomainName}
              />
            ))}
      </div>
    </>
  )
}

export default ResultContainer
