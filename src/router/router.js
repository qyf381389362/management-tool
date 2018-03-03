/*
 * @Author: qinyufei
 * @Date: 2018-03-02 16:33:13
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-03-03 17:09:23
 */
import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import DevelopmentPlan from '../components/Plan/SoftDevelopmentPlan'
import VerificationPlan from '../components/Plan/SoftwareVerificationPlan'

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
          path: 'plan',
          name: 'Plan',
          component: DevelopmentPlan,
          children: [
            {
              path: 'developmentplan',
              name: 'DevelopmentPlan',
              component: DevelopmentPlan
            },
            {
              path: 'verificationplan',
              name: 'VerificationPlan',
              component: VerificationPlan
            }
          ]
        }
      ]

    }
  ]
})
