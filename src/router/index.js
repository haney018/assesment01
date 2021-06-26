import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Exercise 1',
    component: () => import('../views/Exercise1.vue')
  },
  {
    path: '/exercise1',
    name: 'Exercise 1',
    component: () => import('../views/Exercise1.vue')
  },
  {
    path: '/exercise2',
    name: 'Exercise 2',
    component: () => import('../views/Exercise2.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
