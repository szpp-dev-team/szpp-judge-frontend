<template>
  <szpp-judge-default-layout>
    <h1 class="center">ランキング</h1>
    <div class="center">
      <el-table
        :data="rankingInfo?.rankInfoList"
        stripe
        :border="true"
        style="width: 38.6%"
        :header-cell-style="{ textAlign: 'center' }"
        :cell-style="{ padding: '3px', height: '50px' }"
      >
        <el-table-column label="順位" width="80">
          <template #default="scope1">
            <div class="center">
              {{ scope1.row.rank }}
            </div>
          </template>
        </el-table-column>
        <el-table-column label="ユーザ" width="200">
          <template #default="scope">
            <div class="center">
              {{ scope.row.username }}
            </div>
          </template>
        </el-table-column>
        <el-table-column label="得点" width="100">
          <template #default="scope">
            <div class="center">
              <p class="rankScore">
                {{ scope.row.score }}
              </p>
              <p class="penarty" v-if="scope.row.penartyCount > 0">
                ({{ scope.row.penartyCount }})
              </p>
            </div>
            <p class="duration" v-if="scope.row.score != 0">
              {{ timeParse(scope.row.duration) }}
            </p>
          </template>
        </el-table-column>
        <!-- <el-table-column
            v-for="(info, index) in Ranking?.rankInfoList"
            :key="index"
            :label="`${info.taskId}`"
            width="100"
          >
            <template #default>
              <div class="center">
                <p
                  class="penarty"
                  v-if="info.score == 0 && info.penartyCount != 0"
                >
                  ({{ info.penartyCount }})
                </p>
                <p v-else-if="info.score == 0 && info.penartyCount == 0">-</p>
                <p class="taskScore" v-else>
                  {{ info.score }}
                  <span class="penarty" v-if="info.penartyCount != 0">
                    ({{ info.penartyCount }})
                  </span>
                </p>
              </div>
              <p class="duration" v-if="info.score != 0">
                {{ timeParse(info.duration) }}
              </p>
            </template>
          </el-table-column> -->
      </el-table>
    </div>
  </szpp-judge-default-layout>
</template>
<script setup lang="ts">
import useAuthStore from '~/stores/authStore'
import { storeToRefs } from 'pinia'
import { ref } from '@vue/reactivity'
import { RankInfo, RankingResponse, TaskInfo } from '~/model/ranking'
import { onMounted } from '@vue/runtime-core'
import { fetchRank } from '~/api/ranking'
const auth = useAuthStore()
const { user } = storeToRefs(auth)

const { contestId } = defineProps<{
  contestId: string
}>()

const rankingInfo = ref<RankingResponse>()

onMounted(async () => {
  rankingInfo.value = await fetchRank(contestId)
})

//test 秒

const timeParse = (duration: number): string => {
  const min = Math.floor(duration / 60)
  const sec = duration % 60
  return String(min) + ':' + String(sec)
}

const taskInfo: TaskInfo = {
  taskId: 1,
  score: 0,
  duration: 1111,
  penartyCount: 100,
  submitIds: []
}
const taskInfo2: TaskInfo = {
  taskId: 2,
  score: 100,
  duration: 234,
  penartyCount: 100,
  submitIds: []
}
const taskInfo3: TaskInfo = {
  taskId: 3,
  score: 0,
  duration: 0,
  penartyCount: 0,
  submitIds: []
}
const taskInfo4: TaskInfo = {
  taskId: 3,
  score: 100,
  duration: 0,
  penartyCount: 100,
  submitIds: []
}

const rankInfo: RankInfo = {
  rank: 1,
  userId: 11,
  username: 'kajikaji',
  score: 100,
  duration: 111,
  penartyCount: 100,
  taskInfoList: [taskInfo, taskInfo2, taskInfo3, taskInfo4]
}

const rankInfo2: RankInfo = {
  rank: 2,
  userId: 11,
  username: 'tsumagari',
  score: 100,
  duration: 0,
  penartyCount: 100,
  taskInfoList: [taskInfo, taskInfo2, taskInfo3]
}

const Ranking: RankingResponse = {
  rankInfoList: [rankInfo, rankInfo2]
}

// const problems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

// const results = [
//   {
//     rank: '1',
//     name: 'hoge',
//     score: '23423',
//     pro: ['123', '121212']
//   },
//   { rank: '2', name: 'hoge', score: '1231', pro: ['100', '121212'] },
//   { rank: '3', name: 'hoge', score: '1231', pro: ['123', '121212'] },
//   { rank: '4', name: 'hoge', score: '1231', pro: ['123', '121212'] },
//   { rank: '5', name: 'hoge', score: '1231', pro: ['123', '121212'] },
//   { rank: '6', name: 'hoge', score: '1231', pro: ['123', '121212'] }
// ]
</script>

<style lang="scss" scoped>
.center {
  display: flex;
  justify-content: center;
}

.iconAc {
  justify-content: center;
  padding: 0.2em 0.6em 0.3em;
  box-sizing: border-box;
  border-radius: 0.15rem;
  vertical-align: baseline;
  white-space: nowrap;
  text-align: center;
  font-weight: bold;
  line-height: 1;
  -webkit-text-stroke: 0.01px white;
  background-color: #5cb85c;
  color: white;
}

.iconWa {
  justify-content: center;
  padding: 0.2em 0.6em 0.3em;
  box-sizing: border-box;
  border-radius: 0.15rem;
  vertical-align: baseline;
  white-space: nowrap;
  text-align: center;
  font-weight: bold;
  line-height: 1;
  -webkit-text-stroke: 0.01px white;
  background-color: #f0ad4e;
  color: white;
}

.rankScore {
  margin: 0;
  color: blue;
  font-weight: bold;
}

.taskScore {
  margin: 0;
  color: #5cb85c;
  font-weight: bold;
}
.penarty {
  margin: 0;
  color: red;
  font-weight: normal;
}
.duration {
  color: #888;
  display: flex;
  justify-content: center;
  margin: 0;
}
</style>
