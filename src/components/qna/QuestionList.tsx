import QuestionItem from './QuestionItem'
import {Page} from '../../types/Page'
import {Question} from '../../types/Question'

interface QuestionListProps {
  page: Page<Question>
}

const QuestionList: React.FC<QuestionListProps> = ({page}) => {
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
        {page.empty ? (
          <QuestionItem />
        ) : (
          page.content.map(question => <QuestionItem question={question} />)
        )}
      </div>
    </div>
  )
}

export default QuestionList
