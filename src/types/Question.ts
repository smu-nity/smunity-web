export interface Question {
  id: number
  title: string
  content: string
  author: string
  isAuthor: boolean
  answered: boolean
  createdAt: string
  updatedAt: string
}

export interface QuestionRequest {
  title: string
  content: string
  anonymous: boolean
}
