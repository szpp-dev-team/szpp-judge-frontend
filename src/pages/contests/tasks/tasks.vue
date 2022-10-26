<template>
  <szpp-judge-default-layout>
    <Markdown :source="source" :html="true" />
  </szpp-judge-default-layout>
</template>

<script setup lang="ts">
import Markdown from 'vue3-markdown-it'

//例
const source: string = `
# 勉強会

<span style="font-size:200%; font-weight: bold">REST APIサーバーをgoで作ってみよう！！</span>

---

## REST APIサーバーとは
 - REpresentational State Transferの略
 <br>
 **REST APIサーバのイメージ図**
 <img src="https://camo.qiitausercontent.com/58b1eadcd9db41fda2cd24c9e5be0fb7a39b0c85/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f3231343533322f66303530323063382d363934622d643566642d666165652d6236373531373464313132612e706e67" />
 (出典　[0からREST APIについて調べてみた](https://qiita.com/masato44gm/items/dffb8281536ad321fb08))
 
---
`
const { taskId } = defineProps<{
  taskId: string
}>()
</script>
