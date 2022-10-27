<template>
  <szpp-judge-default-layout>
    <Markdown :source="source" :html="true" />
    <el-divider direction="horizontal" />
    <upload-task-form
      :task-id="parseInt(taskId)"
      :contest-id="parseInt(contestId)"
    />
  </szpp-judge-default-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Markdown from 'vue3-markdown-it'

const source = ref('')

//例
const { taskId, contestId } = defineProps<{
  taskId: string
  contestId: string
}>()
</script>
