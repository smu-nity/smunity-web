const InfoBox = () => {
  return (
    <div className="my_box my_box_width">
      <div className="my_box_title">
        <div>
          <i className="fas fa-user"></i>내 정보
        </div>
        <button id="b1" className="my_box_mod_btn">
          업데이트
        </button>
      </div>
      <hr />
      <table>
        <tr>
          <td className="my_box_table_1st_td">이름</td>
          <td>최현민</td>
        </tr>
        <tr>
          <td className="my_box_table_1st_td">학번</td>
          <td>201911019</td>
        </tr>
        <tr>
          <td className="my_box_table_1st_td">학과</td>
          <td>
            <a className="link_site" href="" target="_blank" rel="noopener noreferrer">
              컴퓨터과학전공
            </a>
          </td>
        </tr>
      </table>
      <hr style={{marginBottom: '0.8rem', marginTop: '1.6rem'}} />
      <div className="my_box_title">
        <div>
          <i className="fas fa-key"></i>비밀번호 변경
        </div>
        <button className="my_box_mod_btn">변경하기</button>
      </div>
      <hr style={{marginBottom: '0.8rem', marginTop: '0.8rem'}} />
      <div className="my_box_title">
        <div>
          <i className="fas fa-exclamation-triangle"></i>회원 탈퇴
        </div>
        <button className="my_box_mod_btn">탈퇴하기</button>
      </div>
    </div>
  )
}

export default InfoBox
