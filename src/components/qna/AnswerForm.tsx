import {useEffect, useState} from 'react'
import useCustomAnswer, {TCustomAnswer} from '../../hooks/useCustomAnswer'
import useCustomMove, {TCustomMove} from '../../hooks/useCustomMove'
import {AnswerRequest} from '../../types/Answer'

interface AnswerFormProps {
  isEditMode: boolean
  id: string
  initialData?: AnswerRequest
}

const AnswerForm: React.FC<AnswerFormProps> = ({isEditMode, id, initialData}) => {
  const {moveToPath}: TCustomMove = useCustomMove()
  const {doCreateAnswer, doUpdateAnswer}: TCustomAnswer = useCustomAnswer()
  const [answerRequest, setAnswerRequest] = useState<AnswerRequest>({content: ''})

  useEffect(() => {
    if (isEditMode && initialData) {
      setAnswerRequest(initialData)
    }
  }, [initialData, isEditMode])

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = e.target
    setAnswerRequest(prevRequest => ({...prevRequest, [name]: value}))
  }

  const handleClick = () => {
    if (answerRequest.content) {
      const action = isEditMode
        ? doUpdateAnswer(id, answerRequest)
        : doCreateAnswer(id, answerRequest)
      action.then(success => {
        success && moveToPath(`/qna/questions/${id}`)
      })
    } else {
      alert('내용을 입력해주세요.')
    }
  }

  return (
    <form className="my-3">
      <div className="mb-3">
        <textarea
          value={answerRequest.content}
          onChange={handleChange}
          className="form-control"
          name="content"
          id="content"
          rows={10}
        />
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
          onClick={() => moveToPath(`/qna/questions/${id}`)}
          type="button"
          className="btn btn-post_list btn-primary btn-lg rounded-pill"
          style={{backgroundColor: '#343a40'}}>
          취소하기
        </button>
      </div>
    </form>
  )
}

export default AnswerForm
