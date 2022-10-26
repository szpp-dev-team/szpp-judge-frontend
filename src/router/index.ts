import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/contests',
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/contests',
    component: () => import('~/pages/contests.vue'),
    meta: {
      requiresAuth: false
    }
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
        props: (route) => ({ taskId: route.params.taskId }),
        meta: {
          requiresAuth: false
        }
      }
    ],
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { path: '/contests' }
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
