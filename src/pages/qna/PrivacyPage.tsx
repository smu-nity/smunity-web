import Header from '../../components/Header'
import PrivacyComponent from '../../components/qna/PrivacyComponent'
import TabComponent from '../../components/qna/TabComponent'

const PrivacyPage = () => {
  return (
    <>
      <Header
        title="개인정보처리방침"
        subtitle="스뮤니티 개인정보처리방침은"
        content="다음과 같은 내용을 담고 있습니다."
      />
      <section className="cs_wrap">
        <TabComponent />
        <div className="login-container term-container">
          <div className="container">
            <div className="info_box_wrapper">
              <PrivacyComponent />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PrivacyPage
