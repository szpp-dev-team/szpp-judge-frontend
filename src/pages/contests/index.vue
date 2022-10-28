<template>
  <szpp-judge-default-layout>
    <template #header> </template>
    <h1>市民講座　競技プログラミング</h1>
  </szpp-judge-default-layout>
</template>

<!-- 表示させるやつ
ContestResponse
 - name
 - category ?
 - description
 - start_at
 - end_at
-->
<script setup lang="ts">
import 'highlight.js/styles/monokai.css'
import { onMounted, ref } from 'vue'
import { ContestResponse } from '~/model/contests'
import { getContestsInfo } from '~/api/contests'

const { contestId } = defineProps<{
  contestId: string
}>()

const contestRes = ref<ContestResponse>()

const needInfo = async () => {
  contestRes.value = await getContestsInfo(contestId)
  console.log(contestRes.value)
}

onMounted(needInfo)

//contestRes.value = await contests(1)
</script>
