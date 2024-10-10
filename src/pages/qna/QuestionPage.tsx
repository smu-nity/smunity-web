import Header from '../../components/Header'
import QuestionList from '../../components/qna/QuestionList'
import TabComponent from '../../components/qna/TabComponent'
import useCustomMove, {TCustomMove} from '../../hooks/useCustomMove'

const QuestionPage = () => {
  const {moveToPath}: TCustomMove = useCustomMove()

  const handleClick = () => {
    moveToPath('/qna/questions/create')
  }

  return (
    <>
      <Header
        title="Q&A 게시판"
        subtitle="상명대 졸업요건 검사 사이트"
        content="Q&A 게시판입니다."
      />
      <section className="cs_wrap">
        <TabComponent />
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
                          onClick={handleClick}>
                          질문 등록
                        </a>
                      </div>
                      <QuestionList />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default QuestionPage
