import {useState} from 'react'
import useCustomAccount, {TCustomAccount} from '../../hooks/useCustomAccount'
import useCustomMove, {TCustomMove} from '../../hooks/useCustomMove'
import Modal from '../Modal'
import PasswordAuthForm from './PasswordAuthForm'
import {LoginCredentials} from '../../types/LoginCredentials'

const LoginForm = () => {
  const [loginParams, setLoginParams] = useState<LoginCredentials>({
    username: '',
    password: ''
  })
  const [isOpenModal, setIsOpenModal] = useState(false)
  const {doLogin}: TCustomAccount = useCustomAccount()
  const {moveToPath}: TCustomMove = useCustomMove()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setLoginParams(prevParams => ({...prevParams, [name]: value}))
  }

  const handleClickLogin = () => {
    loginParams.username && loginParams.password
      ? doLogin(loginParams).then(success => {
          success && moveToPath('/mypage')
        })
      : alert('학번과 비밀번호를 입력해주세요.')
  }

  return (
    <>
      <div className="login-form">
        <div className="login_logo">
          <img id="login_logo" src="/images/logo.png" />
        </div>
        <div className="content">
          <div className="input-group flex-nowrap">
            <input
              type="text"
              className="form-control"
              name="username"
              placeholder="학번"
              value={loginParams.username}
              onChange={handleChange}
            />
          </div>
          <div className="input-group flex-nowrap" style={{marginTop: '1rem'}}>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="비밀번호"
              value={loginParams.password}
              onChange={handleChange}
            />
          </div>
          <a className="link" onClick={() => setIsOpenModal(true)}>
            비밀번호를 잊어버리셨나요?
          </a>
        </div>
        <div className="action">
          <button className="button-text" type="submit" onClick={handleClickLogin}>
            로그인
          </button>
          <button
            className="button-text"
            type="button"
            onClick={() => moveToPath('/accounts/agree')}>
            회원가입
          </button>
        </div>
      </div>
      <Modal
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        title={'비밀번호 찾기'}
        explanation={'샘물 통합로그인을 통해 재학생 인증을 진행합니다.'}
        link
        children={<PasswordAuthForm />}
      />
    </>
  )
}

export default LoginForm
