import QuestionItem from './QuestionItem'

const QuestionList = () => {
  return (
    <div className="b_list category b_list2 board-text">
      <div className="bl_head cb" aria-hidden="true">
        <div className="bl_wrap">
          <div className="bl_category">상태</div>
          <div className="bl_subject">제목</div>
          <div className="bl_date">작성일</div>
          <div className="bl_agree">작성자</div>
        </div>
      </div>
      <div className="bl_body">
        <QuestionItem />
      </div>
    </div>
  )
}

export default QuestionList
