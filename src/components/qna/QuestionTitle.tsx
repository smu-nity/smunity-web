import {Question} from '../../types/Question'

interface QuestionTitleProps {
  question: Question
}

const QuestionTitle: React.FC<QuestionTitleProps> = ({question}) => {
  const statusText = question.answered ? '[답변완료]' : '[접수]'
  const statusClass = question.answered
    ? 'table-body__complete'
    : 'table-body__proceeding'

  return (
    <div className="post_detail__title_container container my-3">
      <div className="post_detail__title">
        <h4
          className={`py-2 post_detail__title-status h4-font ${statusClass}`}
          style={{marginBottom: 0}}>
          {statusText}
        </h4>
        <h3
          className="py-2 post_detail__title-title"
          style={{textAlign: 'center', marginTop: 16, marginBottom: 0}}>
          {question.title}
        </h3>
      </div>
    </div>
  )
}

export default QuestionTitle
