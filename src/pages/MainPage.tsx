import HeadComponent from '../components/main/HeadComponent'
import StatComponent from '../components/main/StatComponent'

const MainPage = () => {
  return (
    <div className="bg_wrapper">
      <div className="main-img">
        <img className="main-img-image" alt="스뮤니티 메인화면" />
        <HeadComponent />
        <StatComponent />
      </div>
    </div>
  )
}

export default MainPage
