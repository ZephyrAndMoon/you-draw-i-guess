import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import HomePage from '../view/Home/index'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
