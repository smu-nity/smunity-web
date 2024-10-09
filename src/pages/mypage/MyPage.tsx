import CourseBox from '../../components/mypage/CourseBox'
import HeaderComponent from '../../components/mypage/HeaderComponent'
import InfoBox from '../../components/mypage/InfoBox'

const MyPage = () => {
  return (
    <>
      <HeaderComponent title="마이페이지" />
      <div className="white_sec">
        <div className="my_box_wrap">
          <InfoBox />
          <CourseBox />
        </div>
      </div>
    </>
  )
}

export default MyPage
