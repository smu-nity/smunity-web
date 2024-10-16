import {Link} from 'react-router-dom'
import {Question} from '../../types/Question'

interface QuestionButtonContainerProps {
  isSuperuser: boolean
  question: Question
}

const QuestionButtonContainer: React.FC<QuestionButtonContainerProps> = ({
  isSuperuser,
  question
}) => {
  return (
    <div className="post_detail__body-title border-bottom">
      <h4 className="post_detail__title-title my-3 py-2 h4-font">질문</h4>
      <div className="post_detail__body-title--button">
        {isSuperuser && !question.answered && (
          <Link
            to={`/qna/questions/${question.id}/answer`}
            className="btn btn-sm btn-primary">
            답변 등록
          </Link>
        )}

        {(isSuperuser || question.isAuthor) && (
          <>
            <Link
              to={`/qna/questions/${question.id}/modify`}
              className="btn btn-sm btn-warning">
              수정
            </Link>
            <button className="delete btn btn-sm btn-danger">삭제</button>
          </>
        )}
      </div>
    </div>
  )
}

export default QuestionButtonContainer
