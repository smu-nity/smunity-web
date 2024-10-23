import {fetchAnswer} from '../api/answerApi'
import {Answer} from '../types/Answer'

export interface TCustomAnswer {
  doFetchAnswer: (id: string) => Promise<Answer>
}

const useCustomAnswer = (): TCustomAnswer => {
  const doFetchAnswer = async (id: string) => {
    const response = await fetchAnswer(id)
    const success = response.status < 400
    return success ? response.data : null
  }

  return {doFetchAnswer}
}

export default useCustomAnswer
