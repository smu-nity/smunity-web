import {useState} from 'react'
import TermsComponent from './TermsComponent'

const TermsBox = () => {
  const [isAgreed, setIsAgreed] = useState(false)

  const agreeFunc = () => {
    setIsAgreed(!isAgreed)
  }

  return (
    <div className="container" style={{width: 'auto'}}>
      <div className="info_title">
        <b>이용약관</b>
      </div>
      <div className="info_box_wrapper info_box_small">
        <div className="info_box_content">
          <TermsComponent />
        </div>
        <div className="info_agree">
          <label style={{cursor: 'pointer'}}>
            <input type="checkbox" onClick={agreeFunc} id="agree" />
            <label htmlFor="agree"></label>
            다음 이용약관에 동의합니다.
          </label>
        </div>
      </div>
    </div>
  )
}

export default TermsBox
