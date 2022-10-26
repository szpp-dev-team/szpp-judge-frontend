import axios from 'axios'
import { TaskResponse } from '~/model/model'

const axis = axios
  .create
  // {
  //     baseURL: ''
  // }
  ()

export const httpGetTasks = async (
  contest_id: number
): Promise<TaskResponse> => {
  const resp = await axis.get<TaskResponse>('/tasks/' + `${contest_id}`)
  return resp.data
}
