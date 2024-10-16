import {useEffect, useState} from 'react'
import {Page} from '../../types/Page'
import {Question} from '../../types/Question'
import {fetchQuestions} from '../../api/questionApi'
import {Link, useLocation} from 'react-router-dom'
import QuestionList from './QuestionList'
import Pagination from './Pagination'

const useQuery = (): Record<string, string> => {
  const searchParams = new URLSearchParams(useLocation().search)
  return Object.fromEntries(searchParams.entries())
}

const QuestionContainer = () => {
  const [page, setPage] = useState<Page<Question>>()
  const params = useQuery()

  useEffect(() => {
    fetchQuestions(params).then((data: Page<Question>) => {
      setPage(data)
    })
  }, [JSON.stringify(params)])

  return (
    <div className="cs_area">
      <div className="cs_body ">
        <div className="wrap">
          <div className="ct_petitions">
            <div className="ct_petitions_area ct_txt_left">
              <div className="ct_list1">
                <div className="board text">
                  <div className="b_title">
                    <Link
                      to={'/qna/questions/create'}
                      className="btn btn-primary button-sm"
                      style={{float: 'right', marginBottom: '5px'}}>
                      질문 등록
                    </Link>
                  </div>
                  {page && <QuestionList page={page} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {page && <Pagination page={page} />}
    </div>
  )
}

export default QuestionContainer
