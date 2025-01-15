import {fetchAnswer, createAnswer, updateAnswer} from '../api/answerApi'
import {Answer, AnswerRequest} from '../types/Answer'

export interface TCustomAnswer {
  doFetchAnswer: (id: string) => Promise<Answer>
  doCreateAnswer: (id: string, request: AnswerRequest) => Promise<boolean>
  doUpdateAnswer: (id: string, request: AnswerRequest) => Promise<boolean>
}

const useCustomAnswer = (): TCustomAnswer => {
  const doFetchAnswer = async (id: string) => {
    const response = await fetchAnswer(id)
    const success = response.status < 400
    return success ? response.data : null
  }

  const doCreateAnswer = async (id: string, request: AnswerRequest) => {
    const response = await createAnswer(id, request)
    const success = response.status < 400
    !success && alertError(response.data)
    return success
  }

  const doUpdateAnswer = async (id: string, request: AnswerRequest) => {
    const response = await updateAnswer(id, request)
    const success = response.status < 400
    !success && alertError(response.data)
    return success
  }

  const alertError = (data: any) =>
    alert(
      data.detail
        ? `${data.message}\n${Object.values(data.detail).join('\n')}`
        : data.message
    )

  return {doFetchAnswer, doCreateAnswer, doUpdateAnswer}
}

export default useCustomAnswer
