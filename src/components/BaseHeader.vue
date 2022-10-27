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
        <el-row :gutter="20" style="margin: 0">
          <el-col
            v-for="(task, index) in tasks"
            :key="index"
            :span="6"
            style="padding: 0"
          >
            <el-menu-item
              :index="'1' + index"
              :route="{ path: '/contests/1/tasks/' + (index + 1) }"
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
      <div class="flex-grow" />
      <el-sub-menu index="3" v-if="user">
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
  </el-affix>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import router from '~/router'
import useAuthStore from '~/stores/authStore'

// サンプル
const tasks = [
  { name: 'A 優しい' },
  { name: 'B 普通' },
  { name: 'C 難しい' },
  { name: 'D 超難しい' },
  { name: 'D 超難しい' },
  { name: 'D 超難しい' },
  { name: 'D 超難しい' },
  { name: 'D 超難しい' },
  { name: 'D 超難しい' },
  { name: 'D 超難しい' },
  { name: 'D 超難しい' },
  { name: 'D 超難しい' }
]
const activeIndex = ref('1')

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
