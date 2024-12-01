const TermsComponent = () => {
  return (
    <div className="info_box" style={{lineHeight: 1.5, width: 'auto'}}>
      <div className="info_content">
        <p>1. 사용하고 계신 아이디는 탈퇴할 경우 복구가 불가능합니다.</p>
        <p>2. 탈퇴 후 회원정보(이름, 학번, 학과 등)는 모두 삭제됩니다.</p>
        <p>3. 법령에 따라 보관이 필요한 정보는 일정 기간 보관 후 파기됩니다.</p>
        <p>4. 탈퇴 전 필요한 데이터는 미리 백업을 해주세요.</p>
      </div>
    </div>
  )
}

export default TermsComponent
