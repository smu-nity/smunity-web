type SectionProps = {
  icon: string
  title: string
  buttonLabel: string
  onClick: () => void
  children?: React.ReactNode
}

const Section: React.FC<SectionProps> = ({
  icon,
  title,
  buttonLabel,
  onClick,
  children
}: SectionProps) => (
  <>
    <div className="my_box_title">
      <div>
        <i className={icon}></i>
        {title}
      </div>
      <button className="my_box_mod_btn" onClick={onClick}>
        {buttonLabel}
      </button>
    </div>
    {children && <hr />}
    {children}
  </>
)

export default Section
