import {useEffect, useState} from 'react'
import {Category, Domain} from '@/types/Course'
import {fetchMajors} from '@/api/majorApi'
import {Base} from '@/types/Result'
import {Major} from '@/types/Major'

interface MajorTableProps {
  type: Category | Domain
}

const MajorTable: React.FC<MajorTableProps> = ({type}) => {
  const [majors, setMajors] = useState<Base<Major>>()

  useEffect(() => {
    const param = {category: type}
    fetchMajors(param).then((data: Base<Major>) => {
      setMajors(data)
    })
  }, [type])

  return (
    <table className="mytable">
      <thead>
        <tr className="myth">
          <th className="w-12 border-r">학년</th>
          <th className="w-12 border-r">학기</th>
          <th className="w-12 border-r">학수번호</th>
          <th className="w-40 border-r">과목명</th>
          <th className="w-16 border-r">이수구분</th>
          <th className="w-8 border-r">학점</th>
        </tr>
      </thead>
      <tbody>
        {majors?.content?.map((major, index) => (
          <tr className="mytr" key={index}>
            <td className="mytd">{major.grade}</td>
            <td className="mytd">{major.semester}</td>
            <td className="mytd">{major.number}</td>
            <td className="mytd">{major.name}</td>
            <td className="mytd">{major.type}</td>
            <td className="mytd">{major.credit}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default MajorTable
