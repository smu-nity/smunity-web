import useCustomResult, {TCustomResult} from '../../hooks/useCustomResult'
import {Category, Domain} from '../../types/Course'
import Modal from '../Modal'

interface ModalContainerProps {
  isOpen: boolean
  onClose: () => void
  type: Category | Domain
  children: React.ReactNode
}

const ModalContainer: React.FC<ModalContainerProps> = ({
  isOpen,
  onClose,
  type,
  children
}) => {
  const {getDetail, getContent}: TCustomResult = useCustomResult()

  const {title, explanation} = getContent(type)
  const {icon} = getDetail(type)

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      explanation={explanation}
      icon={icon}>
      {children}
    </Modal>
  )
}

export default ModalContainer
