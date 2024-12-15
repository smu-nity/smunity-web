import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="copyright">
        <h4>
          <a
            href="https://github.com/smu-nity/smunity-server"
            className="footer_link"
            target="_blank"
            rel="noreferrer">
            GitHub
          </a>{' '}
          |{' '}
          <Link to="/qna/privacy" className="footer_link">
            개인정보처리방침
          </Link>{' '}
          |{' '}
          <Link to="/qna/terms" className="footer_link">
            이용약관
          </Link>
        </h4>
        <h4>
          Copyright ⓒ Smunity{' '}
          <a
            href={`https://github.com/smu-nity/smunity-web/releases/tag/${process.env.REACT_APP_VERSION}`}
            className="footer_link"
            target="_blank"
            rel="noreferrer">
            {process.env.REACT_APP_VERSION}
          </a>{' '}
          (
          <a
            href={`https://github.com/smu-nity/smunity-web/commit/${process.env.REACT_APP_COMMIT_HASH}`}
            className="footer_link"
            target="_blank"
            rel="noreferrer">
            {process.env.REACT_APP_COMMIT_HASH}
          </a>
          )
        </h4>
      </div>
    </footer>
  )
}

export default Footer
