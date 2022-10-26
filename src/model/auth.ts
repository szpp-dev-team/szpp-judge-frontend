export interface SigninPayload {
  username: string
  password: string
}

export interface SigninResponse {
  user: UserResponse
  token: string
}

export interface UserResponse {
  id: number
  username: string
  encryptedPassword: string
  displayName?: string
  createdAt: Date
  updatedAt?: Date
}
