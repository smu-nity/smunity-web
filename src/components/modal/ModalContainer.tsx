import useCustomResult, {TCustomResult} from '../../hooks/useCustomResult'
import {Category} from '../../types/Course'
import {Domain} from '../../types/Culture'
import Modal from '../Modal'

interface ModalContainerProps {
  isOpen: boolean
  onClose: () => void
  category: Category | Domain
  children: React.ReactNode
}

const ModalContainer: React.FC<ModalContainerProps> = ({
  isOpen,
  onClose,
  category,
  children
}) => {
  const {getDetail}: TCustomResult = useCustomResult()

  const categoryDetails = getDetail(category)

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={categoryDetails.text}
      explanation={categoryDetails.text}
      icon={categoryDetails.icon}>
      {children}
    </Modal>
  )
}

export default ModalContainer
