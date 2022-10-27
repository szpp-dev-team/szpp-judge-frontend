<template>
  <el-dropdown class="header-end-menu" @command="handlecommand" v-if="user">
    <span class="el-dropdown-link">
      <el-icon class="el-icon--left">
        <i-ep-avatar />
      </el-icon>
      {{ user.displayName }}
      <el-icon class="el-icon--right">
        <i-ep-arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="logout">ログアウト</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  <div class="header-end-menu no-login" v-else>
    <router-link :to="{ path: '/login' }">
      <el-icon class="el-icon--left">
        <i-ep-avatar />
      </el-icon>
      ログイン
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import router from '~/router'
import useAuthStore from '~/stores/authStore'

const auth = useAuthStore()
const { user } = storeToRefs(auth)

function handlecommand(command: 'logout') {
  switch (command) {
    case 'logout':
      logout()
      break
    default:
      console.debug(`unknown command: ${command}`)
      break
  }
}

function logout() {
  auth.logout()
  // 強制リダイレクト
  router.push({ path: '/login' })
}
</script>

<style scoped>
.header-end-menu {
  padding: 0 var(--el-menu-base-level-padding);
}
.header-end-menu.no-login {
  color: var(--el-color-white);
  font-size: var(
    --el-font-size-base
  ); /* --el-font-size-{extra-small|small|base|medium|extra-large} */
  display: flex;
  align-items: center;
}
.el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-white);
  display: flex;
  align-items: center;
}
</style>
