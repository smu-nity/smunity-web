import {useState} from 'react'
import useCustomAccount, {TCustomAccount} from '../../hooks/useCustomAccount'
import useCustomMove, {TCustomMove} from '../../hooks/useCustomMove'
import useCustomMypage, {TCustomMypage} from '../../hooks/useCustomMypage'

const CourseUpdateForm = () => {
  const [password, setPassword] = useState('')
  const {moveToPath}: TCustomMove = useCustomMove()
  const {getUsername}: TCustomAccount = useCustomAccount()
  const {uploadCourse}: TCustomMypage = useCustomMypage()
  const username = getUsername()

  const handleClick = () => {
    const loginParams = {username, password}
    password
      ? uploadCourse(loginParams).then(success => {
          success && moveToPath('/mypage/result')
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
