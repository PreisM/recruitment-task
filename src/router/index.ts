import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import LayoutDefault from '../layouts/LayoutDefault.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: LayoutDefault,
    children: [
      {
        path: '',
        name: 'List',
        component: () => import('../views/List.vue')
      },
      {
        path: '/add',
        name: 'AddUser',
        component: () => import('../views/User.vue')
      },
      {
        path: 'user/:userId',
        name: 'User',
        component: () => import('../views/User.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router
