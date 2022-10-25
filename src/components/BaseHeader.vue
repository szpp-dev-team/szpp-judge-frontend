<template>
  <el-menu
    class="top-el-menu"
    :default-active="activeIndex"
    mode="horizontal"
    background-color="#0794be"
    text-color="#fff"
    active-text-color="#fff"
    :router="true"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item index="0" style="pointer-events: none"
      >Szpp Judge</el-menu-item
    >
    <!-- <el-menu-item index="1">コンテスト</el-menu-item> -->
    <div class="flex-grow" />
    <el-sub-menu index="2" v-if="user">
      <template #title>
        <i-ep-avatar style="margin-right: 0.25rem" />
        <span>{{ user.displayName ?? 'No name' }}</span>
      </template>
      <el-menu-item :route="{ path: '/logout' }">ログアウト</el-menu-item>
    </el-sub-menu>
    <el-menu-item :route="{ path: '/login' }" v-else>
      <template #title>
        <i-ep-avatar style="margin-right: 0.25rem" />
        <span>ログイン</span>
      </template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

// サンプル
const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const user = { displayName: 'taro' }
</script>

<style scoped>
.flex-grow {
  flex-grow: 1;
}
</style>
