import {useEffect, useState} from 'react'
import CourseItem from './CourseItem'
import {Course} from '../../types/Course'
import {fetchCourses} from '../../api/courseApi'
import {Result} from '../../types/Result'

const CourseBox = () => {
  const [courses, setCourses] = useState<Result<Course>>()

  useEffect(() => {
    fetchCourses().then((data: Result<Course>) => {
      setCourses(data)
    })
  }, [])

  return (
    <div className="my_box_grade my_box_width" style={{marginTop: '1rem'}}>
      <div className="table_grade">
        <div className="my_box_title">
          <div>
            <i className="fas fa-graduation-cap"></i>내 기이수과목
          </div>
          <div>
            <button id="b4" className="my_box_mod_btn">
              업데이트
            </button>
          </div>
        </div>
        <hr />
        <div className="scroll">
          <table id="long_table" className="grade_table">
            <thead>
              <tr>
                <th className="grade_table_th" style={{width: '10%'}}>
                  년도
                </th>
                <th className="grade_table_th" style={{width: '10%'}}>
                  학기
                </th>
                <th className="grade_table_th" style={{width: '14%'}}>
                  학수번호
                </th>
                <th className="grade_table_th" style={{width: '30%'}}>
                  과목명
                </th>
                <th className="grade_table_th" style={{width: '14%'}}>
                  이수구분
                </th>
                <th className="grade_table_th" style={{width: '14%'}}>
                  선택영역
                </th>
                <th className="grade_table_th" style={{width: '8%', borderRight: '0px'}}>
                  학점
                </th>
              </tr>
            </thead>
            <tbody>
              {courses?.content.map(course => (
                <CourseItem key={course.id} course={course} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default CourseBox
