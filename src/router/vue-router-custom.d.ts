export {}

// https://github.com/vuejs/router/blob/30002aa62130139b81530083f1393bd367160dd2/packages/docs/guide/advanced/meta.md

import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    requiresAuth: boolean
  }
}
