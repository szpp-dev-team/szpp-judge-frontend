import { SigninPayload, SigninResponse } from '~/model/auth'
import useAuthStore from '~/stores/authStore'
import { useFetch } from '~/hooks/useFetch'

const auth = useAuthStore()

export async function login(username: string, password: string) {
  const body: SigninPayload = { username, password }
  const { hasError, errorMessage, data } = await useFetch<SigninResponse>(
    'post',
    '/auth/signin',
    body,
    {}
  )

  if (hasError) {
    console.debug(`error: ${errorMessage}`)
  } else if (data.value) {
    await auth.saveAuth(data.value.user, data.value.token)
  }
}
