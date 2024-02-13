// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: '/code',
        name: 'Code Editor',
        component: () => import('@/views/EditorPage.vue')
      },
      {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login.vue')
      },
      {
        path: '/home',
        name: 'UserHome',
        component: () => import('@/views/UserHome.vue')
      },
      {
        path: '/oauth/microsoft',
        name: 'Microsoft OAuth',
        component: () => import('@/views/OAuthMicrosoft.vue')
      },
      {
        path: '/download',
        name: 'Download',
        component: () => import('@/views/Download.vue')
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
