import React, {useEffect, useState} from 'react'
import {Base} from '@/types/Result'
import {Culture} from '@/types/Culture'
import {fetchCultures} from '@/api/cultureApi'

interface CultureResultTableProps {
  subDomain: string
  subDomainName: string
}

const CultureResultTable: React.FC<CultureResultTableProps> = ({
  subDomain,
  subDomainName
}) => {
  const [cultures, setCultures] = useState<Base<Culture>>()

  useEffect(() => {
    fetchCultures({subDomain}).then((data: Base<Culture>) => {
      setCultures(data)
    })
  }, [subDomain])

  return (
    <>
      <br />
      <div className="modal-title">
        <i className="fas fa-check-circle"></i>
        {subDomainName} 추천과목
      </div>
      <div className="modal-scroll">
        <table className="mytable">
          <thead>
            <tr className="myth">
              <th className="w-12 border-r">학수번호</th>
              <th className="w-40 border-r">과목명</th>
              <th className="w-12 border-r">영역</th>
              <th className="w-8 border-r">학점</th>
            </tr>
          </thead>
          <tbody>
            {cultures?.content?.map((culture, index) => (
              <tr className="mytr" key={index}>
                <td className="mytd">{culture.number}</td>
                <td className="mytd">{culture.name}</td>
                <td className="mytd">{culture.type}</td>
                <td className="mytd">{culture.credit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default CultureResultTable
