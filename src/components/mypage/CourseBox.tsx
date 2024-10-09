import React from 'react'
import CourseItem from './CourseItem'

const CourseBox = () => {
  const course = {
    year: '2019',
    semester: '1학기',
    number: 'HALR1034',
    name: 'English Foundations(Speaking and Listening)',
    type: '교필',
    domain: '기초(영어1)',
    category: 'CULTURE',
    subDomain: 'BASIC_ENG_MATH',
    credit: 2
  }

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
              <CourseItem course={course} />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default CourseBox
