import { httpGet, httpPost } from '~/utils/axiosClient'
import { UserPayload, UserResponse } from '../model/users'

export const registerUser = async (
  payload: UserPayload
): Promise<UserResponse> => {
  const resp = await httpPost<UserResponse>('/users', payload)
  return resp.data
}

export const getUser = async (userId: string): Promise<UserResponse> => {
  const resp = await httpGet<UserResponse>(`/users/${userId}`)
  return resp.data
}
