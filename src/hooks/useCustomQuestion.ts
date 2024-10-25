import {createQuestion, fetchQuestion, updateQuestion} from '../api/questionApi'
import {Question, QuestionRequest} from '../types/Question'

export interface TCustomQuestion {
  doFetchQuestion: (id: string) => Promise<Question>
  doCreateQuestion: (questionRequest: QuestionRequest) => Promise<boolean>
  doUpdateQuestion: (id: string, questionRequest: QuestionRequest) => Promise<boolean>
}

const useCustomQuestion = (): TCustomQuestion => {
  const doFetchQuestion = async (id: string) => {
    const response = await fetchQuestion(id)
    const success = response.status < 400
    !success && alert(response.data.message)
    return success ? response.data : null
  }

  const doCreateQuestion = async (request: QuestionRequest) => {
    const response = await createQuestion(request)
    const success = response.status < 400
    !success && alert(response.data.message)
    return success
  }

  const doUpdateQuestion = async (id: string, request: QuestionRequest) => {
    const response = await updateQuestion(id, request)
    const success = response.status < 400
    !success && alert(response.data.message)
    return success
  }

  return {doFetchQuestion, doCreateQuestion, doUpdateQuestion}
}

export default useCustomQuestion
