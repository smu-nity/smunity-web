import {useEffect, useState} from 'react'
import CourseItem from './CourseItem'
import {Course} from '../../types/Course'
import {fetchCourses} from '../../api/courseApi'
import {Result} from '../../types/Result'
import Modal from '../Modal'
import CourseUpdateForm from './CourseUpdateForm'

const CourseBox = () => {
  const [courses, setCourses] = useState<Result<Course>>()
  const [isOpenModal, setIsOpenModal] = useState(false)

  useEffect(() => {
    fetchCourses().then((data: Result<Course>) => {
      setCourses(data)
    })
  }, [])

  return (
    <>
      <div className="my_box_grade my_box_width" style={{marginTop: '1rem'}}>
        <div className="table_grade">
          <div className="my_box_title">
            <div>
              <i className="fas fa-graduation-cap"></i>내 기이수과목
            </div>
            <div>
              <button
                id="b4"
                className="my_box_mod_btn"
                onClick={() => setIsOpenModal(true)}>
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
                  <th
                    className="grade_table_th"
                    style={{width: '8%', borderRight: '0px'}}>
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
      <Modal
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        title={'기이수과목 업데이트'}
        explanation={'샘물 통합로그인을 통해 재학생 인증을 진행합니다.'}
        link
        children={<CourseUpdateForm />}
      />
    </>
  )
}

export default CourseBox
