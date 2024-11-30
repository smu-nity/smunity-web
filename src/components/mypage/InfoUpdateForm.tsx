import {useState} from 'react'
import useCustomAccount, {TCustomAccount} from '../../hooks/useCustomAccount'
import useCustomMypage, {TCustomMypage} from '../../hooks/useCustomMypage'
import useCustomMove, {TCustomMove} from '../../hooks/useCustomMove'

const CourseUpdateForm = () => {
  const [password, setPassword] = useState('')
  const {getUsername}: TCustomAccount = useCustomAccount()
  const {memberUpdate}: TCustomMypage = useCustomMypage()
  const {reload}: TCustomMove = useCustomMove()
  const username = getUsername()

  const handleClick = () => {
    const loginParams = {username, password}
    password
      ? memberUpdate(loginParams).then(success => {
          if (success) {
            alert('회원 정보가 업데이트 되었습니다.')
            reload()
          }
        })
      : alert('비밀번호를 입력해주세요.')
  }

  return (
    <>
      <div className="form-login">
        <div className="input-group flex-nowrap">
          <input
            className="form-control"
            type="text"
            value={username}
            style={{backgroundColor: 'rgb(248,249,250)'}}
            disabled
          />
        </div>
        <div className="input-group flex-nowrap" style={{marginTop: '1rem'}}>
          <input
            className="form-control"
            type="password"
            placeholder="샘물 비밀번호"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
      </div>
      <input
        type="submit"
        className="btn btn-primary button-sm"
        value="인증하기"
        onClick={handleClick}
      />
    </>
  )
}

export default CourseUpdateForm
