import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/convenio',
    name: 'convenio',
    component: () => import('../views/convenio/convenio-list.vue')
  },
  {
    path: '/especialidade',
    name: 'especialidade',
    component: () => import('../views/especialidade/especialidade-list.vue')
  },
  {
    path: '/medico',
    name: 'medico',
    component: () => import('../views/medico/medico-list.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
