import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import useAuthStore from '~/stores/authStore'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/contests',
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/contests',
    component: () => import('~/pages/contests.vue'),
    meta: {
      requiresAuth: true
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
          requiresAuth: true
        }
      }
    ],
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { path: '/contests' },
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to) => {
  const auth = useAuthStore()
  if (to.path !== '/login' && to.meta.requiresAuth && !auth.user)
    return { path: '/login' }
})

export default router
