import {useEffect, useState} from 'react'
import useCustomMove, {TCustomMove} from '../../hooks/useCustomMove'
import {Result} from '../../types/Result'
import {Course} from '../../types/Course'
import {fetchCourses} from '../../api/courseApi'
import Modal from '../Modal'
import CourseUpdateForm from './CourseUpdateForm'
import {MemberInfo} from '../../types/MemberInfo'
import {fetchMember} from '../../api/memberApi'

interface HeaderComponentProps {
  title: string
  member?: MemberInfo
  courses?: Result<Course>
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({title, member, courses}) => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const {moveToPath}: TCustomMove = useCustomMove()

  const handleClick = () => {
    member?.yearId === 1
      ? alert('2017학번부터 검사가 가능합니다.')
      : courses?.count !== 0
      ? moveToPath('/mypage/result')
      : setIsOpenModal(true)
  }

  return (
    <>
      <div className="navbar-img">
        <img
          className="navbar-img-image"
          src="/images/home.jpg"
          alt="네비게이션바 이미지"
        />
        <div className="navbar-img__text">
          <span className="navbar-img__text--title">{title}</span>
          <span className="navbar-img__text--subtitle">
            <button onClick={handleClick} className="go_result_btn">
              졸업요건 검사하기
            </button>
          </span>
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

export default HeaderComponent
