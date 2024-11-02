import {useEffect, useState} from 'react'
import CreditItem from './CreditItem'
import PieChart from './PieChart'
import {Culture, Domain} from '../../types/Culture'
import {Result} from '../../types/Result'
import {fetchCulture} from '../../api/courseApi'
import useCustomResult, {TCustomResult} from '../../hooks/useCustomResult'

interface ResultCultureItemProps {
  domain: Domain
  openModal: () => void
}

const ResultCultureItem: React.FC<ResultCultureItemProps> = ({domain, openModal}) => {
  const [cultures, setCultures] = useState<Result<Culture>>()
  const {getDetail, saveResult}: TCustomResult = useCustomResult()

  useEffect(() => {
    fetchCulture(domain).then((data: Result<Culture>) => {
      setCultures(data)
      saveResult(domain, data)
    })
  }, [domain])

  const domainDetails = getDetail(domain)

  const labelType = domain === 'BASIC' ? '과목' : '영역'

  return cultures ? (
    <div className="resultbox">
      <div className="result_name">
        <i className={`fa-solid ${domainDetails.icon}`}>{domainDetails.text}</i>
        <div className="recommend" onClick={() => openModal()}>
          추천 과목 보기
        </div>
      </div>
      <div className="result_container">
        <CreditItem credit={cultures.status.total} text={`기준 ${labelType}`} />
        <CreditItem credit={cultures.status.completed} text={`이수 ${labelType}`} />
        <CreditItem credit={cultures.status.required} text={`필요 ${labelType}`} red />
        <PieChart percent={cultures.status.completion} />
      </div>
    </div>
  ) : null
}

export default ResultCultureItem
