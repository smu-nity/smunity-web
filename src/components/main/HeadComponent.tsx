import {useNavigate} from 'react-router-dom'

const HeadComponent = () => {
  const navigate = useNavigate()

  return (
    <div className="main-img__text main-margin">
      <div className="bg_small_text fadein_text">상명대 졸업요건 검사 사이트</div>
      <div className="bg_big_text fadein_text">SMUNITY</div>
      <div className="bg_btn">
        <button className="bg_btn_style" onClick={() => navigate('/mypage')}>
          검사하기
        </button>
      </div>
    </div>
  )
}

export default HeadComponent
