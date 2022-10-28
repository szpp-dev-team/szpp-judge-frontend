import { defineStore } from 'pinia'
import { UserResponse } from '~/model/users'

type UserInfo = Pick<UserResponse, 'username' | 'displayName'>

async function loginMock(username: string, password: string) {
  // const { isLoading, hasError, errorMessage, data } = await useFetch<SigninResponse>('/auth/signin', {
  // })
  return {
    user: {
      id: 5,
      username: 'admin',
      encryptedPassword: 'drowssap',
      displayName: 'admin'
    },
    token: 'eyJhbGciOiJIUzI1NiIxxxxxxxxxxxxxxxxxxxx' // dummy
  }
}

const useAuthStore = defineStore({
  id: 'auth',
  state() {
    const { user, token } = JSON.parse(
      localStorage.getItem('auth') ?? '{}'
    ) as unknown as {
      user: UserInfo | null
      token: string | null
    }
    if (token) {
      // validate?
    }
    return {
      user: user as UserInfo | null,
      token: token as string | null
    }
  },
  actions: {
    logout() {
      this.$patch({
        user: null,
        token: null
      })
      localStorage.removeItem('auth')
    },
    async saveAuth(user: UserInfo, token: string) {
      console.log(token)
      this.$patch({
        user: {
          username: user.username,
          displayName: user.displayName
        },
        token
      })
      localStorage.setItem(
        'auth',
        JSON.stringify({
          user: {
            username: user.username,
            displayName: user.displayName
          },
          token
        })
      )
    }
  }
})

export default useAuthStore
