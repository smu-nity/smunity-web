import {createQuestion} from '../api/questionApi'
import {QuestionRequest} from '../types/Question'

export interface TCustomQuestion {
  doCreateQuestion: (questionRequest: QuestionRequest) => Promise<any>
}

const useCustomQuestion = (): TCustomQuestion => {
  const doCreateQuestion = async (request: QuestionRequest) => {
    const response = await createQuestion(request)
    const success = response.status < 400
    !success && alert(response.data.message)
    return success
  }

  return {doCreateQuestion}
}

export default useCustomQuestion
