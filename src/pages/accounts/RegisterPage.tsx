import RegisterForm from '../../components/accounts/RegisterForm'
import Header from '../../components/Header'

function RegisterPage() {
  return (
    <>
      <Header
        title="회원가입"
        subtitle="스뮤니티 사이트의 고유 비밀번호를 설정해주세요."
      />
      <div className="white_sec">
        <div className="container white-box">
          <RegisterForm />
        </div>
      </div>
    </>
  )
}
export default RegisterPage
