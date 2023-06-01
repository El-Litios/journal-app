import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DaybookRoutes from '../modules/daybook/router/index'
import AuthRoutes from '../modules/auth/router/index'
import isAuthenticatedGuard from '../modules/auth/router/auth-guard'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/daybook',
    beforeEnter: [isAuthenticatedGuard],
    ...DaybookRoutes 
  },
  {
    path: '/auth',
    ...AuthRoutes 
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
