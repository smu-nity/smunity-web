import {useEffect, useState} from 'react'
import QuestionItem from './QuestionItem'
import {Page} from '../../types/Page'
import {Question} from '../../types/Question'
import {fetchQuestions} from '../../api/questionApi'
import {useLocation} from 'react-router-dom'

const useQuery = (): Record<string, string> => {
  const searchParams = new URLSearchParams(useLocation().search)
  return Object.fromEntries(searchParams.entries())
}

const QuestionList = () => {
  const [page, setPage] = useState<Page<Question>>()
  const params = useQuery()

  useEffect(() => {
    fetchQuestions(params).then((data: Page<Question>) => {
      setPage(data)
    })
  }, [params])

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
        {page?.empty ? (
          <QuestionItem />
        ) : (
          page?.content.map(question => <QuestionItem question={question} />)
        )}
      </div>
    </div>
  )
}

export default QuestionList
