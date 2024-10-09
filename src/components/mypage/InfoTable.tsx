import {MemberInfo} from '../../types/MemberInfo'

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
        <td>
          <a className="link_site" href="" target="_blank" rel="noopener noreferrer">
            {member?.department}
          </a>
        </td>
      </tr>
    </table>
  )
}

export default InfoTable