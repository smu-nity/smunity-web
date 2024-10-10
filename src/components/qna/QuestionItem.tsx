import {Question} from '../../types/Question'

interface QuestionItemProps {
  question?: Question
}

const QuestionItem: React.FC<QuestionItemProps> = ({question}) => {
  return (
    <li style={{padding: '20px 0;'}}>
      <div className="bl_wrap">
        <div className="bl_category ccategory cs wv_category">
          <span className="sound_only">상태</span>
          {question &&
            (question.answered ? (
              <p className="table-body__complete" style={{margin: '0;'}}>
                답변완료
              </p>
            ) : (
              <p className="table-body__proceeding" style={{margin: '0;'}}>
                접수
              </p>
            ))}
        </div>
        <div className="bl_subject">
          <a className="cb relpy_w">
            <span className="sound_only">제목</span>
            {question ? question.title : '질문이 없습니다.'}
          </a>
        </div>
        <div className="bl_date light">
          <span className="sound_only">작성자</span>
          {question && question.author}
        </div>
        <div className="bl_agree cs">
          <span className="sound_only">작성일</span>
          {question && question.createdAt}
        </div>
      </div>
    </li>
  )
}

export default QuestionItem
