import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import DevelopmentPlan from '../components/Plan/SoftDevelopmentPlan.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/home',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/home/plan/developmentplan',
      name: 'DevelopmentPlan',
      component: DevelopmentPlan
    }
  ]
})
