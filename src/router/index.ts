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
    path: '/convenio-form',
    name: 'convenio-form',
    component: () => import('../views/convenio/convenio-form.vue')
  },
  {
    path: '/convenio-list',
    name: 'convenio-list',
    component: () => import('../views/convenio/convenio-list.vue')
  },
  {
    path: '/especialidade/listar',
    name: 'especialidade-listar',
    component: () => import('../views/especialidade/especialidade-list.vue')
  },
  {
    path: '/especialidade/formulario',
    name: 'especialidade-cadastrar',
    component: () => import('../views/especialidade/especialidade-form.vue')
  },
  {
    path: '/especialidade/formulario/:model/:id',
    name: 'especialidade-detalhar',
    props: (router) => ({ id: router.params.id, model: router.params.model }),
    component: () => import('../views/especialidade/especialidade-form.vue')
  },

  {
    path: '/medico',
    name: 'medico',
    component: () => import('../views/medico/medico-list.vue')
  },
  {
    path: '/paciente',
    name: 'paciente',
    component: () => import('../views/paciente/paciente-list.vue')
  },
  {
    path: '/secretaria',
    name: 'secretaria',
    component: () => import('../views/secretaria/secretaria-list.vue')
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
