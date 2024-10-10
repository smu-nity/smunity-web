import useCustomMove, {TCustomMove} from '../../hooks/useCustomMove'
import {Question} from '../../types/Question'

interface QuestionItemProps {
  question?: Question
}

const formatDate = (createdAt: string): string => {
  const date = new Date(createdAt)
  const year = date.getFullYear().toString().slice(-2)
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')
  return `${year}.${month}.${day}`
}

const QuestionItem: React.FC<QuestionItemProps> = ({question}) => {
  const {moveToPath}: TCustomMove = useCustomMove()

  const handleClick = (id?: number) => {
    id && moveToPath(`/qna/questions/${id}`)
  }

  return (
    <li style={{padding: '20px 0'}}>
      <div className="bl_wrap">
        <div className="bl_category ccategory cs wv_category">
          <span className="sound_only">상태</span>
          {question &&
            (question.answered ? (
              <p className="table-body__complete">답변완료</p>
            ) : (
              <p className="table-body__proceeding">접수</p>
            ))}
        </div>
        <div className="bl_subject">
          <a className="cb relpy_w" onClick={() => handleClick(question?.id)}>
            <span className="sound_only">제목</span>
            {question ? question.title : '질문이 없습니다.'}
          </a>
        </div>
        <div className="bl_date light">
          <span className="sound_only">작성일</span>
          {question && formatDate(question.updatedAt)}
        </div>
        <div className="bl_agree cs">
          <span className="sound_only">작성자</span>
          {question && question.author}
        </div>
      </div>
    </li>
  )
}

export default QuestionItem
