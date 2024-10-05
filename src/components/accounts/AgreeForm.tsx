import useCustomAgree, {TCusotmAgree} from '../../hooks/useCustomAgree'

const AgreeForm = () => {
  const {agreeState}: TCusotmAgree = useCustomAgree()

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
            <form>
              <div className="agree">
                <div className="input-group flex-nowrap">
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    id="id"
                    placeholder="학번"
                  />
                </div>
                <div className="input-group flex-nowrap" style={{marginTop: '1rem'}}>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    id="pw"
                    placeholder="샘물 비밀번호"
                  />
                </div>
                <div id="login_btn">
                  {agreeState ? (
                    <input
                      type="submit"
                      className="btn btn-primary button-sm"
                      value="인증하기"
                      style={{marginTop: '1rem'}}
                    />
                  ) : (
                    <div className="login_btn_default" style={{color: 'rgb(1, 42, 127)'}}>
                      이용약관에 동의해주세요.
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default AgreeForm
