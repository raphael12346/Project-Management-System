import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/Login.vue'),
    },

    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/Dashboard.vue'),
      meta: { activeComponent: 'dashboard' }
    },

    {
      path: '/allsurveys',
      name: 'allsurveys',
      component: () => import('../views/AllSurveys.vue'),
      meta: { activeComponent: 'allsurvey' }
    }

  ]
})

export default router
