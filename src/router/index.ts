import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    children: []
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router
