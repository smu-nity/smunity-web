import {useEffect, useState} from 'react'
import CourseBox from '../../components/mypage/CourseBox'
import HeaderComponent from '../../components/mypage/HeaderComponent'
import InfoBox from '../../components/mypage/InfoBox'
import {fetchMember} from '../../api/memberApi'
import {MemberInfo} from '../../types/MemberInfo'
import {fetchCourses} from '../../api/courseApi'
import {Result} from '../../types/Result'
import {Course} from '../../types/Course'

const MyPage = () => {
  const [member, setMember] = useState<MemberInfo>()
  const [courses, setCourses] = useState<Result<Course>>()

  useEffect(() => {
    const fetchData = async () => {
      const [memberData, courseData] = await Promise.all([fetchMember(), fetchCourses()])
      setMember(memberData)
      setCourses(courseData)
    }

    fetchData()
  }, [])

  return (
    <>
      <HeaderComponent title="마이페이지" member={member} courses={courses} />
      <div className="white_sec">
        <div className="my_box_wrap">
          <InfoBox member={member} />
          <CourseBox courses={courses} />
        </div>
      </div>
    </>
  )
}

export default MyPage
