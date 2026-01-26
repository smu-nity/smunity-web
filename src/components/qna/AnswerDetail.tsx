import useCustomQuestion, {TCustomQuestion} from '@/hooks/useCustomQuestion'
import {Answer} from '@/types/Answer'
import MarkdownViewer from '@/components/qna/MarkdownViewer'

interface AnswerDetailProps {
  answer: Answer
}

const AnswerDetail: React.FC<AnswerDetailProps> = ({answer}) => {
  const {formatTime}: TCustomQuestion = useCustomQuestion()

  return (
    <div className="my-3 card">
      <div className="card-body">
        <div className="post_detail__body-text card-text">
          <MarkdownViewer content={answer.content} />
        </div>
      </div>
      <div className="d-flex justify-content-end" style={{marginBottom: '0.5rem'}}>
        <div className="p-2 mx-3 badge bg-light text-dark text-start">
          {answer.createdAt !== answer.updatedAt
            ? `${formatTime(answer.updatedAt)} (수정)`
            : formatTime(answer.createdAt)}
        </div>
      </div>
    </div>
  )
}

export default AnswerDetail
