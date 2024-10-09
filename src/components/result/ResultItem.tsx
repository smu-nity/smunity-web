import React from 'react'
import CreditItem from './CreditItem'
import PieChart from './PieChart'

const ResultBox: React.FC = () => {
  const result = {
    username: '201911019',
    name: '최현민',
    total: 130,
    completed: 132,
    major: 84,
    culture: 42,
    etc: 6,
    required: 0,
    completion: 100
  }

  return (
    <div className="resultbox-main">
      <div className="result_name">
        <i className="fa-solid fa-user"></i> 이수학점
        <span className="small">
          {result.username} {result.name}
        </span>
      </div>
      <div className="result_container">
        <CreditItem credit={result.total} text="총 기준 학점" />
        <CreditItem credit={result.completed} text="총 이수 학점" line={true} />
        <CreditItem credit={result.major} text="전공" />
        <CreditItem credit={result.culture} text="교양" />
        <CreditItem credit={result.etc} text="일반" line={true} />
        <CreditItem credit={result.required} text="필요 학점" red={true} />
        <PieChart percent={result.completion} />
      </div>
    </div>
  )
}

export default ResultBox
