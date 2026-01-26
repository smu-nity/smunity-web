import '@/styles/board.css'
import '@/styles/animate.min.css'
import {Link, useLocation} from 'react-router-dom'

const TabComponent = () => {
  const location = useLocation()
  const tabs = [
    {path: '/qna/terms', label: '이용약관'},
    {path: '/qna/privacy', label: '개인정보처리방침'},
    {path: '/qna/questions', label: 'Q&A 게시판'}
  ]

  return (
    <div className="cs_tab">
      <div className="tab div3">
        <ul>
          {tabs.map((tab, index) => (
            <li
              key={index}
              className="visible motion fadeInLeft"
              data-animation="fadeInLeft">
              <Link to={tab.path} className={location.pathname === tab.path ? 'on' : ''}>
                {tab.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TabComponent
