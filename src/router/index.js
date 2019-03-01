import Vue from 'vue'
import Router from 'vue-router'
import Portfolio from '@/components/Portfolio.vue'
import Resume from '@/components/Resume.vue'
import About from '@/components/About.vue'
import Portfoliojp from '@/components/Portfoliojp.vue'
import Resumejp from '@/components/Resumejp.vue'
import Aboutjp from '@/components/Aboutjp.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/portfoliojp',
      name: 'Portfoliojp',
      component: Portfoliojp
    },
    {
      path: '/resume',
      name: 'Resume',
      component: Resume
    },
    {
      path: '/resumejp',
      name: 'Resumejp',
      component: Resumejp
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
