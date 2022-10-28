export interface UserPayload {
  username: string
  password: string
  displayName?: string
}

export interface UserResponse {
  id: number
  username: string
  encryptedPassword: string
  displayName?: string
  createdAt: Date
  updatedAt?: Date
}
