<template>
  <szpp-judge-default-layout>
    <h1 class="center">ランキング</h1>
    <div class="center">
      <el-table
        :data="problems"
        stripe
        :border="true"
        style="width: 75.1%"
        :header-cell-style="{ textAlign: 'center' }"
      >
        <el-table-column label="順位" prop="date" width="180" />
        <el-table-column
          prop="problem"
          label="ユーザ"
          label-class-name="problem"
          width="400"
        />
        <el-table-column prop="score" label="得点" width="100" />
        <el-table-column prop="result" label="結果" width="70">
          <template #default="scope">
            <div v-if="scope.row.result === 'AC'" class="iconAc">AC</div>
            <div v-if="scope.row.result === 'WA'" class="iconWa">WA</div>
          </template>
        </el-table-column>
        <el-table-column prop="exectionTime" label="実行時間" width="100" />
        <el-table-column prop="memory" label="メモリ" width="80">
        </el-table-column>
      </el-table>
    </div>
  </szpp-judge-default-layout>
</template>
<script setup lang="ts">
import useAuthStore from '~/stores/authStore'
import { storeToRefs } from 'pinia'
const auth = useAuthStore()
const { user } = storeToRefs(auth)

//test
const problems = [
  {
    date: '2022-06-20 18:09:15',
    problem: 'hoge',
    score: '2342',
    result: 'WA',
    exectionTime: '9 ms',
    memory: '10'
  },
  {
    date: '2022-06-20 18:09:15',
    problem: 'hoge',
    score: '2342',
    result: 'WA',
    exectionTime: '9 ms',
    memory: '10'
  },
  {
    date: '2022-06-20 18:09:15',
    problem: 'hoge',
    score: '2342',
    result: 'AC',
    exectionTime: '9 ms',
    memory: '10'
  },
  {
    date: '2022-06-20 18:09:15',
    problem: 'hoge',
    score: '2342',
    result: 'AC',
    exectionTime: '9 ms',
    memory: '10'
  },
  {
    date: '2022-06-20 18:09:15',
    problem: 'hoge',
    score: '2342',
    result: 'AC',
    exectionTime: '9 ms',
    memory: '10'
  }
]
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

.cel {
  display: flex;
  justify-content: center;
}
</style>
