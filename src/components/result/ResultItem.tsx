import {useEffect, useState} from 'react'
import CreditItem from './CreditItem'
import PieChart from './PieChart'
import {Credit} from '../../types/Credit'
import {fetchCredit} from '../../api/courseApi'

const ResultBox: React.FC = () => {
  const [credit, setCredit] = useState<Credit>()
  const fetchData = async () => {
    const data = await fetchCredit()
    setCredit(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return credit ? (
    <div className="resultbox-main">
      <div className="result_name">
        <i className="fa-solid fa-user"></i> 이수학점
        <span className="small">
          {credit.username} {credit.name}
        </span>
      </div>
      <div className="result_container">
        <CreditItem credit={credit.total} text="총 기준 학점" />
        <CreditItem credit={credit.completed} text="총 이수 학점" line={true} />
        <CreditItem credit={credit.major} text="전공" />
        <CreditItem credit={credit.culture} text="교양" />
        <CreditItem credit={credit.etc} text="일반" line={true} />
        <CreditItem credit={credit.required} text="필요 학점" red={true} />
        <PieChart percent={credit.completion} />
      </div>
    </div>
  ) : null
}

export default ResultBox
