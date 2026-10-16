import { createRouter, createWebHashHistory } from 'vue-router'
import Portfolio from '@/components/Portfolio.vue'
import About from '@/components/About.vue'
import Portfoliojp from '@/components/Portfoliojp.vue'
import Aboutjp from '@/components/Aboutjp.vue'

export default createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/',
      name: 'Portfoliojp',
      component: Portfoliojp
    },
    {
      path: '/portfoliojp',
      redirect: { name: 'Portfoliojp' }
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/aboutjp',
      name: 'Aboutjp',
      component: Aboutjp
    }
  ]
})
