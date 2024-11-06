import {CourseCulture} from '../../types/Course'
import {Result} from '../../types/Result'

interface CultureTableProps {
  result: Result<CourseCulture>
}

const CultureTable: React.FC<CultureTableProps> = ({result}) => {
  return (
    <table className="mytable">
      <thead>
        <tr className="myth">
          {result?.content?.map((culture, index) => (
            <th key={index} className="border-r">
              {culture.subDomainName}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr className="mytr">
          {result?.content?.map((culture, index) => (
            <td
              key={index}
              className={`mytd text-bold text-${
                culture.completed ? 'completed' : 'uncompleted'
              }`}>
              {culture.completed ? '이수' : '미이수'}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  )
}

export default CultureTable
