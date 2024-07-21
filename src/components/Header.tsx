interface HeaderProps {
  title: string
  subtitle: string
}

const Header = (props: HeaderProps) => {
  return (
    <div className="navbar-img">
      <img className="navbar-img-image" src="/images/home.jpg" />
      <div className="navbar-img__text">
        <span className="navbar-img__text--title">{props.title}</span>
        <span className="navbar-img__text--subtitle">{props.subtitle}</span>
      </div>
    </div>
  )
}

export default Header
