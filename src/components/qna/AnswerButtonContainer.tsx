import {Link} from 'react-router-dom'
import {deleteAnswer} from '@/api/answerApi'

interface QuestionButtonContainerProps {
  isSuperuser: boolean
  questionId: number
}

const QuestionButtonContainer: React.FC<QuestionButtonContainerProps> = ({
  isSuperuser,
  questionId
}) => {
  const handleDelete = async () => {
    if (window.confirm('선택한 답변을 정말 삭제하시겠습니까?')) {
      await deleteAnswer(questionId)
      window.location.reload()
    }
  }

  return (
    <div className="post_detail__body-title border-bottom">
      <h4 className="py-2 my-3 post_detail__title-title h4-font">답변</h4>
      <div className="post_detail__body-title--button">
        {isSuperuser && (
          <>
            <Link
              to={`/qna/questions/${questionId}/answer/modify`}
              className="btn btn-sm btn-warning btn-margin">
              수정
            </Link>
            <button
              onClick={handleDelete}
              className="delete btn btn-sm btn-danger btn-margin">
              삭제
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default QuestionButtonContainer
