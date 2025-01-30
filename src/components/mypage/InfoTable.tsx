import {MemberInfo} from '../../types/MemberInfo'
import ChangeDepartment from './ChangeDepartment'
import ChangeExemption from './ChangeExemption'

interface InfoTableProps {
  member?: MemberInfo
}

const InfoTable: React.FC<InfoTableProps> = ({member}) => {
  return (
    <table>
      <tr>
        <td className="my_box_table_1st_td">이름</td>
        <td>{member?.name}</td>
      </tr>
      <tr>
        <td className="my_box_table_1st_td">학번</td>
        <td>{member?.username}</td>
      </tr>
      <tr>
        <td className="my_box_table_1st_td">학과</td>
        {member?.deptEditable ? (
          <ChangeDepartment department={member?.department} />
        ) : (
          <td>
            <a
              className="link_site"
              href={`https://www.smu.ac.kr/_custom/smu/_app/curriculum.do?srSust=${member?.deptCode}&srShyr=all`}
              target="_blank"
              rel="noopener noreferrer">
              {member?.department}
            </a>
          </td>
        )}
      </tr>
      <tr>
        <td className="my_box_table_1st_td">이수 면제</td>
        <ChangeExemption exemption={member?.exemption} />
      </tr>
    </table>
  )
}

export default InfoTable
