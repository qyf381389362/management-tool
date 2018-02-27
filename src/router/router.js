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
      // 主页路由
      path: '/home',
      name: 'HomePage',
      component: HomePage,
      children: [
        {
          path: '/plan',
          name: 'Plan',
          component: DevelopmentPlan,
          children: [
            {
              path: '/developmentplan',
              name: 'DevelopmentPlan',
              component: DevelopmentPlan
            }
          ]
        }
      ]

    }
  ]
})
