import {useEffect, useState} from 'react'
import QuestionTitle from '@/components/qna/QuestionTitle'
import QuestionButtonContainer from '@/components/qna/QuestionButtonContainer'
import QuestionDetail from '@/components/qna/QuestionDetail'
import {Question} from '@/types/Question'
import useCustomAccount, {TCustomAccount} from '@/hooks/useCustomAccount'
import {Answer} from '@/types/Answer'
import AnswerButtonContainer from '@/components/qna/AnswerButtonContainer'
import useCustomQuestion, {TCustomQuestion} from '@/hooks/useCustomQuestion'
import useCustomAnswer, {TCustomAnswer} from '@/hooks/useCustomAnswer'
import AnswerDetail from '@/components/qna/AnswerDetail'
import useCustomMove, {TCustomMove} from '@/hooks/useCustomMove'

interface QuestionDetailContainerProps {
  id: string
}

const QuestionDetailContainer: React.FC<QuestionDetailContainerProps> = ({id}) => {
  const [question, setQuestion] = useState<Question>()
  const [answer, setAnswer] = useState<Answer>()
  const {doFetchQuestion}: TCustomQuestion = useCustomQuestion()
  const {doFetchAnswer}: TCustomAnswer = useCustomAnswer()
  const {isAdmin}: TCustomAccount = useCustomAccount()

  const {moveToPath}: TCustomMove = useCustomMove()

  useEffect(() => {
    doFetchQuestion(id).then((data: Question | null) => {
      if (!data) {
        alert('해당 질문을 찾을 수 없습니다.')
        moveToPath('/qna/questions')
        return
      }
      setQuestion(data)
    })
    doFetchAnswer(id).then((data: Answer) => {
      setAnswer(data)
    })
  }, [id, doFetchAnswer, doFetchQuestion, moveToPath])

  return question ? (
    <>
      <QuestionTitle question={question} />
      <div
        className="container my-3 post_detail__body_container"
        style={{marginBottom: '3rem !important'}}>
        <QuestionButtonContainer isSuperuser={isAdmin()} question={question} />
        <QuestionDetail question={question} />
        {answer && (
          <>
            <AnswerButtonContainer
              isSuperuser={isAdmin()}
              questionId={answer.questionId}
            />
            <AnswerDetail answer={answer} />
          </>
        )}
      </div>
    </>
  ) : null
}

export default QuestionDetailContainer
