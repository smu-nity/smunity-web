import {CourseCulture} from '@/types/Course'
import {Result} from '@/types/Result'
import CultureBasicItem from '@/components/result/CultureBasicItem'

interface CultureBasicTableProps {
  result: Result<CourseCulture>
}

const CultureBasicTable: React.FC<CultureBasicTableProps> = ({result}) => {
  return (
    <table className="mytable">
      <thead>
        <tr className="myth">
          <th className="w-24 border-r">영역</th>
          <th className="w-16 border-r">학수번호</th>
          <th className="w-40 border-r">과목명</th>
          <th className="w-8 border-r">학점</th>
          <th className="w-12 border-r">이수 여부</th>
        </tr>
      </thead>
      <tbody>
        {result?.content?.map((culture, index) => (
          <CultureBasicItem
            key={index}
            subDomain={culture.subDomain}
            subDomainName={culture.subDomainName}
            completed={culture.completed}
          />
        ))}
      </tbody>
    </table>
  )
}

export default CultureBasicTable
