/*
 * @Author: qinyufei
 * @Date: 2018-03-02 16:33:13
 * @Last Modified by: 秦雨霏
 * @Last Modified time: 2018-05-09 20:37:37
 */
import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import HomePage from '@/views/HomePage'
import ProjectsList from '@/views/ProjectsList'
import DevelopmentPlan from '../views/Plan/SoftDevelopmentPlan'
import VerificationPlan from '../views/Plan/SoftwareVerificationPlan'
import CreateBaseLine from '../views/common/CreateBaseLine'
import CheckBaseLine from '../views/common/CheckBaseLine'
import SubmitFile from '../views/Plan/SubmitFile'
import ProblemReport from '../views/common/ProblemReport'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/projects',
      component: ProjectsList
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
          component: DevelopmentPlan
        },
        {
          path: 'plan/developmentplan',
          name: 'DevelopmentPlan',
          component: DevelopmentPlan
        },
        {
          path: 'plan/developmentplan/submitFile',
          component: SubmitFile
        },
        {
          path: 'plan/verificationplan',
          name: 'VerificationPlan',
          component: VerificationPlan
        },
        {
          path: 'plan/createBaseLine',
          component: CreateBaseLine
        },
        {
          path: 'plan/checkBaseLine',
          component: CheckBaseLine
        },
        {
          path: 'plan/problemReport',
          component: ProblemReport
        }
      ]
    }
  ]
})
