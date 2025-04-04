export interface Answer {
  id: number
  questionId: number
  content: string
  createdAt: string
  updatedAt: string
}

export interface AnswerRequest {
  content: string
}
