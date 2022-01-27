import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DaybookRoutes from '../modules/daybook/router/index'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/daybook',
    ...DaybookRoutes 
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
