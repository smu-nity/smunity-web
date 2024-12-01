import React from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  explanation?: string
  icon?: string
  scroll?: boolean
  link?: boolean
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  explanation,
  icon,
  scroll,
  link,
  children
}) => {
  if (!isOpen) return null

  return (
    <div id="m3" className="modal">
      <div
        className={`update_modal_content ${scroll && 'modal-scroll'}`}
        style={{
          maxHeight: scroll ? '75%' : 'none'
        }}>
        <div id="c3" className="close" onClick={onClose}>
          &times;
        </div>
        <div className="modal-title">
          {icon && <i className={`fas fa-solid ${icon}`} />}
          {title}
        </div>
        <div className="modal-expl">
          {explanation}
          {link && (
            <>
              <br />
              <br />(
              <a
                href="https://portal.smu.ac.kr/"
                className="footer_link"
                style={{fontWeight: 'bold'}}
                target="_blank"
                rel="noreferrer">
                상명대학교 샘물포털시스템
              </a>{' '}
              학번/비밀번호)
            </>
          )}
        </div>
        <hr className="modal-hr" />
        {children}
      </div>
    </div>
  )
}

export default Modal
