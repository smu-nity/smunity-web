import React, {useState, useEffect} from 'react'
import {fetchCourses} from '../../api/courseApi'
import {Result} from '../../types/Result'
import {Category, Course} from '../../types/Course'
import CreditItem from './CreditItem'
import PieChart from './PieChart'

interface ResultBoxProps {
  category: Category
}

const ResultBox: React.FC<ResultBoxProps> = ({category}) => {
  const [courses, setCourses] = useState<Result<Course>>()
  const fetchData = async () => {
    const data = await fetchCourses(getQueryParams())
    setCourses(data)
  }

  useEffect(() => {
    fetchData()
  }, [category])

  const getQueryParams = () => (category !== 'ALL' ? {category} : undefined)

  const categoryDetails = {
    ALL: {text: '이수학점', icon: 'fa-user'},
    MAJOR_ADVANCED: {text: '전공심화', icon: 'fa-pen'},
    MAJOR_OPTIONAL: {text: '전공선택', icon: 'fa-pen-to-square'},
    CULTURE: {text: '교양', icon: 'fa-book'}
  }[category]

  return courses ? (
    <div className={`resultbox ${category === 'ALL' ? 'resultbox-mobile' : ''}`}>
      <div className="result_name">
        <i className={`fa-solid ${categoryDetails.icon}`}>{categoryDetails.text}</i>
        {(category === 'MAJOR_ADVANCED' || category === 'MAJOR_OPTIONAL') && (
          <div className="recommend">추천 과목 보기</div>
        )}
      </div>
      <div className="result_container">
        <CreditItem credit={courses.status.total} text="총 기준 학점" />
        <CreditItem credit={courses.status.completed} text="총 이수 학점" line={true} />
        <CreditItem credit={courses.status.required} text="필요 학점" red={true} />
        <PieChart percent={courses.status.completion} />
      </div>
    </div>
  ) : null
}

export default ResultBox
