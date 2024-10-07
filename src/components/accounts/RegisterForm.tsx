import {useEffect, useState} from 'react'
import useCustomAgree, {TCustomAgree} from '../../hooks/useCustomAgree'
import useCustomMove, {TCustomMove} from '../../hooks/useCustomMove'
import useCustomAccount, {TCustomAccount} from '../../hooks/useCustomAccount'

interface RegisterCredentials {
  name: string
  username: string
  department: string
  email: string
  password1: string
  password2: string
}

const RegisterForm = () => {
  const {doRegister}: TCustomAccount = useCustomAccount()
  const {authState}: TCustomAgree = useCustomAgree()
  const {moveToPath}: TCustomMove = useCustomMove()
  const [registerParams, setRegisterParams] = useState<RegisterCredentials>({
    name: authState.name ?? '',
    username: authState.username ?? '',
    department: authState.department ?? '',
    email: authState.email ?? '',
    password1: '',
    password2: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name in registerParams) {
      registerParams[e.target.name as keyof RegisterCredentials] = e.target.value
    }
    setRegisterParams({...registerParams})
  }

  const handleClickRegister = () => {
    if (registerParams.password1 !== registerParams.password2) {
      return alert('비밀번호가 일치하지 않습니다.')
    }
    const {name, username, department, email, password1: password} = registerParams
    const param = {name, username, department, email, password}
    doRegister(param).then(success => {
      success && moveToPath('/mypage')
    })
  }

  useEffect(() => {
    if (authState?.name === undefined) {
      moveToPath('/accounts/agree')
    }
  }, [authState, moveToPath])

  return (
    <>
      <div>
        <div className="box-margin3">
          <label>이름</label>
          <input
            className="form-control form-readonly"
            type="text"
            name="name"
            value={authState.name}
            readOnly
          />
        </div>
        <div className="box-margin1">
          <label>학번</label>
          <input
            className="form-control form-readonly"
            type="text"
            name="username"
            value={authState.username}
            readOnly
          />
        </div>
        <div className="box-margin1">
          <label>학과</label>
          <input
            className="form-control form-readonly"
            type="text"
            name="department"
            value={authState.department}
            readOnly
          />
        </div>
        <div className="box-margin1">
          <label>이메일</label>
          <input
            className="form-control form-readonly"
            type="text"
            name="email"
            value={authState.email}
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
          <div className="regi_guide" style={{color: 'rgb(1, 42, 127)'}}>
            - 스뮤니티 사이트의 고유 비밀번호를 설정해주세요.
          </div>
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
            onClick={handleClickRegister}>
            가입하기
          </button>
        </div>
      </div>
    </>
  )
}

export default RegisterForm
