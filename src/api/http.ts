import axios from 'axios'
import { TaskResponse } from '~/model/tasks'

// pathがわかったらbaseURLに追加する。
const axis = axios.create()

export const httpGetTasks = async (
  contest_id: number
): Promise<TaskResponse> => {
  const resp = await axis.get<TaskResponse>('/tasks/' + `${contest_id}`)
  return resp.data
}
