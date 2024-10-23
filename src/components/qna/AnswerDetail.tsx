import {Answer} from '../../types/Answer'

interface AnswerDetailProps {
  answer: Answer
}

const AnswerDetail: React.FC<AnswerDetailProps> = ({answer}) => {
  return (
    <div className="my-3 card">
      <div className="card-body">
        <div className="post_detail__body-text card-text">
          <div dangerouslySetInnerHTML={{__html: answer.content}} />
        </div>
      </div>
      <div className="d-flex justify-content-end" style={{marginBottom: '0.5rem'}}>
        <div className="p-2 mx-3 badge bg-light text-dark text-start">
          {answer.createdAt !== answer.updatedAt
            ? `${answer.updatedAt} (수정)`
            : answer.createdAt}
        </div>
      </div>
    </div>
  )
}

export default AnswerDetail
