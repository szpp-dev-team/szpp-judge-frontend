<template>
  <szpp-judge-default-layout>
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
import { ref } from 'vue'
import { ContestResponse } from '~/model/contests'

const contestRes = ref<ContestResponse>()

const { contestId } = defineProps<{
  contestId: string
}>()
</script>
