import {useEffect, useState} from 'react'
import QuestionItem from './QuestionItem'
import {Page} from '../../types/Page'
import {Question} from '../../types/Question'
import {fetchQuestions} from '../../api/questionApi'
import {useLocation} from 'react-router-dom'
import useCustomMove, {TCustomMove} from '../../hooks/useCustomMove'
import QuestionList from './QuestionList'
import Pagination from './Pagination'

const useQuery = (): Record<string, string> => {
  const searchParams = new URLSearchParams(useLocation().search)
  return Object.fromEntries(searchParams.entries())
}

const QuestionContainer = () => {
  const [page, setPage] = useState<Page<Question>>()
  const {moveToPath}: TCustomMove = useCustomMove()
  const params = useQuery()

  useEffect(() => {
    fetchQuestions(params).then((data: Page<Question>) => {
      setPage(data)
    })
  }, [])

  return (
    <div className="cs_area">
      <div className="cs_body ">
        <div className="wrap">
          <div className="ct_petitions">
            <div className="ct_petitions_area ct_txt_left">
              <div className="ct_list1">
                <div className="board text">
                  <div className="b_title">
                    <a
                      className="btn btn-primary button-sm"
                      style={{float: 'right', marginBottom: '5px'}}
                      onClick={() => moveToPath('/qna/questions/create')}>
                      질문 등록
                    </a>
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
