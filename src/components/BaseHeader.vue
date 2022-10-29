<template>
  <el-affix>
    <el-menu
      class="top-el-menu"
      :default-active="activeIndex"
      mode="horizontal"
      background-color="#0794be"
      text-color="#fff"
      active-text-color="#fff"
      :router="true"
      :ellipsis="false"
      menu-trigger="click"
    >
      <el-menu-item index="0" :route="{ path: '/contests' }"
        >Szpp Judge</el-menu-item
      >
      <el-sub-menu index="1">
        <template #title style="padding: 0">問題</template>
        <el-row :gutter="10" style="margin: 0">
          <el-col
            v-for="(task, index) in tasks"
            :key="index"
            :span="6"
            style="padding: 0"
          >
            <el-menu-item
              :index="'1' + index"
              :route="{ path: `/contests/1/tasks/${task.id}` }"
              v-bind:key="index"
              style="margin-left: 1212"
            >
              {{ task.name }}
            </el-menu-item>
          </el-col>
        </el-row>
      </el-sub-menu>
      <el-menu-item :route="{ path: '/contests/1/submits' }"
        >提出一覧</el-menu-item
      >
      <el-menu-item :route="{ path: '/contests/1/ranking' }"
        >ランキング</el-menu-item
      >
      <!-- <el-menu-item index="1">コンテスト</el-menu-item> -->

      <!-- スペース -->
      <div class="flex-grow" />

      <!-- ログイン ログアウトなど -->
      <header-end-menu />
    </el-menu>
  </el-affix>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { TaskResponse } from '~/model/tasks'
import { allTasks } from '~/api/tasks'

const tasks = ref<TaskResponse[]>([])

const needInfo = async () => {
  tasks.value = await allTasks('1')
}

onMounted(needInfo)

const activeIndex = ref('1')
</script>

<style scoped>
.flex-grow {
  flex-grow: 1;
}
</style>
