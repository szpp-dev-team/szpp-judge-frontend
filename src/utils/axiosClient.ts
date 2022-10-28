import axios, { AxiosResponse } from 'axios'

const client = axios.create({
  baseURL: import.meta.env.VITE_API_BASE
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
