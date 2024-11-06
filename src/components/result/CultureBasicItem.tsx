import {useEffect, useState} from 'react'
import {Base} from '../../types/Result'
import {Culture} from '../../types/Culture'
import {fetchCultures} from '../../api/cultureApi'

interface CultureBasicItemProps {
  subDomain: string
  subDomainName: string
  completed: boolean
}

const CultureBasicItem: React.FC<CultureBasicItemProps> = ({
  subDomain,
  subDomainName,
  completed
}) => {
  const [cultures, setCultures] = useState<Base<Culture> | null>(null)

  useEffect(() => {
    fetchCultures({subDomain}).then((data: Base<Culture>) => {
      setCultures(data)
    })
  }, [subDomain])

  const renderCultureColumn = (key: keyof Culture) =>
    cultures?.content.map((culture, index) => {
      const text = culture[key]
      const isLast = index === cultures?.content.length - 1
      return (
        <div key={index} className={`culture-td ${!isLast && 'culture-border'}`}>
          {text}
        </div>
      )
    })

  return (
    <tr className="culture-tr">
      <td className="mytd">{subDomainName}</td>
      <td className="mytd">{renderCultureColumn('number')}</td>
      <td className="mytd">{renderCultureColumn('name')}</td>
      <td className="mytd">{renderCultureColumn('credit')}</td>
      <td className={`mytd text-bold text-${completed ? 'completed' : 'uncompleted'}`}>
        {completed ? '이수' : '미이수'}
      </td>
    </tr>
  )
}

export default CultureBasicItem
