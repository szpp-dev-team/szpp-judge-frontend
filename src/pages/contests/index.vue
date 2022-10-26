<template>
  <szpp-judge-default-layout>
    <h1>[ == This page represents one contest == ]</h1>
    contest {{ contestId }}
    <Markdown :source="source" />
    <router-view></router-view>
  </szpp-judge-default-layout>
</template>

<script setup lang="ts">
import 'highlight.js/styles/monokai.css'
import Markdown from 'vue3-markdown-it'

const source = '- Hello World!'

const { contestId } = defineProps<{
  contestId: string
}>()
</script>
