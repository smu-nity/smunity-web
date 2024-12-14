import {useEffect, useState} from 'react'
import {fetchEditableDepartments} from '../../api/departmentApi'
import {Base} from '../../types/Result'
import {DepartmentEditable} from '../../types/DepartmentEditable'
import useCustomMypage, {TCustomMypage} from '../../hooks/useCustomMypage'
import useCustomMove, {TCustomMove} from '../../hooks/useCustomMove'

interface ChangeDepartmentProps {
  department: string
}

const ChangeDepartment: React.FC<ChangeDepartmentProps> = ({department}) => {
  const {departmentChange}: TCustomMypage = useCustomMypage()
  const {reload}: TCustomMove = useCustomMove()
  const [departments, setDepartments] = useState<Base<DepartmentEditable>>()
  const [selectedDepartmentId, setSelectedDepartmentId] = useState<number | undefined>()

  useEffect(() => {
    fetchEditableDepartments().then((data: Base<DepartmentEditable>) => {
      setDepartments(data)
      const initialDepartment = data.content.find(dept => dept.name === department)
      if (initialDepartment) {
        setSelectedDepartmentId(initialDepartment.id)
      }
    })
  }, [department])

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const departmentId: number = parseInt(event.target.value, 10)
    departmentChange({departmentId: departmentId}).then(success => {
      if (success) {
        alert('학과가 업데이트 되었습니다.')
        reload()
      }
    })
  }

  return (
    <td className="regi_box" style={{width: '90%', marginLeft: '0', marginRight: '1rem'}}>
      <select id="major" value={selectedDepartmentId} onChange={handleSelectChange}>
        {departments?.content?.map(department => (
          <option key={department.id} value={department.id}>
            {department.name}
          </option>
        ))}
      </select>
    </td>
  )
}

export default ChangeDepartment
