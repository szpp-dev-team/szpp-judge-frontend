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
    // 今回は、pagesのcontest.vueは読み込まない形でお願いしたいです。
    // 第2回以降は用いると思います
    //component: () => import('~/pages/contests.vue')
    redirect: '/contests/1',
    meta: { requiresAuth: true }
    //component: () => import('~/pages/contests.vue'),
    // meta: {
    //   requiresAuth: true
    // }
  },
  {
    path: '/contests/:contestId',
    component: () => import('~/pages/contests/index.vue'),
    props: (route) => ({ contestId: route.params.contestId }),
    meta: { requiresAuth: true }

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
    component: () => import('~/pages/contests/tasks/tasks.vue'),
    props: (route) => ({
      contestId: route.params.contestId,
      taskId: route.params.taskId
    }),
    meta: { requiresAuth: true }
  },
  {
    path: '/contests/:contestId/submits',
    component: () => import('~/pages/contests/submits/submits.vue'),
    props: (route) => ({}),
    meta: { requiresAuth: true }
  },
  {
    path: '/contests/:contestId/ranking',
    component: () => import('~/pages/contests/ranking/ranking.vue'),
    props: (route) => ({ contestId: route.params.contestId }),
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    component: () => import('~/pages/login.vue'),
    meta: { requiresAuth: false }
  },
  {
    path: '/register',
    component: () => import('~/pages/register.vue'),
    meta: { requiresAuth: false }
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
