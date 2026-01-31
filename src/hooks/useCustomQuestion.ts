import {createQuestion, fetchQuestion, updateQuestion} from '@/api/questionApi'
import {Question, QuestionRequest} from '@/types/Question'
import {useCallback} from 'react'
import {AxiosError} from 'axios'

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
    try {
      const response = await fetchQuestion(id)
      return response.data
    } catch (err) {
      const error = err as AxiosError<{message: string; detail?: Record<string, string>}>
      if (error.response?.data) {
        alertError(error.response.data)
      }
      return null
    }
  }, [])

  const doCreateQuestion = useCallback(async (request: QuestionRequest) => {
    try {
      await createQuestion(request)
      return true
    } catch (err) {
      const error = err as AxiosError<{message: string; detail?: Record<string, string>}>
      if (error.response?.data) {
        alertError(error.response.data)
      }
      return false
    }
  }, [])

  const doUpdateQuestion = useCallback(async (id: string, request: QuestionRequest) => {
    try {
      await updateQuestion(id, request)
      return true
    } catch (err) {
      const error = err as AxiosError<{message: string; detail?: Record<string, string>}>
      if (error.response?.data) {
        alertError(error.response.data)
      }
      return false
    }
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
