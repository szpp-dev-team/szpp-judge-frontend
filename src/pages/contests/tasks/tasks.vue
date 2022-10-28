<template>
  <szpp-judge-default-layout>
    <Markdown :source="source?.statement" :html="true" />
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
import { oneTask } from '~/api/tasks'
import { TaskResponse } from '~/model/tasks'

const { taskId, contestId } = defineProps<{
  taskId: string
  contestId: string
}>()

const source = ref<TaskResponse>()

// try{
//   source.value = await oneTask(taskId)
// }catch(e){
//   console.log(e)
// }

//例
</script>
