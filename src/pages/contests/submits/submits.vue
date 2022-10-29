<template>
  <szpp-judge-default-layout>
    <h1 class="center">{{ user?.username }}の提出一覧</h1>
    <div class="center">
      <el-table
        :data="submits"
        stripe
        :border="true"
        style="width: 800px"
        :header-cell-style="{ textAlign: 'center' }"
      >
        <el-table-column label="提出日時" width="180">
          <template #default="scope">
            <div class="center">
              {{ scope.row.createdAt }}
            </div>
          </template>
        </el-table-column>
        <el-table-column label="問題" label-class-name="problem" width="300">
          <template #default="scope">
            {{ map?.get(scope.row.taskId) }}
          </template>
        </el-table-column>
        <el-table-column label="得点" width="70">
          <template #default="scope">
            <div class="center">
              {{ scope.row.score }}
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="result" label="結果" width="70">
          <template #default="scope">
            <div v-if="scope.row.status === 'AC'" class="accept">AC</div>
            <div v-if="scope.row.status === 'WA'" class="wrongResult">WA</div>
            <div v-if="scope.row.status === 'TLE'" class="wrongResult">TLE</div>
            <div v-if="scope.row.status === 'RE'" class="wrongResult">RE</div>
            <div v-if="scope.row.status === 'CE'" class="wrongResult">CE</div>
          </template>
        </el-table-column>
        <el-table-column label="実行時間" width="100">
          <template #default="socpe">
            <div class="center">
              {{ socpe.row.exectionTime }}
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="memory" label="メモリ" width="80">
          <template #default="scope">
            <div class="center">{{ scope.row.executionMemory }}KB</div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </szpp-judge-default-layout>
</template>

<!-- 提出時刻はcreatedAtを使う -->

<script setup lang="ts">
import useAuthStore from '~/stores/authStore'
import { storeToRefs } from 'pinia'
import { SubmitResponse } from '~/model/submits'
import { onMounted, ref } from 'vue'
import { listSubmitsMe } from '~/api/submits'
import { TaskResponse } from '~/model/tasks'
import { allTasks } from '~/api/tasks'

const { contestId } = defineProps<{ contestId: string }>()

const auth = useAuthStore()
const { user } = storeToRefs(auth)

//test
const problems = [
  {
    createdAt: '2022-06-20 18:09:15',
    problem: 'hoge',
    score: '2342',
    status: 'WA',
    exectionTime: '9 ms',
    executionMemory: '10',
    taskId: 1
  },
  {
    createdAt: '2022-06-20 18:09:15',
    problem: 'hoge',
    score: '2342',
    status: 'AC',
    exectionTime: '9 ms',
    executionMemory: '10',
    taskId: 3
  },
  {
    createdAt: '2022-06-20 18:09:15',
    problem: 'hoge',
    score: '2342',
    status: 'WA',
    exectionTime: '9 ms',
    executionMemory: '10',
    taskId: 2
  },
  {
    createdAt: '2022-06-20 18:09:15',
    problem: 'hoge',
    score: '2342',
    status: 'TLE',
    exectionTime: '9 ms',
    executionMemory: '10',
    taskId: 4
  },
  {
    createdAt: '2022-06-20 18:09:15',
    problem: 'hoge',
    score: '2342',
    status: 'WA',
    exectionTime: '9 ms',
    executionMemory: '10',
    taskId: 5
  }
]

const submits = ref<SubmitResponse[]>([])
const probName = ref<TaskResponse[]>([])
const map = ref<Map<number, string>>(new Map<number, string>())

onMounted(async () => {
  submits.value = await listSubmitsMe(contestId)
  probName.value = await allTasks(contestId)
  for (let task of probName.value) {
    map.value?.set(task.id, task.name)
  }
})
</script>

<style lang="scss" scoped>
.center {
  display: flex;
  justify-content: center;
}

.accept {
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

.wrongResult {
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
</style>
