import {useEffect, useState} from 'react'
import {fetchMembersCount} from '../../api/memberApi'
import {MemberCount} from '../../types/MemberCount'
import {Department} from '../../types/Department'
import {fetchDepartments} from '../../api/departmentApi'
import {Base} from '../../types/Result'

const StatComponent = () => {
  const [count, setCount] = useState<number>(0)
  const [departments, setDepartments] = useState<Department[]>([])

  useEffect(() => {
    fetchMembersCount().then((data: MemberCount) => {
      setCount(data.count)
    })
  }, [])

  useEffect(() => {
    fetchDepartments().then((data: Base<Department>) => {
      setDepartments(data.content)
    })
  }, [])

  return (
    <div className="main-img__text card-margin">
      <div className=" num_visit cards">
        <div className="total__item">
          <div className="total__item__title">
            <i className="fas fa-user" aria-hidden="true"></i>총 회원 수
          </div>
          <div className="total__item__title">{count.toLocaleString()}명</div>
        </div>
        <div className="department-stats">
          {departments.map((department, index) => (
            <a
              key={index}
              href={`https://www.smu.ac.kr/_custom/smu/_app/curriculum.do?srSust=${department.code}&srShyr=all`}
              className="result__item"
              target="_blank"
              rel="noreferrer">
              <span className="result__item__title">{department.name}</span>
              <span className="result__item__count">
                {department.count.toLocaleString()}명
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StatComponent
