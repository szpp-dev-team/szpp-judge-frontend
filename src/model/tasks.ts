export interface TaskResponse {
  id: number
  name: string
  statement: string
  partScore?: string
  constraints: string
  input: string
  output: string
  score: number
  timeLimit: number
  memoryLimit: number
  taskType: string
  isDraft: boolean
  isPublic: boolean
  contestId?: number
  authorId: number
  createdAt: Date
  updatedAt?: Date
}

export interface TestCaseId {
  id: number
  name: string
  task_id: number
}

export interface TestCase {
  id: number
  name: string
  task_id: number
  input: string
  output: string
  created_at: string
  updated_at: string
}
