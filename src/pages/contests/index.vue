<template>
  <szpp-judge-default-layout>
    <div class="category">{{ contestRes?.category }}</div>

    <!-- <Markdown :source="contestRes?.name" />
    <Markdown :source="contestRes?.category" />
    <Markdown :source="contestRes?.description" />
    <Markdown :source="contestRes?.startAt" />
    <Markdown :source="contestRes?.endAt" /> -->
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
import Markdown from 'vue3-markdown-it'

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

<style scoped lang="scss">
.category {
  display: flex;
  justify-content: center;
  font-size: 100px;
}
</style>
