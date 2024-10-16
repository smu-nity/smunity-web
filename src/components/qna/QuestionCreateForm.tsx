import useCustomMove, {TCustomMove} from '../../hooks/useCustomMove'

const QuestionCreateForm = () => {
  const {moveToPath}: TCustomMove = useCustomMove()
  const handleCancel = () => {
    moveToPath('/qna/questions')
  }

  return (
    <form method="post" className="my-3 post-form">
      <div className="mb-3 row">
        <label htmlFor="subject" className="col-sm-1 col-form-label">
          제목
        </label>
        <div className="col-sm-5">
          <input
            type="text"
            className="form-control form-control-lg form-font"
            name="subject"
            id="subject"
            value=""
          />
        </div>

        <div className="col-auto mt-2 form-check" style={{marginLeft: '1rem'}}>
          <label style={{cursor: 'pointer'}}>
            <input type="checkbox" name="anonymous" id="id_anonymous" />
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
            id="content"
            rows={10}></textarea>
        </div>
      </div>
      <div className="button">
        <button
          type="submit"
          className="btn btn-post_list btn-primary btn-lg rounded-pill"
          style={{backgroundColor: '#273295'}}>
          작성완료
        </button>
        <button
          className="btn btn-post_list btn-primary btn-lg rounded-pill"
          style={{backgroundColor: '#343a40'}}
          type="button"
          onClick={handleCancel}>
          취소하기
        </button>
      </div>
    </form>
  )
}

export default QuestionCreateForm
