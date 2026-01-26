import Header from '@/components/Header'
import QuestionForm from '@/components/qna/QuestionForm'

const QuestionCreatePage = () => {
  return (
    <>
      <Header
        title="질문 등록"
        subtitle="상명대 졸업요건 검사 사이트"
        content="Q&A 게시판입니다."
      />
      <div className="container" style={{marginTop: '3rem'}}>
        <QuestionForm isEditMode={false} />
      </div>
    </>
  )
}

export default QuestionCreatePage
