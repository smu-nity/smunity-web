import {createQuestion, fetchQuestion, updateQuestion} from '@/api/questionApi'
import {Question, QuestionRequest} from '@/types/Question'
import {useCallback} from 'react'

const padZero = (value: number) => value.toString().padStart(2, '0')
export interface TCustomQuestion {
  doFetchQuestion: (id: string) => Promise<Question>
  doCreateQuestion: (questionRequest: QuestionRequest) => Promise<boolean>
  doUpdateQuestion: (id: string, questionRequest: QuestionRequest) => Promise<boolean>
  formatDate: (createdAt: string) => string
  formatTime: (createdAt: string) => string
}

const useCustomQuestion = (): TCustomQuestion => {
  const doFetchQuestion = useCallback(async (id: string) => {
    const response = await fetchQuestion(id)
    const success = response.status < 400
    !success && alertError(response.data)
    return success ? response.data : null
  }, [])

  const doCreateQuestion = useCallback(async (request: QuestionRequest) => {
    const response = await createQuestion(request)
    const success = response.status < 400
    !success && alertError(response.data)
    return success
  }, [])

  const doUpdateQuestion = useCallback(async (id: string, request: QuestionRequest) => {
    const response = await updateQuestion(id, request)
    const success = response.status < 400
    !success && alertError(response.data)
    return success
  }, [])



  const formatDate = useCallback((createdAt: string) => {
    const date = new Date(createdAt)
    const year = date.getFullYear().toString().slice(-2)
    const month = padZero(date.getMonth() + 1)
    const day = padZero(date.getDate())
    return `${year}-${month}-${day}`
  }, [])

  const formatTime = useCallback(
    (createdAt: string) => {
      const date = new Date(createdAt)
      const hours = padZero(date.getHours())
      const minutes = padZero(date.getMinutes())
      return `${formatDate(createdAt)} ${hours}:${minutes}`
    },
    [formatDate]
  )

  const alertError = (data: {message: string; detail?: Record<string, string>}) =>
    alert(
      data.detail
        ? `${data.message}\n${Object.values(data.detail).join('\n')}`
        : data.message
    )

  return {doFetchQuestion, doCreateQuestion, doUpdateQuestion, formatDate, formatTime}
}

export default useCustomQuestion
