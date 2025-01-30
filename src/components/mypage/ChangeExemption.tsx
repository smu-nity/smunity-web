import {ExemptionType} from '../../types/Exemption'

interface ChangeExemptionProps {
  exemption?: ExemptionType
}

const exemptions: {name: string; value?: ExemptionType}[] = [
  {name: '해당없음', value: undefined},
  {name: '외국인특별전형', value: 'FOREIGN'},
  {name: '장애학생', value: 'DISABLED'},
  {name: '편입생', value: 'TRANSFER'}
]

const ChangeExemption: React.FC<ChangeExemptionProps> = ({exemption}) => {
  return (
    <td className="regi_box" style={{width: '90%', marginLeft: '0', marginRight: '1rem'}}>
      <select>
        {exemptions?.map(exemption => (
          <option key={exemption.name} value={exemption.value}>
            {exemption.name}
          </option>
        ))}
      </select>
    </td>
  )
}

export default ChangeExemption
