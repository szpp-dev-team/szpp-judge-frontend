<template>
  <h1>[ == This page represents one contest == ]</h1>
  contest {{ contestId }}
  <router-view></router-view>
</template>

<script setup lang="ts">
const { contestId } = defineProps<{
  contestId: string
}>()
</script>
