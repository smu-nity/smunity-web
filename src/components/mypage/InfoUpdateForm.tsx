import {useState} from 'react'
import useCustomAccount, {TCustomAccount} from '../../hooks/useCustomAccount'
import useCustomMypage, {TCustomMypage} from '../../hooks/useCustomMypage'
import useCustomMove, {TCustomMove} from '../../hooks/useCustomMove'
import LoadingSpinner from '../LoadingSpinner'

const InfoUpdateForm = () => {
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const {getUsername}: TCustomAccount = useCustomAccount()
  const {memberUpdate}: TCustomMypage = useCustomMypage()
  const {reload}: TCustomMove = useCustomMove()
  const username = getUsername()

  const handleClick = () => {
    const loginParams = {username, password}
    if (password) {
      setIsLoading(true)
      memberUpdate(loginParams).then(success => {
        setIsLoading(false)
        if (success) {
          alert('회원 정보가 업데이트 되었습니다.')
          reload()
        }
      })
    } else {
      alert('비밀번호를 입력해주세요.')
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      handleClick()
    }
  }

  return (
    <>
      <div className="form-login" onKeyDown={handleKeyDown}>
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
      {isLoading && <LoadingSpinner />}
    </>
  )
}

export default InfoUpdateForm
