import {useParams} from 'react-router-dom'
import Header from '../../components/Header'
import QuestionModifyForm from '../../components/qna/QuestionModifyForm'

const QuestionModifyPage = () => {
  const {id} = useParams<{id: string}>()

  return (
    <>
      <Header
        title="질문 수정"
        subtitle="상명대 졸업요건 검사 사이트"
        content="Q&A 게시판입니다."
      />
      <div className="container" style={{marginTop: '3rem'}}>
        {id && <QuestionModifyForm id={id} />}
      </div>
    </>
  )
}

export default QuestionModifyPage
