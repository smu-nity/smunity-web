import {useState} from 'react'
import useCustomLogin, {TCusotmLogin} from '../../hooks/useCustomLogin'
import useCustomMove, {TCustomMove} from '../../hooks/useCustomMove'

interface LoginCredentials {
  username: string
  password: string
}

const LoginForm = () => {
  const [loginParams, setLoginParams] = useState<LoginCredentials>({
    username: '',
    password: ''
  })
  const {doLogin}: TCusotmLogin = useCustomLogin()
  const {moveToPath}: TCustomMove = useCustomMove()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name in loginParams) {
      loginParams[e.target.name as keyof LoginCredentials] = e.target.value
    }
    setLoginParams({...loginParams})
  }

  const handleClickLogin = () => {
    doLogin(loginParams).then(success => {
      if (success) {
        moveToPath('/mypage')
      } else {
        alert('이메일과 패스워드를 다시 확인하세요')
      }
    })
  }

  return (
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
        <a className="link">비밀번호를 잊어버리셨나요?</a>
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
  )
}

export default LoginForm
