export interface TaskResponse {
  id: number
  name: string
  statement: string
  part_score?: string
  constraints: string
  input: string
  output: string
  score: number
  time_limit: number
  memory_limit: number
  task_type: string
  is_draft: boolean
  is_public: boolean
  contest_id?: number[]
  author_id: number
  created_at: Date
  updated_at?: Date
}
