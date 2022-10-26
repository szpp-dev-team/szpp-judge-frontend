import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/contests'
  },
  {
    path: '/contests',
    // 今回は、pagesのcontest.vueは読み込まない形でお願いしたいです。
    // 第2回以降は用いると思います
    //component: () => import('~/pages/contests.vue')
    redirect: '/contests/1'
  },
  {
    path: '/contests/:contestId',
    component: () => import('~/pages/contests/index.vue'),
    props: (route) => ({ contestId: route.params.contestId })

    // children: [
    //   // task 一覧はあると紛らわしい場合があるので省略
    //   // TODO: /contests/:contestId/tasks を直打ちされた場合の対応(リダイレクト or 404?)
    //   // {
    //   //   path: 'tasks',
    //   //   component: () => import('~/pages/contests/tasks.vue'),
    //   //   props: route => ({ contestId: route.path })
    //   // },

    // ]
  },
  {
    path: '/contests/:contestId/tasks/:taskId',
    component: () => import('~/pages/contests/tasks/index.vue'),
    props: (route) => ({ taskId: route.params.taskId })
  },
  {
    path: '/contests/:contestId/submits',
    component: () => import('~/pages/contests/submit/index.vue'),
    props: (route) => ({ contestId: route.params.contestId })
  },
  {
    path: '/contests/:contestId/ranking',
    component: () => import('~/pages/contests/ranking/index.vue'),
    props: (route) => ({ contestId: route.params.contestId })
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
