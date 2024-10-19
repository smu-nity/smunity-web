import {useParams} from 'react-router-dom'
import Header from '../../components/Header'
import QuestionDetailContainer from '../../components/qna/QuestionDetailContainer'

const QuestionDetailPage = () => {
  const {id} = useParams<{id: string}>()

  return (
    <>
      <Header
        title="Q&A 게시판"
        subtitle="상명대 졸업요건 검사 사이트"
        content="Q&A 게시판입니다."
      />
      {id && <QuestionDetailContainer id={id} />}
    </>
  )
}

export default QuestionDetailPage
