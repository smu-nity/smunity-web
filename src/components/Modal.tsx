import React from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  explanation: string
  icon?: string
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  explanation,
  icon,
  children
}) => {
  if (!isOpen) return null

  return (
    <div id="m3" className="modal">
      <div className="update_modal_content">
        <div id="c3" className="close" onClick={onClose}>
          &times;
        </div>
        <div className="modal-title">
          {icon && <i className={`fa-solid ${icon}`} />}
          {title}
        </div>
        <div className="modal-expl">{explanation}</div>
        <hr className="modal-hr" />
        {children}
      </div>
    </div>
  )
}

export default Modal
