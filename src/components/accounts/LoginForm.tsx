import {useNavigate} from 'react-router-dom'

const LoginForm = () => {
  const navigate = useNavigate()

  return (
    <div className="login-container">
      <div className="login-form">
        <div className="login_logo">
          <img id="login_logo" src="/images/logo.png" />
        </div>
        <form method="post">
          <div className="content">
            <div className="input-group flex-nowrap">
              <input
                type="text"
                className="form-control"
                name="username"
                id="id"
                placeholder="학번"
              />
            </div>
            <div className="input-group flex-nowrap" style={{marginTop: '1rem'}}>
              <input
                type="password"
                className="form-control"
                name="password"
                id="pw"
                placeholder="비밀번호"
              />
            </div>
            <a id="b2" className="link">
              비밀번호를 잊어버리셨나요?
            </a>
          </div>
          <div className="action">
            <button className="button-text" id="login_button" type="submit">
              로그인
            </button>
            <button
              className="button-text"
              id="register_button"
              type="button"
              onClick={() => navigate('/accounts/agree')}>
              회원가입
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
