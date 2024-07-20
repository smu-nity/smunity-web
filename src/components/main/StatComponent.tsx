const StatComponent = () => {
  return (
    <div className="main-img__text card-margin">
      <div className="num_visit cards">
        <div>
          <i className="fas fa-calendar-day"></i>&nbsp;&nbsp;오늘 방문자 수 : 105
        </div>
        <div style={{marginTop: '0.4rem'}}>
          <i className="fas fa-mouse" style={{marginRight: '0.1rem'}}></i>&nbsp;&nbsp;총
          방문자 수 : 73,070
        </div>
        <div style={{marginTop: '0.4rem'}}>
          <i className="fas fa-user"></i>&nbsp;&nbsp;총 회원 수 : 3,659
        </div>
      </div>
    </div>
  )
}

export default StatComponent
