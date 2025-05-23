import {useParams} from 'react-router-dom'
import Header from '../../components/Header'
import AnswerFormContainer from '../../components/qna/AnswerFormContainer'
import useCustomAccount, {TCustomAccount} from '../../hooks/useCustomAccount'
import useCustomMove, {TCustomMove} from '../../hooks/useCustomMove'
import {useEffect} from 'react'

const AnswerModifyPage = () => {
  const {isAdmin}: TCustomAccount = useCustomAccount()
  const {moveToPath}: TCustomMove = useCustomMove()
  const {id} = useParams<{id: string}>()

  useEffect(() => {
    if (!isAdmin()) {
      moveToPath('/qna/questions')
    }
  }, [isAdmin])

  if (!isAdmin()) {
    return null
  }

  return (
    <>
      <Header
        title="답변 수정"
        subtitle="상명대 졸업요건 검사 사이트"
        content="Q&A 게시판입니다."
      />
      {id && <AnswerFormContainer id={id} isEditMode={true} />}
    </>
  )
}

export default AnswerModifyPage
