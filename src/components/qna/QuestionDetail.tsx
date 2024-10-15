import {Question} from '../../types/Question'

interface QuestionDetailProps {
  question: Question
}

const QuestionDetail: React.FC<QuestionDetailProps> = ({question}) => {
  return (
    <div className="card my-3">
      <div className="card-body">
        <div className="post_detail__body-text card-text">
          <div dangerouslySetInnerHTML={{__html: question.content}} />
        </div>
      </div>
      <div className="d-flex justify-content-end" style={{marginBottom: '0.5rem'}}>
        <div className="badge bg-light text-dark p-2 text-start">{question.author}</div>
        <div className="badge bg-light text-dark p-2 text-start mx-3">
          {question.createdAt !== question.updatedAt
            ? `${question.updatedAt} (수정)`
            : question.createdAt}
        </div>
      </div>
    </div>
  )
}

export default QuestionDetail
