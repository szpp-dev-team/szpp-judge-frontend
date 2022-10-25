<template>This is a task {{ taskId }}</template>

<script setup lang="ts">
const { taskId } = defineProps<{
  taskId: string
}>()
</script>
