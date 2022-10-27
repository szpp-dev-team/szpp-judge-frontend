<template>
  <szpp-judge-default-layout>
    <h1 class="center">ランキング</h1>
    <div class="center">
      <el-table
        :data="results"
        stripe
        :border="true"
        style="width: 80%"
        :header-cell-style="{ textAlign: 'center' }"
      >
        <el-table-column label="順位" prop="rank" width="80" />
        <el-table-column
          prop="name"
          label="ユーザ"
          label-class-name="problem"
          width="200"
        />
        <el-table-column prop="score" label="得点" width="100" />
        <el-table-column
          v-for="(prob, index) in 12"
          :key="index"
          :prop="`pro[${index}]`"
          :label="`${index}`"
          width="100"
        >
        </el-table-column>
      </el-table>
    </div>
  </szpp-judge-default-layout>
</template>
<script setup lang="ts">
import useAuthStore from '~/stores/authStore'
import { storeToRefs } from 'pinia'
import { RowJustify } from 'element-plus'
const auth = useAuthStore()
const { user } = storeToRefs(auth)

//test
const problems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const results = [
  {
    rank: '1',
    name: 'hoge',
    score: '23423',
    pro: ['32323423', '123', '121212']
  },
  { rank: '2', name: 'hoge', score: '1231', 1: '122341', 2: '23423' },
  { rank: '3', name: 'hoge', score: '1231', 1: '124231', 2: '23423' },
  { rank: '4', name: 'hoge', score: '1231', 1: '122341', 2: '23423' },
  { rank: '5', name: 'hoge', score: '1231', 1: '122341', 2: '23423' },
  { rank: '6', name: 'hoge', score: '1231', 1: '12431', 2: '23423' }
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

//いい名前がわからない
.score {
  display: flex;
  justify-content: center;
  margin: 0;
}
</style>
