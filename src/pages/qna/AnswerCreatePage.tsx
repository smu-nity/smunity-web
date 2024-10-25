import {useParams} from 'react-router-dom'
import Header from '../../components/Header'
import AnswerFormContainer from '../../components/qna/AnswerFormContainer'

const AnswerCreatePage = () => {
  const {id} = useParams<{id: string}>()

  return (
    <>
      <Header
        title="답변 등록"
        subtitle="상명대 졸업요건 검사 사이트"
        content="Q&A 게시판입니다."
      />
      {id && <AnswerFormContainer id={id} isEditMode={false} />}
    </>
  )
}

export default AnswerCreatePage
