import ResultDetailItem from '../../components/result/ResultDetailItem'
import ResultItem from '../../components/result/ResultItem'
import {Category, Domain} from '../../types/Course'

const ResultPage = () => {
  const categorys: Category[] = ['ALL', 'MAJOR_ADVANCED', 'MAJOR_OPTIONAL', 'CULTURE']
  const domains: Domain[] = ['BASIC', 'CORE', 'BALANCE']

  return (
    <div className="lcontainer">
      <div className="rcontainer">
        <ResultItem />
      </div>
      <div className="rcontainer">
        {categorys.map((category, index) => (
          <ResultDetailItem category={category} key={index} />
        ))}
      </div>
    </div>
  )
}

export default ResultPage
