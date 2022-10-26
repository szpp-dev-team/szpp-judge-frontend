<template>
  <el-menu
    class="top-el-menu"
    :default-active="activeIndex"
    mode="horizontal"
    background-color="#0794be"
    text-color="#fff"
    active-text-color="#fff"
    :router="false"
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
        <span>{{ user.displayName }}</span>
      </template>
      <el-menu-item @click="onLogoutClicked">ログアウト</el-menu-item>
    </el-sub-menu>
    <!-- ログインしてなくても見られるようにするならコメントアウトを外してこのコメントも消す -->
    <!-- <el-menu-item v-else>
      <template #title>
        <i-ep-avatar style="margin-right: 0.25rem" />
        <span>ログイン</span>
      </template>
    </el-menu-item> -->
  </el-menu>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import router from '~/router'
import useAuthStore from '~/stores/authStore'

// サンプル
const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const auth = useAuthStore()
const { user } = storeToRefs(auth)

function onLogoutClicked() {
  auth.logout()
  // ログインページへ強制リダイレクト
  router.push({ path: '/login' })
}
</script>

<style scoped>
.flex-grow {
  flex-grow: 1;
}
</style>
