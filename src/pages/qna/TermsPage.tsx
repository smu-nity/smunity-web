import TermsComponent from '../../components/account/TermsComponent'
import Header from '../../components/Header'
import TabComponent from '../../components/qna/TabComponent'

const TermsPage = () => {
  return (
    <>
      <Header
        title="이용약관"
        subtitle="상명대 졸업요건 검사 사이트 이용약관은"
        content="다음과 같은 내용을 담고 있습니다."
      />
      <section className="cs_wrap">
        <TabComponent />
        <div className="login-container term-container">
          <div className="container">
            <div className="info_box_wrapper">
              <TermsComponent />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TermsPage
