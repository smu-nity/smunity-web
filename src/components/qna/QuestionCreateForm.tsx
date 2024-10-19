import {useState} from 'react'
import useCustomMove, {TCustomMove} from '../../hooks/useCustomMove'
import {QuestionRequest} from '../../types/Question'
import useCustomQuestion, {TCustomQuestion} from '../../hooks/useCustomQuestion'

const QuestionCreateForm = () => {
  const {moveToPath}: TCustomMove = useCustomMove()
  const {doCreateQuestion}: TCustomQuestion = useCustomQuestion()
  const [questionRequest, setQuestionRequest] = useState<QuestionRequest>({
    title: '',
    content: '',
    anonymous: false
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value, type} = e.target
    const fieldValue =
      type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    setQuestionRequest(prevRequest => ({
      ...prevRequest,
      [name]: fieldValue
    }))
  }

  const handleClick = () => {
    questionRequest.title && questionRequest.content
      ? doCreateQuestion(questionRequest).then(success => {
          success && moveToPath('/qna/questions')
        })
      : alert('제목과 내용을 입력해주세요.')
  }

  return (
    <form className="my-3 post-form">
      <div className="mb-3 row">
        <label htmlFor="subject" className="col-sm-1 col-form-label">
          제목
        </label>
        <div className="col-sm-5">
          <input
            type="text"
            className="form-control form-control-lg form-font"
            name="title"
            value={questionRequest.title}
            onChange={handleChange}
          />
        </div>

        <div className="col-auto mt-2 form-check" style={{marginLeft: '1rem'}}>
          <label style={{cursor: 'pointer'}}>
            <input
              type="checkbox"
              name="anonymous"
              checked={questionRequest.anonymous}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="id_anonymous"></label> 익명으로
            작성하기
          </label>
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="content" className="col-sm-1 col-form-label">
          내용
        </label>
        <div className="col-sm-10">
          <textarea
            className="form-control form-control-lg form-font"
            name="content"
            value={questionRequest.content}
            onChange={handleChange}
            rows={10}></textarea>
        </div>
      </div>
      <div className="button">
        <button
          onClick={handleClick}
          type="button"
          className="btn btn-post_list btn-primary btn-lg rounded-pill"
          style={{backgroundColor: '#273295'}}>
          작성완료
        </button>
        <button
          className="btn btn-post_list btn-primary btn-lg rounded-pill"
          style={{backgroundColor: '#343a40'}}
          type="button"
          onClick={() => moveToPath('/qna/questions')}>
          취소하기
        </button>
      </div>
    </form>
  )
}

export default QuestionCreateForm
