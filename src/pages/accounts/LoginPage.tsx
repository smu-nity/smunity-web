import LoginForm from '../../components/accounts/LoginForm'
import Header from '../../components/Header'

const LoginPage = () => {
  return (
    <>
      <Header title="로그인" subtitle="학번과 스뮤니티 비밀번호를 입력해 주세요." />
      <LoginForm />
    </>
  )
}

export default LoginPage
