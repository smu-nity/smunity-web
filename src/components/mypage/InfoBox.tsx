import {useState} from 'react'
import {MemberInfo} from '../../types/MemberInfo'
import InfoTable from './InfoTable'
import Modal from '../Modal'
import Section from './Section'
import InfoUpdateForm from './InfoUpdateForm'
import ChangePasswordFrom from './ChangePasswordForm'
import QuitForm from './QuitForm'

interface InfoBoxProps {
  member?: MemberInfo
}

const modals: any[] = [
  {
    id: 'info',
    title: '내 정보 업데이트',
    explanation: '샘물 통합로그인을 통해 재학생 인증을 진행합니다.',
    link: true,
    children: <InfoUpdateForm />
  },
  {id: 'password', title: '비밀번호 변경', children: <ChangePasswordFrom />},
  {
    id: 'quit',
    title: '탈퇴 안내',
    explanation: '회원탈퇴를 신청하기 전에 안내 사항을 꼭 확인해주세요.',
    children: <QuitForm />
  }
]

const InfoBox: React.FC<InfoBoxProps> = ({member}) => {
  const [activeModal, setActiveModal] = useState<string | null>(null)
  const handleOpenModal = (id: string) => setActiveModal(id)
  const handleCloseModal = () => setActiveModal(null)

  return (
    <>
      <div className="my_box my_box_width">
        <Section
          icon="fas fa-user"
          title="내 정보"
          buttonLabel="업데이트"
          onClick={() => handleOpenModal('info')}>
          <InfoTable member={member} />
        </Section>
        <hr style={{margin: '1.6rem 0 0.8rem 0'}} />
        <Section
          icon="fas fa-key"
          title="비밀번호 변경"
          buttonLabel="변경하기"
          onClick={() => handleOpenModal('password')}
        />
        <hr style={{margin: '0.8rem 0 0.8rem 0'}} />
        <Section
          icon="fas fa-exclamation-triangle"
          title="회원 탈퇴"
          buttonLabel="탈퇴하기"
          onClick={() => handleOpenModal('quit')}
        />
      </div>

      {modals.map(modal => (
        <Modal
          key={modal.id}
          isOpen={activeModal === modal.id}
          onClose={handleCloseModal}
          title={modal.title}
          explanation={modal.explanation}
          link={modal.link}
          children={modal.children}
        />
      ))}
    </>
  )
}

export default InfoBox
