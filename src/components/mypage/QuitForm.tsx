import {useState} from 'react'
import QuitComponent from './QuitComponent'
import useCustomMypage, {TCustomMypage} from '../../hooks/useCustomMypage'
import useCustomAccount, {TCustomAccount} from '../../hooks/useCustomAccount'

const QuitForm = () => {
  const {memberDelete}: TCustomMypage = useCustomMypage()
  const {doLogout}: TCustomAccount = useCustomAccount()
  const [agree, setAgree] = useState<boolean>(false)

  const handleClick = () => {
    agree
      ? window.confirm('스뮤니티 회원을 정말 탈퇴하시겠습니까?') &&
        memberDelete().then(success => {
          if (success) {
            alert('회원 탈퇴 되었습니다.')
            doLogout()
          }
        })
      : alert('탈퇴 안내를 확인하고 동의해 주세요.')
  }

  return (
    <div className="info_box_wrapper info_box_small">
      <div className="info_box_content">
        <QuitComponent />
      </div>
      <div className="info_agree" style={{textAlign: 'left'}}>
        <label style={{cursor: 'pointer'}}>
          <input
            type="checkbox"
            id="agree"
            onClick={() => setAgree(!agree)}
            checked={agree}
          />
          <label htmlFor="agree"></label>
          안내 사항을 모두 확인하였으며, 이에 동의합니다.
        </label>
      </div>
      <div id="login_btn" style={{marginTop: '0.5rem'}}>
        <input
          type="submit"
          className="btn btn-primary button-sm"
          value="확인"
          style={{marginTop: '1rem'}}
          onClick={handleClick}
        />
      </div>
    </div>
  )
}

export default QuitForm
