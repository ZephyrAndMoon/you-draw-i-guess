import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import HomePage from '../view/Home/index'
import LoginAndRegister from '../view/LoginAndRegister/index'
import FillInfo from '../view/FillInfo/index'

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
  },
  {
    path: '/fill-info',
    name: 'FillInfo',
    component: FillInfo
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
