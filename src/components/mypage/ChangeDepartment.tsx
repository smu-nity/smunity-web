import {useEffect, useState} from 'react'
import {fetchDepartments} from '../../api/departmentApi'
import {Base} from '../../types/Result'
import {Department} from '../../types/Department'

const ChangeDepartment = () => {
  const [departments, setDepartments] = useState<Base<Department>>()

  useEffect(() => {
    fetchDepartments({isEditable: 'true'}).then((data: Base<Department>) => {
      setDepartments(data)
    })
  }, [])

  return (
    <td className="regi_box" style={{width: '90%', marginLeft: '0', marginRight: '1rem'}}>
      <select id="major">
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
