import './board.css'
import './animate.min.css'
import {useLocation} from 'react-router-dom'
import useCustomMove, {TCustomMove} from '../../hooks/useCustomMove'

const TabComponent = () => {
  const {moveToPath}: TCustomMove = useCustomMove()
  const location = useLocation()

  const handleClick = (path: string) => {
    moveToPath(path)
  }

  const isActive = (path: string) => {
    return location.pathname === path ? 'on' : ''
  }

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
              <a className={isActive(tab.path)} onClick={() => handleClick(tab.path)}>
                {tab.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TabComponent
