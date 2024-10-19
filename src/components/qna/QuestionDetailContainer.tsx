import {useEffect, useState} from 'react'
import QuestionTitle from './QuestionTitle'
import QuestionButtonContainer from './QuestionButtonContainer'
import QuestionDetail from './QuestionDetail'
import {Question} from '../../types/Question'
import {fetchQuestion} from '../../api/questionApi'
import useCustomAccount, {TCustomAccount} from '../../hooks/useCustomAccount'

interface QuestionDetailContainerProps {
  id: string
}

const QuestionDetailContainer: React.FC<QuestionDetailContainerProps> = ({id}) => {
  const [question, setQuestion] = useState<Question>()
  const {isAdmin}: TCustomAccount = useCustomAccount()

  useEffect(() => {
    fetchQuestion(id).then((data: Question) => {
      setQuestion(data)
    })
  }, [id])

  return question ? (
    <>
      <QuestionTitle question={question} />
      <div
        className="post_detail__body_container container my-3"
        style={{marginBottom: '3rem !important'}}>
        <QuestionButtonContainer isSuperuser={isAdmin()} question={question} />
        <QuestionDetail question={question} />
      </div>
    </>
  ) : null
}

export default QuestionDetailContainer
