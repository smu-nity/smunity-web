import {Question} from '../../types/Question'

interface QuestionButtonContainerProps {
  isSuperuser: boolean
  isSameUser: boolean
  question: Question
}

const QuestionButtonContainer: React.FC<QuestionButtonContainerProps> = ({
  isSuperuser,
  isSameUser,
  question
}) => {
  return (
    <div className="post_detail__body-title border-bottom">
      <h4 className="post_detail__title-title my-3 py-2 h4-font">질문</h4>
      <div className="post_detail__body-title--button">
        {isSuperuser && !question.answered && (
          <a
            href={`/qna/answer_create/${question.id}`}
            className="btn btn-sm btn-primary">
            답변 등록
          </a>
        )}

        {(isSuperuser || isSameUser) && (
          <>
            <a
              href={`/qna/question_modify/${question.id}`}
              className="btn btn-sm btn-warning">
              수정
            </a>
            <button className="delete btn btn-sm btn-danger">삭제</button>
          </>
        )}
      </div>
    </div>
  )
}

export default QuestionButtonContainer
