import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="copyright">
        <h4>
          <a
            href="https://github.com/smu-nity/smunity-server"
            className="footer_link margin-3"
            target="_blank"
            rel="noreferrer">
            GitHub
          </a>
          |
          <Link to="/qna/privacy" className="footer_link margin-3">
            개인정보처리방침
          </Link>
          |
          <Link to="/qna/terms" className="footer_link margin-3">
            이용약관
          </Link>
        </h4>
        <h4>
          © {import.meta.env.VITE_YEAR}
          <a
            href={`https://github.com/smu-nity`}
            className="footer_link margin-3"
            target="_blank"
            rel="noreferrer">
            SMUNITY
          </a>
          ·
          <a
            href={`https://github.com/smu-nity/smunity-web/releases/tag/${
              import.meta.env.VITE_VERSION
            }`}
            className="footer_link margin-3"
            target="_blank"
            rel="noreferrer">
            {import.meta.env.VITE_VERSION}
          </a>
          (
          <a
            href={`https://github.com/smu-nity/smunity-web/commit/${
              import.meta.env.VITE_COMMIT_HASH
            }`}
            className="footer_link"
            target="_blank"
            rel="noreferrer">
            {import.meta.env.VITE_COMMIT_HASH}
          </a>
          )
        </h4>
      </div>
    </footer>
  )
}

export default Footer
