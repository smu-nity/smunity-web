import {useEffect, useState} from 'react'
import {Base} from '../../types/Result'
import {Department} from '../../types/Department'
import {fetchDepartments} from '../../api/departmentApi'

const TargetTable = () => {
  const [departments, setDepartments] = useState<Base<Department>>()

  useEffect(() => {
    fetchDepartments().then((data: Base<Department>) => {
      setDepartments(data)
    })
  }, [])

  return (
    <div className="p_div">
      <div className="target_num_div">
        현재 총 <span className="target_color_span">{departments?.count}</span>개 학과
        검사 가능
      </div>

      <div className="modal-scroll">
        <table className="target_table" style={{width: '95%'}}>
          <thead>
            <tr>
              <th className="target_table_th" style={{borderLeft: '1px solid #dadada'}}>
                학과
              </th>
              <th className="target_table_th table_hidden">단과대학</th>
              <th className="target_table_th">교육과정</th>
              <th className="target_table_th table_hidden">회원 수</th>
            </tr>
          </thead>
          <tbody>
            {departments?.content.map((department, index) => (
              <tr key={index}>
                <td className="target_table_td" style={{borderLeft: '1px solid #dadada'}}>
                  {department.name}
                </td>
                <td className="target_table_td table_hidden">{department.college}</td>
                <td className="target_table_td">
                  <a
                    className="link_site"
                    href={`https://www.smu.ac.kr/_custom/smu/_app/curriculum.do?srSust=${department.code}&srShyr=all`}
                    target="_blank"
                    rel="noopener noreferrer">
                    <span className="desktop-only">{department.name}</span>
                    교육과정
                  </a>
                </td>
                <td className="target_table_td table_hidden">
                  {department.count.toLocaleString()}명
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TargetTable
