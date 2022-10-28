import { SubmitPayload, SubmitResponse } from '~/model/submits'
import { httpGet, httpPost } from '~/utils/axiosClient'

export const submitTask = async (
  payload: SubmitPayload
): Promise<SubmitResponse> => {
  const resp = await httpPost<SubmitResponse>('/submits', payload)
  return resp.data
}

//今回はadmin用
export const listSubmits = async (): Promise<SubmitResponse[]> => {
  const resp = await httpGet<SubmitResponse[]>('/submits')
  return resp.data
}

export const oneSubmit = async (submitId: string): Promise<SubmitResponse> => {
  const resp = await httpGet<SubmitResponse>(`/submits/${submitId}`)
  return resp.data
}

export const listSubmitsMe = async (
  contestId: string
): Promise<SubmitResponse[]> => {
  const resp = await httpGet<SubmitResponse[]>(
    `/contests/${contestId}/submits/me`
  )
  return resp.data
}
