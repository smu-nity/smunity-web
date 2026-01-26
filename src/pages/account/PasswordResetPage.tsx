import PasswordResetForm from '@/components/account/PasswordResetForm'
import Header from '@/components/Header'

const PasswordResetPage = () => {
  return (
    <>
      <Header title="비밀번호 변경" subtitle="비밀번호를 재설정해주세요." />
      <div className="white_sec">
        <div className="container white-box">
          <PasswordResetForm />
        </div>
      </div>
    </>
  )
}
export default PasswordResetPage
