import Header from '@/components/Header'
import TermsBox from '@/components/account/TermsBox'
import AgreeForm from '@/components/account/AgreeForm'

const AgreePage = () => {
  return (
    <>
      <Header
        title="이용약관 동의"
        subtitle="아래 사항을 모두 읽고 약관에 동의해주세요."
      />
      <div className="login-container" style={{display: 'block'}}>
        <TermsBox />
        <AgreeForm />
      </div>
    </>
  )
}

export default AgreePage
