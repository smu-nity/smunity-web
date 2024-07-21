import {Link} from 'react-router-dom'
import useCustomLogin, {TCusotmLogin} from '../hooks/useCustomLogin'
import useCustomMove, {TCustomMove} from '../hooks/useCustomMove'

const Navbar = () => {
  const {doLogout, loginState}: TCusotmLogin = useCustomLogin()
  const {moveToPath}: TCustomMove = useCustomMove()

  const handleClickLogout = () => {
    doLogout()
    moveToPath('/')
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="px-1 py-1 container-nav">
        <Link
          to="/"
          className="d-flex align-items-center mb-md-0 me-md-auto text-dark text-decoration-none">
          <img src="/images/logo.png" className="logo_img" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="ml-auto navbar-nav">
            <li className="nav-item">
              <Link className="nav-link fs-5 a_tag" to="/qna/terms">
                이용안내
              </Link>
            </li>

            {loginState.accessToken && loginState.refreshToken ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link fs-5 a_tag" to="/mypage">
                    마이페이지
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link fs-5 a_tag" onClick={handleClickLogout}>
                    로그아웃
                  </a>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link fs-5 a_tag" to="/accounts/login">
                    로그인
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fs-5 a_tag" to="/accounts/agree">
                    회원가입
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
