const StatComponent = () => {
  const totalMembers = 4300
  const departments = [
    {name: '컴퓨터과학과', count: 1300, link: 'https://example.com/컴퓨터과학과'},
    {
      name: '휴먼지능정보공학전공',
      count: 850,
      link: 'https://example.com/휴먼지능정보공학전공'
    },
    {name: '기계공학과', count: 430, link: 'https://example.com/기계공학과'},
    {name: '경영학과', count: 520, link: 'https://example.com/경영학과'},
    {name: '디자인학과', count: 370, link: 'https://example.com/디자인학과'}
  ]

  return (
    <div className="main-img__text card-margin">
      <div className=" num_visit cards">
        <div className="total__item">
          <div className="total__item__title">
            <i className="fas fa-user" aria-hidden="true"></i>총 회원 수
          </div>
          <div className="total__item__title">{totalMembers.toLocaleString()}명</div>
        </div>
        <div className="department-stats">
          {departments.map((department, index) => (
            <a
              key={index}
              href={department.link}
              className="result__item"
              target="_blank"
              rel="noreferrer">
              <span className="result__item__title">{department.name}</span>
              <span className="result__item__count">
                {department.count.toLocaleString()}명
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StatComponent
