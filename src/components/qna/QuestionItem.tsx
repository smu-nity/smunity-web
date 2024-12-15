import {Link} from 'react-router-dom'
import {Question} from '../../types/Question'
import useCustomQuestion, {TCustomQuestion} from '../../hooks/useCustomQuestion'

interface QuestionItemProps {
  question: Question
}

const QuestionItem: React.FC<QuestionItemProps> = ({question}) => {
  const {formatDate}: TCustomQuestion = useCustomQuestion()

  return (
    <li style={{padding: '20px 0'}}>
      <div className="bl_wrap">
        <div className="bl_category ccategory cs wv_category">
          <span className="sound_only">상태</span>
          {question.answered ? (
            <p className="table-body__complete">답변완료</p>
          ) : (
            <p className="table-body__proceeding">접수</p>
          )}
        </div>
        <div className="bl_subject">
          <Link to={question ? `/qna/questions/${question.id}` : '#'}>
            <span className="sound_only">제목</span>
            {question.title}
          </Link>
        </div>
        <div className="bl_date light">
          <span className="sound_only">작성일</span>
          {formatDate(question.updatedAt)}
        </div>
        <div className="bl_agree cs">
          <span className="sound_only">작성자</span>
          {question.author}
        </div>
      </div>
    </li>
  )
}

export default QuestionItem
