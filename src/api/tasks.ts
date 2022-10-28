import { TaskInfo } from '~/model/ranking'
import { TaskResponse, testCase, testCaseId } from '~/model/tasks'
import { httpGet } from '~/utils/axiosClient'

export const allTasks = async (contestId: string): Promise<TaskResponse[]> => {
  const resp = await httpGet<TaskResponse[]>(`/contests/${contestId}/tasks`)
  return resp.data
}

export const oneTask = async (taskId: string): Promise<TaskResponse> => {
  const resp = await httpGet<TaskResponse>(`/tasks/${taskId}`)
  return resp.data
}

export const allTestCaseId = async (taskId: string): Promise<testCaseId[]> => {
  const resp = await httpGet<testCaseId[]>(`/tasks/${taskId}/testcases`)
  return resp.data
}

export const testCaseDetail = async (
  taskId: string,
  testCaseId: string
): Promise<testCase> => {
  const resp = await httpGet<testCase>(
    `/tasks/${taskId}/testcases/${testCaseId}`
  )
  return resp.data
}
