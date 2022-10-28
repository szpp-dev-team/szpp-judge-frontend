import { ContestResponse } from '~/model/contests'
import { httpGet } from '~/utils/axiosClient'

export const getContestsInfo = async (
  contestId: number
): Promise<ContestResponse> => {
  const resp = await httpGet<ContestResponse>(' /contests/' + `${contestId}`)
  return resp.data
}
