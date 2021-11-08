import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import HomePage from '../view/Home/index'
import LoginAndRegister from '../view/LoginAndRegister/index'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/login-and-register',
    name: 'LoginAndRegister',
    component: LoginAndRegister
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
