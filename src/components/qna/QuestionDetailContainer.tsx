import {useEffect, useState} from 'react'
import QuestionTitle from './QuestionTitle'
import QuestionButtonContainer from './QuestionButtonContainer'
import QuestionDetail from './QuestionDetail'
import {Question} from '../../types/Question'
import useCustomAccount, {TCustomAccount} from '../../hooks/useCustomAccount'
import {Answer} from '../../types/Answer'
import AnswerButtonContainer from './AnswerButtonContainer'
import useCustomQuestion, {TCustomQuestion} from '../../hooks/useCustomQuestion'
import useCustomAnswer, {TCustomAnswer} from '../../hooks/useCustomAnswer'
import AnswerDetail from './AnswerDetail'

interface QuestionDetailContainerProps {
  id: string
}

const QuestionDetailContainer: React.FC<QuestionDetailContainerProps> = ({id}) => {
  const [question, setQuestion] = useState<Question>()
  const [answer, setAnswer] = useState<Answer>()
  const {doFetchQuestion}: TCustomQuestion = useCustomQuestion()
  const {doFetchAnswer}: TCustomAnswer = useCustomAnswer()
  const {isAdmin}: TCustomAccount = useCustomAccount()

  useEffect(() => {
    doFetchQuestion(id).then((data: Question) => {
      setQuestion(data)
    })
    doFetchAnswer(id).then((data: Answer) => {
      setAnswer(data)
    })
  }, [id])

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
