import ResultCultureItem from '../../components/result/ResultCultureItem'
import ResultDetailItem from '../../components/result/ResultDetailItem'
import ResultItem from '../../components/result/ResultItem'
import {Category} from '../../types/Course'
import {Domain} from '../../types/Culture'

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
        {domains.map((domain, index) => (
          <ResultCultureItem domain={domain} key={index} />
        ))}
      </div>
    </div>
  )
}

export default ResultPage
