import {CourseCulture} from '../../types/Course'
import {Result} from '../../types/Result'
import CultureBasicItem from './CultureBasicItem'

interface CultureBasicTableProps {
  result: Result<CourseCulture>
}

const CultureBasicTable: React.FC<CultureBasicTableProps> = ({result}) => {
  return (
    <table className="mytable">
      <thead>
        <tr className="myth">
          <th className="w-16 border-r">학수번호</th>
          <th className="border-r w-52">과목명</th>
          <th className="w-16 border-r">학점</th>
          <th className="w-16 border-r">이수 여부</th>
        </tr>
      </thead>
      <tbody>
        {result?.content?.map((culture, index) => (
          <CultureBasicItem
            key={index}
            subDomain={culture.subDomain}
            completed={culture.completed}
          />
        ))}
      </tbody>
    </table>
  )
}

export default CultureBasicTable
