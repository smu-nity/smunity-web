import React, {useEffect, useState} from 'react'
import QuestionDetail from '@/components/qna/QuestionDetail'
import {Question} from '@/types/Question'
import {Answer} from '@/types/Answer'
import useCustomQuestion, {TCustomQuestion} from '@/hooks/useCustomQuestion'
import useCustomAnswer, {TCustomAnswer} from '@/hooks/useCustomAnswer'
import AnswerForm from '@/components/qna/AnswerForm'

interface AnswerFormContainerProps {
  isEditMode: boolean
  id: string
}

const AnswerFormContainer: React.FC<AnswerFormContainerProps> = ({isEditMode, id}) => {
  const [question, setQuestion] = useState<Question>()
  const [answer, setAnswer] = useState<Answer>()
  const {doFetchQuestion}: TCustomQuestion = useCustomQuestion()
  const {doFetchAnswer}: TCustomAnswer = useCustomAnswer()

  useEffect(() => {
    doFetchQuestion(id).then((data: Question) => {
      setQuestion(data)
    })
    isEditMode &&
      doFetchAnswer(id).then((data: Answer) => {
        setAnswer(data)
      })
  }, [id, doFetchAnswer, doFetchQuestion, isEditMode])

  return (
    <div
      className="container my-3 post_detail__body_container"
      style={{marginBottom: '3rem !important'}}>
      <div className="post_detail__body-title border-bottom">
        <h4 className="py-2 my-3 post_detail__title-title h4-font">질문</h4>
      </div>
      {question && <QuestionDetail question={question} />}
      <div className="post_detail__body-title border-bottom">
        <h4 className="py-2 my-3 post_detail__title-title h4-font">답변</h4>
      </div>
      <AnswerForm
        isEditMode={isEditMode}
        id={id}
        initialData={answer ? {content: answer.content} : undefined}
      />
    </div>
  )
}

export default AnswerFormContainer
