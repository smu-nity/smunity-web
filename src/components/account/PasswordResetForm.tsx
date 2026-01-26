import {useEffect, useState} from 'react'
import useCustomAgree, {TCustomAgree} from '@/hooks/useCustomAgree'
import useCustomMove, {TCustomMove} from '@/hooks/useCustomMove'
import useCustomAccount, {TCustomAccount} from '@/hooks/useCustomAccount'
import LoadingSpinner from '@/components/LoadingSpinner'

interface ResetCredentials {
  username: string
  password1: string
  password2: string
}

const PasswordResetForm = () => {
  const {authPasswordState, isAuthPassword}: TCustomAgree = useCustomAgree()
  const {passwordReset}: TCustomAccount = useCustomAccount()
  const {moveToPath}: TCustomMove = useCustomMove()
  const [registerParams, setRegisterParams] = useState<ResetCredentials>({
    username: authPasswordState.username ?? '',
    password1: '',
    password2: ''
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setRegisterParams(prevParams => ({...prevParams, [name]: value}))
  }

  const requestParam = () => {
    const {password1: password} = registerParams
    return {password}
  }

  const handleClick = () => {
    if (registerParams.password1 && registerParams.password2) {
      if (registerParams.password1 === registerParams.password2) {
        setIsLoading(true)
        passwordReset(requestParam(), authPasswordState.authToken).then(success => {
          setIsLoading(false)
          if (success) {
            alert('비밀번호가 변경되었습니다.')
            moveToPath('/accounts/login')
          }
        })
      } else {
        alert('비밀번호가 일치하지 않습니다.')
      }
    } else {
      alert('비밀번호를 입력해주세요.')
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      handleClick()
    }
  }

  useEffect(() => {
    if (!isAuthPassword()) {
      moveToPath('/accounts/login')
    }
  }, [isAuthPassword, moveToPath])

  return (
    <div onKeyDown={handleKeyDown}>
      <div className="box-margin3">
        <label>학번</label>
        <input
          className="form-control form-readonly"
          type="text"
          name="name"
          value={authPasswordState.username}
          readOnly
        />
      </div>
      <div className="box-margin1">
        <label>비밀번호</label>
        <input
          className="form-control"
          type="password"
          name="password1"
          onChange={handleChange}
        />
      </div>
      <div className="box-margin1">
        <label>비밀번호 재확인</label>
        <input
          className="form-control"
          type="password"
          name="password2"
          onChange={handleChange}
        />
      </div>
      <div style={{textAlign: 'center'}}>
        <button
          className="btn btn-primary button-sm"
          style={{marginTop: '2.5rem', marginBottom: '3rem'}}
          onClick={handleClick}>
          변경하기
        </button>
      </div>
      {isLoading && <LoadingSpinner />}
    </div>
  )
}

export default PasswordResetForm
