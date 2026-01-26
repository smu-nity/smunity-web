import {useEffect, useState} from 'react'
import {ExemptionType} from '@/types/Exemption'
import useCustomMove, {TCustomMove} from '@/hooks/useCustomMove'
import useCustomMypage, {TCustomMypage} from '@/hooks/useCustomMypage'

interface ChangeExemptionProps {
  exemption?: ExemptionType
}

const exemptions: {name: string; value?: string}[] = [
  {name: '해당없음', value: 'NONE'},
  {name: '외국인특별전형', value: 'FOREIGN'},
  {name: '장애학생', value: 'DISABLED'},
  {name: '편입생', value: 'TRANSFER'}
]

const ChangeExemption: React.FC<ChangeExemptionProps> = ({exemption}) => {
  const {exemptionChange}: TCustomMypage = useCustomMypage()
  const {reload}: TCustomMove = useCustomMove()
  const [selectedExemption, setSelectedExemption] = useState<ExemptionType | undefined>()

  useEffect(() => {
    exemption && setSelectedExemption(exemption)
  }, [exemption])

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value
    exemptionChange({
      exemption: value !== 'NONE' ? (value as ExemptionType) : null
    }).then(success => {
      if (success) {
        alert('업데이트 되었습니다.')
        reload()
      }
    })
  }

  return (
    <td className="regi_box" style={{width: '90%', marginLeft: '0', marginRight: '1rem'}}>
      <select value={selectedExemption} onChange={handleSelectChange}>
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
