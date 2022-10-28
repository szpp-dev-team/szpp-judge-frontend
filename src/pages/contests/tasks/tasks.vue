<template>
  <szpp-judge-default-layout>
    <Markdown :source="taskDetail?.name" />
    <div>
      実行時間制限:{{ taskDetail?.timeLimit }}ms / メモリ制限:{{
        taskDetail?.memoryLimit
      }}KB
    </div>
    <div>score {{ taskDetail?.score }}</div>
    <Markdown :source="taskDetail?.statement" :html="true" />
    <Markdown :source="taskDetail?.constraints" />
    <Markdown :source="taskDetail?.input" />
    <Markdown :source="taskDetail?.output" />
    <div v-for="(test, index) in testCase" :key="index">
      <Markdown :source="test.input" />
      <Markdown :source="test.output" />
    </div>
    <el-divider direction="horizontal" />
    <upload-task-form
      :task-id="parseInt(taskId)"
      :contest-id="parseInt(contestId)"
    />
  </szpp-judge-default-layout>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Markdown from 'vue3-markdown-it'
import { allTestCaseId, oneTask, testCaseDetail } from '~/api/tasks'
import { TaskResponse, testCase } from '~/model/tasks'

const taskDetail = ref<TaskResponse>()
const testCase = ref<testCase[]>([])

const { taskId, contestId } = defineProps<{
  taskId: string
  contestId: string
}>()

const needInfo = async () => {
  try {
    taskDetail.value = await oneTask(taskId)
    const testCaseId = await allTestCaseId(taskId)
    for (const id of testCaseId) {
      console.log(id.id)
      const caseTest: testCase = await testCaseDetail(taskId, `${id.id}`)
      testCase.value?.push(caseTest)
    }
  } catch (e) {
    console.debug(e)
  }
}
onMounted(needInfo)
</script>
