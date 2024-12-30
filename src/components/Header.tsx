interface HeaderProps {
  title: string
  subtitle: string
  content?: string
}

const Header = (props: HeaderProps) => {
  return (
    <div className="navbar-img">
      <img
        className="navbar-img-image"
        src="/images/home.jpg"
        alt="네비게이션바 이미지"
      />
      <div className="navbar-img__text">
        <span className="navbar-img__text--title">{props.title}</span>
        <span className="navbar-img__text--subtitle">{props.subtitle}</span>
        {props.content && (
          <span className="navbar-img__text--subtitle">{props.content}</span>
        )}
      </div>
    </div>
  )
}

export default Header
