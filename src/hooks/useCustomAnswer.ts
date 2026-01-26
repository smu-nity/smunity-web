import {fetchAnswer, createAnswer, updateAnswer} from '@/api/answerApi'
import {Answer, AnswerRequest} from '@/types/Answer'
import {useCallback} from 'react'
export interface TCustomAnswer {
  doFetchAnswer: (id: string) => Promise<Answer>
  doCreateAnswer: (id: string, request: AnswerRequest) => Promise<boolean>
  doUpdateAnswer: (id: string, request: AnswerRequest) => Promise<boolean>
}

const useCustomAnswer = (): TCustomAnswer => {
  const doFetchAnswer = useCallback(async (id: string) => {
    const response = await fetchAnswer(id)
    const success = response.status < 400
    return success ? response.data : null
  }, [])

  const doCreateAnswer = useCallback(async (id: string, request: AnswerRequest) => {
    const response = await createAnswer(id, request)
    const success = response.status < 400
    !success && alertError(response.data)
    return success
  }, [])

  const doUpdateAnswer = useCallback(async (id: string, request: AnswerRequest) => {
    const response = await updateAnswer(id, request)
    const success = response.status < 400
    !success && alertError(response.data)
    return success
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
