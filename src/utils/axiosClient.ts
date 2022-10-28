import axios, { AxiosResponse } from 'axios'
import useAuthStore from '~/stores/authStore'

const client = axios.create({
  baseURL: import.meta.env.VITE_API_BASE
})

client.interceptors.request.use((config) => {
  const auth = useAuthStore()
  console.log(
    'Interceptoring axios request: before modifying config.headers:',
    config.headers
  )
  console.log('auth.token:', auth.token, 'auth.user:', auth.user)
  if (auth.token) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer: ${auth.token}`
    }
  }
  return config
})

export async function httpGet<T>(
  url: string,
  headers: Record<string, string> = {}
): Promise<AxiosResponse<T>> {
  return client.get<T>(url, { headers })
}

export async function httpPost<T>(
  url: string,
  body: Record<string, any> = {},
  headers: Record<string, string> = {}
): Promise<AxiosResponse<T>> {
  return client.post<T>(url, body, { headers })
}

// https://github.com/piotrwitek/utility-types/blob/df2502ef504c4ba8bd9de81a45baef112b7921d0/src/mapped-types.ts
type PromiseType<T extends Promise<any>> = T extends Promise<infer U>
  ? U
  : never

export type ResponseUnpromise<T> =
  | PromiseType<ReturnType<typeof httpGet<T>>>
  | PromiseType<ReturnType<typeof httpPost<T>>>
