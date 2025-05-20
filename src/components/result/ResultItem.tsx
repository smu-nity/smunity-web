import CreditItem from './CreditItem'
import PieChart from './PieChart'
import {Credit} from '../../types/Credit'

interface ResultItemProps {
  credit: Credit
}

const ResultItem: React.FC<ResultItemProps> = ({credit}) => {
  return (
    <div className="resultbox-main">
      <div className="result_name">
        <i className="fas fa-solid fa-user"></i> 이수학점
        <span className="small margin-l">
          {credit.username} {credit.name}
        </span>
      </div>
      <div className="result_container">
        <CreditItem credit={credit.total} text="총 기준 학점" />
        <CreditItem credit={credit.completed} text="총 이수 학점" line animated />
        {credit.isDoubleMajor && credit.secondMajor != null ? (
          <>
            <CreditItem credit={credit.major} text="1전공" animated />
            <CreditItem credit={credit.secondMajor} text="다전공" animated />
          </>
        ) : (
          <CreditItem credit={credit.major} text="전공" animated />
        )}
        <CreditItem credit={credit.culture} text="교양" animated />
        <CreditItem credit={credit.etc} text="일반" line animated />
        <CreditItem credit={credit.required} text="필요 학점" red />
        <PieChart percent={credit.completion} />
      </div>
    </div>
  )
}

export default ResultItem
