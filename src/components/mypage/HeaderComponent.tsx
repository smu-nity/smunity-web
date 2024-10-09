import useCustomMove, {TCustomMove} from '../../hooks/useCustomMove'

const HeaderComponent = (props: {title: string}) => {
  const {moveToPath}: TCustomMove = useCustomMove()

  return (
    <div className="navbar-img">
      <img className="navbar-img-image" src="/images/home.jpg" />
      <div className="navbar-img__text">
        <span className="navbar-img__text--title">{props.title}</span>
        <span className="navbar-img__text--subtitle">
          <button onClick={() => moveToPath('/mypage/result')} className="go_result_btn">
            졸업요건 검사하기
          </button>
        </span>
      </div>
    </div>
  )
}

export default HeaderComponent
