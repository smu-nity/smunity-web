import {useParams} from 'react-router-dom'
import Header from '../../components/Header'
import {useEffect, useState} from 'react'
import {Question} from '../../types/Question'
import QuestionForm from '../../components/qna/QuestionForm'
import useCustomMove, {TCustomMove} from '../../hooks/useCustomMove'
import useCustomQuestion, {TCustomQuestion} from '../../hooks/useCustomQuestion'

const convertToRequest = (question: Question) => {
  return {
    title: question.title,
    content: question.content,
    anonymous: question.author === '익명'
  }
}

const QuestionModifyPage = () => {
  const {id} = useParams<{id: string}>()
  const [question, setQuestion] = useState<Question>()
  const {doFetchQuestion}: TCustomQuestion = useCustomQuestion()
  const {moveToPath}: TCustomMove = useCustomMove()

  useEffect(() => {
    id &&
      doFetchQuestion(id).then((data: Question) => {
        setQuestion(data)
      })
  }, [id])

  if (question && !question.isAuthor) {
    moveToPath('/qna/questions')
    return null
  }

  return (
    <>
      <Header
        title="질문 수정"
        subtitle="상명대 졸업요건 검사 사이트"
        content="Q&A 게시판입니다."
      />
      <div className="container" style={{marginTop: '3rem'}}>
        {id && question && (
          <QuestionForm
            isEditMode={true}
            id={id}
            initialData={convertToRequest(question)}
          />
        )}
      </div>
    </>
  )
}

export default QuestionModifyPage
