/*
 * @Author: 秦雨霏
 * @Date: 2018-07-24 14:59:38
 * @Last Modified by: 秦雨霏
 * @Last Modified time: 2018-12-14 02:55:39
 * @Description: 项目路由管理
 */
import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import HomePage from '@/views/HomePage'
import ProjectsList from '@/views/ProjectsList'
import SystemRequirements from '../views/Plan/SystemRequirements'
import DevelopmentPlan from '../views/Plan/SoftDevelopmentPlan'
import VerificationPlan from '../views/Plan/SoftwareVerificationPlan'
import CertificationPlan from '../views/Plan/SoftCertificationPlan'
import QAPlan from '../views/Plan//SoftQAPlan'
import SCMPlan from '../views/Plan//SoftSCMPlan'
import DesignStandard from '../views/Plan/SoftDesignStandard'
import CodingStandard from '../views/Plan/SoftCodingStandard'
import DemandStandard from '../views/Plan/SoftDemandStandard'
import SubmitFile from '../views/Plan/SubmitFile'
import CreateBaseLine from '../views/common/CreateBaseLine'
import CheckBaseLine from '../views/common/CheckBaseLine'
import BaseLineList from '../views/common/BaseLineList'
import ProblemReport from '../views/common/ProblemReport'
import CheckSteps from '../views/common/CheckSteps'
import Task from '../views/common/task'
import AddSystemRequirement from '../views/Develop/AddSystemRequirement'
import HighLevelRequirements from '../views/Develop/HighLevelRequirements'
import AddHighLevelRequirement from '../views/Develop/AddHighLevelRequirement'
import LowLevelRequirements from '../views/Develop/LowLevelRequirements'
import AddLowLevelRequirement from '../views/Develop/AddLowLevelRequirement'
import SoftwareStructure from '../views/Develop/SoftwareStructure'
import AddSoftwareStructure from '../views/Develop/AddSoftwareStructure'
import SoftwareCoding from '../views/Develop/SoftwareCoding'
import AddSoftwareCoding from '../views/Develop/AddSoftwareCoding'
import MyCheckList from '../views/Specialist/MyCheckList'
import CheckItem from '../views/Specialist/CheckItem'
import MyReviewList from '../views/Specialist/MyReviewList'
import ReviewItem from '../views/Specialist/ReviewItem'
import CheckPlanItems from '../views/Specialist/CheckPlanItems'
import CheckLowLevelRequirements from '../views/Specialist/CheckLowLevelRequirements'
import TestCaseManagement from '../views/Test/testCaseManagement'
import TestOverview from '../views/Test/testOverview'
import Authority from '../views/Authority/Authority'
import Wiki from '../views/Wiki/Wiki'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/login',
      component: Login
    },
    {
      // 项目列表
      path: '/projects',
      component: ProjectsList
    },
    {
      // 项目内容路由
      path: '/project/:id',
      name: 'HomePage',
      component: HomePage,
      children: [
        // {
        //   path: 'plan',
        //   name: 'Plan',
        //   component: DevelopmentPlan
        // },
        // 软件计划部分的路由
        {
          path: 'systemRequirements',
          name: 'SystemRequirements',
          component: SystemRequirements
        },
        {
          path: 'developmentplan',
          name: 'DevelopmentPlan',
          component: DevelopmentPlan
        },
        {
          path: 'plan/developmentplan/submitFile',
          name: SubmitFile,
          component: SubmitFile
        },
        {
          path: 'verificationplan',
          name: 'VerificationPlan',
          component: VerificationPlan
        },
        {
          path: 'certificationplan',
          name: 'CertificationPlan',
          component: CertificationPlan
        },
        {
          path: 'QAplan',
          name: 'QAPlan',
          component: QAPlan
        },
        {
          path: 'SCMplan',
          name: 'SCMPlan',
          component: SCMPlan
        },
        {
          path: 'designStandard',
          name: 'DesignStandard',
          component: DesignStandard
        },
        {
          path: 'codingStandard',
          name: 'CodingStandard',
          component: CodingStandard
        },
        {
          path: 'demandStandard',
          name: 'DemandStandard',
          component: DemandStandard
        },
        {
          path: 'createBaseLine',
          component: CreateBaseLine
        },
        {
          path: 'checkBaseLine',
          component: CheckBaseLine
        },
        {
          path: 'problemReport',
          component: ProblemReport
        },
        {
          path: 'baseLineList',
          name: 'BaseLineList',
          component: BaseLineList
        },
        // 软件开发部分的路由
        // {
        //   path: 'develop',
        //   name: 'Develop',
        //   component: SystemRequirements
        // },
        {
          path: 'develop/addSystemRequirement',
          name: 'AddSystemRequirement',
          component: AddSystemRequirement
        },
        {
          path: 'develop/highLevelRequirements',
          name: 'HighLevelRequirements',
          component: HighLevelRequirements
        },
        {
          path: 'develop/addHighLevelRequirement',
          name: 'AddHighLevelRequirement',
          component: AddHighLevelRequirement
        },
        {
          path: 'develop/lowLevelRequirements',
          name: 'LowLevelRequirements',
          component: LowLevelRequirements
        },
        {
          path: 'develop/addLowLevelRequirement',
          name: 'AddLowLevelRequirement',
          component: AddLowLevelRequirement
        },
        {
          path: 'develop/softwareStructure',
          name: 'SoftwareStructure',
          component: SoftwareStructure
        },
        {
          path: 'develop/addSoftwareStructure',
          name: 'AddSoftwareStructure',
          component: AddSoftwareStructure
        },
        {
          path: 'develop/softwareCoding',
          name: 'SoftwareCoding',
          component: SoftwareCoding
        },
        {
          path: 'develop/addSoftwareCoding',
          name: 'AddSoftwareCoding',
          component: AddSoftwareCoding
        },
        {
          path: 'myCheckList',
          name: 'MyCheckList',
          component: MyCheckList
        },
        {
          path: 'myReviewList',
          name: 'MyReviewList',
          component: MyReviewList
        },
        {
          path: 'checkItem',
          name: 'CheckItem',
          component: CheckItem
        },
        {
          path: 'reviewItem',
          name: 'ReviewItem',
          component: ReviewItem
        },
        {
          path: 'checkPlanItems',
          name: 'CheckPlanItems',
          component: CheckPlanItems
        },
        {
          path: 'checkLLR',
          name: 'CheckLowLevelRequirements',
          component: CheckLowLevelRequirements
        },
        {
          path: 'checkSteps',
          name: 'CheckSteps',
          component: CheckSteps
        },
        // 测试部分的路由
        {
          path: 'test',
          name: 'test',
          component: TestCaseManagement
        },
        {
          path: 'test/testCaseManagement',
          name: 'testCaseManagement',
          component: TestCaseManagement
        },
        {
          path: 'test/testOverview',
          name: 'testOverview',
          component: TestOverview
        },
        // 权限管理部分的路由
        {
          path: 'authority',
          name: 'authority',
          component: Authority
        },
        // Wiki路由
        {
          path: 'wiki',
          name: 'wiki',
          component: Wiki
        },
        {
          path: 'task',
          name: 'task',
          component: Task
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
