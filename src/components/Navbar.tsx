import {Link} from 'react-router-dom'

const Navbar = (): JSX.Element => {
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
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
