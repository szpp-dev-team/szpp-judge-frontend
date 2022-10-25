<template>
  <szpp-judge-default-layout>
    <h1>[ == This page represents one contest == ]</h1>
    contest {{ contestId }}
    <router-view></router-view>
  </szpp-judge-default-layout>
</template>

<script setup lang="ts">
const { contestId } = defineProps<{
  contestId: string
}>()
</script>
