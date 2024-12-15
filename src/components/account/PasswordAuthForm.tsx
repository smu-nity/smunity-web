import {useState} from 'react'
import {LoginCredentials} from '../../types/LoginCredentials'
import useCustomMove, {TCustomMove} from '../../hooks/useCustomMove'
import useCustomAgree, {TCustomAgree} from '../../hooks/useCustomAgree'

const PasswordAuthForm = () => {
  const {moveToPath}: TCustomMove = useCustomMove()
  const {doPasswordAuth}: TCustomAgree = useCustomAgree()

  const [loginParams, setLoginParams] = useState<LoginCredentials>({
    username: '',
    password: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setLoginParams(prevParams => ({...prevParams, [name]: value}))
  }

  const handleClick = () => {
    loginParams.username && loginParams.password
      ? doPasswordAuth(loginParams).then(success => {
          success && moveToPath('/accounts/password/reset')
        })
      : alert('학번과 비밀번호를 입력해주세요.')
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
            type="text"
            className="form-control"
            name="username"
            placeholder="학번"
            value={loginParams.username}
            onChange={handleChange}
          />
        </div>
        <div className="input-group flex-nowrap" style={{marginTop: '1rem'}}>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="샘물 비밀번호"
            value={loginParams.password}
            onChange={handleChange}
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

export default PasswordAuthForm
