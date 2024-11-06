interface CultureBasicItemProps {
  subDomain: string
  completed: boolean
}

const CultureBasicItem: React.FC<CultureBasicItemProps> = ({subDomain, completed}) => {
  return (
    <tr className="mytr">
      <td className="mytd">{subDomain}</td>
      <td className="mytd">{subDomain}</td>
      <td className="mytd">{subDomain}</td>
      <td className={`mytd text-bold text-${completed ? 'completed' : 'uncompleted'}`}>
        {completed ? '이수' : '미이수'}
      </td>
    </tr>
  )
}

export default CultureBasicItem
