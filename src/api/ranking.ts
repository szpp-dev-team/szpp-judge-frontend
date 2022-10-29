import { RankInfo, RankingResponse } from '~/model/ranking'
import { httpGet } from '~/utils/axiosClient'

export const fetchRank = async (
  contestId: string
): Promise<RankingResponse> => {
  const resp = await httpGet<RankingResponse>(`/contests/${contestId}/ranking`)
  return resp.data
}
