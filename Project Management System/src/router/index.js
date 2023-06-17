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
      meta: { activeComponent: 'dashboard' },
      beforeRouteLeave(to, from, next) {
        // Reset the body style to its default state
        document.body.style = '';
    
        // Proceed to the next route
        next();
      }
    },

    {
      path: '/allsurveys',
      name: 'allsurveys',
      component: () => import('../views/AllSurveys.vue'),
      meta: { activeComponent: 'allsurvey' }
    },

    {
      path: '/ongoingsurveys',
      name: 'ongoingsurveys',
      component: () => import('../views/OngoingSurveys.vue'),
      meta: { activeComponent: 'ongoingsurvey' }
    },

    {
      path: '/surveydetails',
      name: 'surveydetails',
      component: () => import('../views/SurveyDetails.vue'),
      meta: { activeComponent: 'surveydetails' }
    },

    {
      path: '/surveyprogress',
      name: 'surveyprogress',
      component: () => import('../views/SurveyProgress.vue'),
      meta: { activeComponent: 'surveyprogress' }
    },

    {
      path: '/paymentprogress',
      name: 'paymentprogress',
      component: () => import('../views/PaymentProgress.vue'),
      meta: { activeComponent: 'paymentprogress' }
    }
  ],
})


export default router
