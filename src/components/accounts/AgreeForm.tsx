import {useEffect, useState} from 'react'
import useCustomAgree, {TCustomAgree} from '../../hooks/useCustomAgree'
import useCustomMove, {TCustomMove} from '../../hooks/useCustomMove'

interface AuthCredentials {
  username: string
  password: string
}

const AgreeForm = () => {
  const [authParams, setLoginParams] = useState<AuthCredentials>({
    username: '',
    password: ''
  })
  const {authState, agreeState, doAuth}: TCustomAgree = useCustomAgree()
  const {moveToPath}: TCustomMove = useCustomMove()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name in authParams) {
      authParams[e.target.name as keyof AuthCredentials] = e.target.value
    }
    setLoginParams({...authParams})
  }

  const handleClickAuth = () => {
    authParams.username && authParams.password
      ? doAuth(authParams).then(success => {
          success && moveToPath('/accounts/register')
        })
      : alert('학번과 샘물 비밀번호를 입력해주세요.')
  }

  useEffect(() => {
    if (authState?.name) {
      moveToPath('/accounts/register')
    }
  }, [authState, moveToPath])

  return (
    <>
      <div className="info_title">
        <b>학생 인증</b>
      </div>
      <div className="info_content" style={{textAlign: 'center', marginTop: '10px'}}>
        <p>
          샘물 통합로그인을 통해 재학생 인증을 진행합니다.
          <br />
          <a
            href="https://portal.smu.ac.kr/"
            className="text-black footer_link"
            style={{fontWeight: 'bold'}}
            target="_blank"
            rel="noopener noreferrer">
            상명대학교 샘물포털시스템
          </a>
          학번/비밀번호
        </p>
      </div>
      <div className="container" style={{width: 'auto'}}>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <div
            className="login-form login-margin"
            style={{
              marginTop: '10px',
              border: '0.001px solid rgb(216, 216, 216)',
              boxShadow: 'none'
            }}>
            <div className="agree">
              <div className="input-group flex-nowrap">
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  placeholder="학번"
                  value={authParams.username}
                  onChange={handleChange}
                />
              </div>
              <div className="input-group flex-nowrap" style={{marginTop: '1rem'}}>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="비밀번호"
                  value={authParams.password}
                  onChange={handleChange}
                />
              </div>
              <div id="login_btn">
                {agreeState ? (
                  <input
                    type="submit"
                    className="btn btn-primary button-sm"
                    value="인증하기"
                    style={{marginTop: '1rem'}}
                    onClick={handleClickAuth}
                  />
                ) : (
                  <div className="login_btn_default" style={{color: 'rgb(1, 42, 127)'}}>
                    이용약관에 동의해주세요.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AgreeForm
