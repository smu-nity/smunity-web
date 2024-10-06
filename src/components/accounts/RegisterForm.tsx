const RegisterForm = () => {
  return (
    <>
      <div>
        <div className="box-margin3">
          <label>이름</label>
          <input
            className="form-control form-readonly"
            type="text"
            name="name"
            readOnly
          />
        </div>
        <div className="box-margin1">
          <label>학번</label>
          <input
            className="form-control form-readonly"
            type="text"
            name="username"
            readOnly
          />
        </div>
        <div className="box-margin1">
          <label>학과</label>
          <input
            className="form-control form-readonly"
            type="text"
            name="department"
            readOnly
          />
        </div>
        <div className="box-margin1">
          <label>이메일</label>
          <input
            className="form-control form-readonly"
            type="text"
            name="email"
            readOnly
          />
        </div>
        <div className="box-margin1">
          <label>비밀번호</label>
          <input className="form-control" id="pw1" type="password" name="password1" />
          <div className="regi_guide" style={{color: 'rgb(1, 42, 127)'}}>
            - 스뮤니티 사이트의 고유 비밀번호를 설정해주세요.
          </div>
        </div>
        <div className="box-margin1">
          <label>비밀번호 재확인</label>
          <input className="form-control" id="pw2" type="password" name="password2" />
        </div>
        <div style={{textAlign: 'center'}}>
          <input
            type="submit"
            className="btn btn-primary button-sm"
            style={{marginTop: '2.5rem', marginBottom: '3rem'}}
            value="가입하기"
          />
        </div>
      </div>
    </>
  )
}

export default RegisterForm
