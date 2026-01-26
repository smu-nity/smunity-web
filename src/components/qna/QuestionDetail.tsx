import useCustomQuestion, {TCustomQuestion} from '@/hooks/useCustomQuestion'
import {Question} from '@/types/Question'
import MarkdownViewer from '@/components/qna/MarkdownViewer'

interface QuestionDetailProps {
  question: Question
}

const QuestionDetail: React.FC<QuestionDetailProps> = ({question}) => {
  const {formatTime}: TCustomQuestion = useCustomQuestion()

  return (
    <div className="card my-3">
      <div className="card-body">
        <div className="post_detail__body-text card-text">
          <MarkdownViewer content={question.content} />
        </div>
      </div>
      <div className="d-flex justify-content-end" style={{marginBottom: '0.5rem'}}>
        <div className="badge bg-light text-dark p-2 text-start">{question.author}</div>
        <div className="badge bg-light text-dark p-2 text-start mx-3">
          {question.createdAt !== question.updatedAt
            ? `${formatTime(question.updatedAt)} (수정)`
            : formatTime(question.createdAt)}
        </div>
      </div>
    </div>
  )
}

export default QuestionDetail
