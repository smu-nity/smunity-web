import {createQuestion, fetchQuestion, updateQuestion} from '../api/questionApi'
import {Question, QuestionRequest} from '../types/Question'

export interface TCustomQuestion {
  doFetchQuestion: (id: string) => Promise<Question>
  doCreateQuestion: (questionRequest: QuestionRequest) => Promise<boolean>
  doUpdateQuestion: (id: string, questionRequest: QuestionRequest) => Promise<boolean>
  formatDate: (createdAt: string) => string
  formatTime: (createdAt: string) => string
}

const useCustomQuestion = (): TCustomQuestion => {
  const doFetchQuestion = async (id: string) => {
    const response = await fetchQuestion(id)
    const success = response.status < 400
    !success && alertError(response.data)
    return success ? response.data : null
  }

  const doCreateQuestion = async (request: QuestionRequest) => {
    const response = await createQuestion(request)
    const success = response.status < 400
    !success && alertError(response.data)
    return success
  }

  const doUpdateQuestion = async (id: string, request: QuestionRequest) => {
    const response = await updateQuestion(id, request)
    const success = response.status < 400
    !success && alertError(response.data)
    return success
  }

  const formatDate = (createdAt: string) => {
    const date = new Date(createdAt)
    const year = date.getFullYear().toString().slice(-2)
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const day = date.getDate().toString().padStart(2, '0')
    return `${year}-${month}-${day}`
  }

  const formatTime = (createdAt: string) => {
    const date = new Date(createdAt)
    const hours = date.getHours().toString().padStart(2, '0')
    const minutes = date.getMinutes().toString().padStart(2, '0')
    return `${formatDate(createdAt)} ${hours}:${minutes}`
  }

  const alertError = (data: any) =>
    alert(
      data.detail
        ? `${data.message}\n${Object.values(data.detail).join('\n')}`
        : data.message
    )

  return {doFetchQuestion, doCreateQuestion, doUpdateQuestion, formatDate, formatTime}
}

export default useCustomQuestion
