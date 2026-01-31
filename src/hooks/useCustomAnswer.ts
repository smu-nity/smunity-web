import {fetchAnswer, createAnswer, updateAnswer} from '@/api/answerApi'
import {Answer, AnswerRequest} from '@/types/Answer'
import {useCallback} from 'react'
import {AxiosError} from 'axios'
export interface TCustomAnswer {
  doFetchAnswer: (id: string) => Promise<Answer>
  doCreateAnswer: (id: string, request: AnswerRequest) => Promise<boolean>
  doUpdateAnswer: (id: string, request: AnswerRequest) => Promise<boolean>
}

const useCustomAnswer = (): TCustomAnswer => {
  const doFetchAnswer = useCallback(async (id: string) => {
    try {
      const response = await fetchAnswer(id)
      return response.data
    } catch {
      return null
    }
  }, [])

  const doCreateAnswer = useCallback(async (id: string, request: AnswerRequest) => {
    try {
      await createAnswer(id, request)
      return true
    } catch (err) {
      const error = err as AxiosError<{message: string; detail?: Record<string, string>}>
      if (error.response?.data) {
        alertError(error.response.data)
      }
      return false
    }
  }, [])

  const doUpdateAnswer = useCallback(async (id: string, request: AnswerRequest) => {
    try {
      await updateAnswer(id, request)
      return true
    } catch (err) {
      const error = err as AxiosError<{message: string; detail?: Record<string, string>}>
      if (error.response?.data) {
        alertError(error.response.data)
      }
      return false
    }
  }, [])

  const alertError = (data: {message: string; detail?: Record<string, string>}) =>
    alert(
      data.detail
        ? `${data.message}\n${Object.values(data.detail).join('\n')}`
        : data.message
    )

  return {doFetchAnswer, doCreateAnswer, doUpdateAnswer}
}

export default useCustomAnswer
