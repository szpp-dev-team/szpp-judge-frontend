import { UserResponse } from './users'

export interface SigninPayload {
  username: string
  password: string
}

export interface SigninResponse {
  user: UserResponse
  token: string
}
