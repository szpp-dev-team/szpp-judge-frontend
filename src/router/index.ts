import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/contests'
  },
  {
    path: '/contests',
    component: () => import('~/pages/contests.vue')
  },
  {
    path: '/contests/:contestId',
    component: () => import('~/pages/contests/index.vue'),
    props: (route) => ({ contestId: route.params.contestId }),
    children: [
      // task 一覧はあると紛らわしい場合があるので省略
      // TODO: /contests/:contestId/tasks を直打ちされた場合の対応(リダイレクト or 404?)
      // {
      //   path: 'tasks',
      //   component: () => import('~/pages/contests/tasks.vue'),
      //   props: route => ({ contestId: route.path })
      // },
      {
        path: 'tasks/:taskId',
        component: () => import('~/pages/contests/tasks/index.vue'),
        props: (route) => ({ taskId: route.params.taskId })
      }
    ]
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
