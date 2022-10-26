import { defineStore } from 'pinia'

interface UserInfo {
  username: string
  displayName: string
}

async function loginMock(username: string, password: string) {
  return {
    user: {
      id: 5,
      username: 'bob001',
      encryptedPassword: 'drowssap',
      displayName: 'Bob'
    },
    token: 'eyJhbGciOiJIUzI1NiIxxxxxxxxxxxxxxxxxxxx' // dummy
  }
}

const useAuthStore = defineStore({
  id: 'auth',
  state() {
    const { token } = JSON.parse(
      localStorage.getItem('auth') ?? '{}'
    ) as unknown as { token: string | null }
    if (token) {
      // validate?
    }
    return {
      user: null as UserInfo | null,
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
    async login(username: string, password: string) {
      // 動くけど適当
      const { user, token } = await loginMock(username, password)
      this.$patch({
        user: {
          username,
          displayName: user.displayName
        },
        token
      })
    }
  }
})

export default useAuthStore
