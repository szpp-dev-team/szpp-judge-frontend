import type { Method } from 'axios'
import { reactive, toRefs } from 'vue'
import { httpGet, httpPost, type ResponseUnpromise } from '~/utils/axiosClient'

interface State<T> {
  isLoading: boolean
  hasError: boolean
  errorMessage: string
  data: T | null
}

/**
 * Do fetch using axios and also manages loading state.
 * original post: [https://javascript.plainenglish.io/create-a-basic-usefetch-hook-in-vue-b3ff113872d7 | hoge]
 *
 * @param method HTTP request method
 * @param url path
 * @param headers headers (default none)
 * @param body body (default none)
 */
export async function useFetch<T>(
  method: Method,
  url: string,
  body: Record<string, any> = {},
  headers: Record<string, string> = {}
) {
  const state = reactive<State<T>>({
    isLoading: true,
    hasError: false,
    errorMessage: '',
    data: null
  })

  const fetchData = async () => {
    state.isLoading = true

    let response: ResponseUnpromise<T>
    try {
      switch (method.toLowerCase()) {
        /* GET */
        case 'get':
          response = await httpGet<T>(url, headers)
          state.data = response.data as any
          break
        /* POST */
        case 'post':
          response = await httpPost<T>(url, body, headers)
          state.data = response.data as any
          break
        default:
          break
      }
    } catch (error: unknown) {
      state.hasError = true
      state.errorMessage = (error as Error).message
    } finally {
      state.isLoading = false
    }
  }

  await fetchData()

  return {
    ...toRefs(state)
  }
}
