<template>
  <szpp-judge-default-layout>
    <h1>市民講座　競技プログラミング</h1>
  </szpp-judge-default-layout>
</template>

<script setup lang="ts">
import 'highlight.js/styles/monokai.css'

const { contestId } = defineProps<{
  contestId: string
}>()
</script>
