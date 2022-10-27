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
        :cell-style="{ padding: '3px', height: '50px' }"
      >
        <el-table-column label="順位" width="80" class-name="score">
          <template #default="scope">
            <div class="center">
              {{ scope.row.rank }}
            </div>
          </template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="ユーザ"
          label-class-name="problem"
          width="200"
        />
        <el-table-column label="得点" width="100">
          <template #default="scope">
            <div class="center">
              {{ scope.row.score }}
            </div>
          </template>
        </el-table-column>
        <el-table-column
          v-for="(prob, index) in 12"
          :key="index"
          :label="`${prob}`"
          width="100"
        >
          <template #default="scope">
            <p style="margin: 0">
              {{ scope.row.pro[0] }}
            </p>
            <p style="margin: 0">
              {{ scope.row.pro[1] }}
            </p>
          </template>
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
    pro: ['123', '121212']
  },
  { rank: '2', name: 'hoge', score: '1231', pro: ['100', '121212'] },
  { rank: '3', name: 'hoge', score: '1231', pro: ['123', '121212'] },
  { rank: '4', name: 'hoge', score: '1231', pro: ['123', '121212'] },
  { rank: '5', name: 'hoge', score: '1231', pro: ['123', '121212'] },
  { rank: '6', name: 'hoge', score: '1231', pro: ['123', '121212'] }
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
</style>

<!-- <style>
.score {
  display: flex;
  justify-content: space-around;
  text-align: center;
  margin: 0;
}
</style> -->
