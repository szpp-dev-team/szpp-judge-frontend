export interface SubmitPayload {
  taskId: number
  contestId: number
  languageId: string
  sourceCode: string
}

export interface SubmitResponse {
  id: number
  status: string
  score?: number
  executionTime?: number
  executionMemory?: number
  languageId: string

  userId: number
  taskId: number
  contestId: number

  sourceCode?: string
  createdAt: Date
  updatedAt?: Date
}
