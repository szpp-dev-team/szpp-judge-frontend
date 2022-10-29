export interface RankingResponse {
  rankInfoList: RankInfo[]
}

export interface RankInfo {
  rank: number
  userId: number
  username: string
  score: number
  duration: number
  penartyCount: number
  taskInfoList: TaskInfo[]
}

export interface TaskInfo {
  taskId: number
  score: number
  duration: number
  penartyCount: number
  submitIds: number[]
}
