import React, {useState, useEffect} from 'react'
import {fetchCourses} from '../../api/courseApi'
import {Result} from '../../types/Result'
import {Category, Course} from '../../types/Course'
import CreditItem from './CreditItem'
import PieChart from './PieChart'
import useCustomResult, {TCustomResult} from '../../hooks/useCustomResult'

interface ResultDetailItemProps {
  category: Category
  openModal: () => void
}

const ResultDetailItem: React.FC<ResultDetailItemProps> = ({category, openModal}) => {
  const [courses, setCourses] = useState<Result<Course>>()
  const {getDetail, saveResult}: TCustomResult = useCustomResult()

  useEffect(() => {
    const param = category !== 'ALL' ? {category} : undefined
    fetchCourses(param).then((data: Result<Course>) => {
      setCourses(data)
      saveResult(category, data)
    })
  }, [category])

  const categoryDetails = getDetail(category)

  return courses && courses.status.total !== 0 ? (
    <div className={`resultbox ${category === 'ALL' ? 'resultbox-mobile' : ''}`}>
      <div className="result_name">
        <i className={`fas fa-solid ${categoryDetails.icon}`} /> {categoryDetails.text}
        {(category === 'MAJOR_ADVANCED' ||
          category === 'MAJOR_OPTIONAL' ||
          category === 'FIRST_MAJOR' ||
          category === 'SECOND_MAJOR') && (
          <div className="recommend" onClick={() => openModal()}>
            추천 과목 보기
          </div>
        )}
      </div>
      <div className="result_container">
        <CreditItem credit={courses.status.total} text="총 기준 학점" />
        <CreditItem
          credit={courses.status.completed}
          text="총 이수 학점"
          line={true}
          animated
        />
        <CreditItem credit={courses.status.required} text="필요 학점" red={true} />
        <PieChart percent={courses.status.completion} />
      </div>
    </div>
  ) : null
}

export default ResultDetailItem
