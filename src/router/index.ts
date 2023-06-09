import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/user/add',
      name: 'user-add',
      component: () => import('../views/UserAdd.vue')
    },
    {
      path: '/user/list',
      name: 'user-list',
      component: () => import('../views/UserList.vue')
    },
    {
      path: '/user/enter',
      name: 'user-enter',
      component: () => import('../views/UserEnter.vue')
    }
  ]
})

export default router
