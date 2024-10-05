import Header from '../../components/Header'
import TermsBox from '../../components/accounts/TermsBox'
import AgreeForm from '../../components/accounts/AgreeForm'

const AgreePage = () => {
  return (
    <>
      <Header
        title="이용약관 동의"
        subtitle="아래 사항을 모두 읽고 약관에 동의해주세요."
      />
      <div className="login-container">
        <TermsBox />
        <AgreeForm />
      </div>
    </>
  )
}

export default AgreePage
