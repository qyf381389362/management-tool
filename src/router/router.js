/*
 * @Author: qinyufei
 * @Date: 2018-03-02 16:33:13
 * @Last Modified by: 秦雨霏
 * @Last Modified time: 2018-05-10 13:24:31
 */
import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import HomePage from '@/views/HomePage'
import ProjectsList from '@/views/ProjectsList'
import DevelopmentPlan from '../views/Plan/SoftDevelopmentPlan'
import VerificationPlan from '../views/Plan/SoftwareVerificationPlan'
import CertificationPlan from '../views/Plan/SoftCertificationPlan'
import QAPlan from '../views/Plan//SoftQAPlan'
import SCMPlan from '../views/Plan//SoftSCMPlan'
import DesignStandard from '../views/Plan/SoftDesignStandard'
import CodingStandard from '../views/Plan/SoftCodingStandard'
import DemandStandard from '../views/Plan/SoftDemandStandard'
import CreateBaseLine from '../views/common/CreateBaseLine'
import CheckBaseLine from '../views/common/CheckBaseLine'
import BaseLineList from '../views/common/BaseLineList'
import SubmitFile from '../views/Plan/SubmitFile'
import ProblemReport from '../views/common/ProblemReport'
import SystemRequirements from '../views/Develop/SystemRequirements'
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
          name: SubmitFile,
          component: SubmitFile
        },
        {
          path: 'plan/verificationplan',
          name: 'VerificationPlan',
          component: VerificationPlan
        },
        {
          path: 'plan/certificationplan',
          name: 'CertificationPlan',
          component: CertificationPlan
        },
        {
          path: 'plan/QAplan',
          name: 'QAPlan',
          component: QAPlan
        },
        {
          path: 'plan/SCMplan',
          name: 'SCMPlan',
          component: SCMPlan
        },
        {
          path: 'plan/designStandard',
          name: 'DesignStandard',
          component: DesignStandard
        },
        {
          path: 'plan/codingStandard',
          name: 'CodingStandard',
          component: CodingStandard
        },
        {
          path: 'plan/demandStandard',
          name: 'DemandStandard',
          component: DemandStandard
        },
        {
          path: 'plan/createBaseLine',
          component: CreateBaseLine
        },
        {
          path: 'checkBaseLine',
          component: CheckBaseLine
        },
        {
          path: 'plan/problemReport',
          component: ProblemReport
        },
        {
          path: 'baseLineList',
          name: 'BaseLineList',
          component: BaseLineList
        },
        {
          path: 'develop',
          name: 'Develop',
          component: SystemRequirements
        },
        {
          path: 'develop/systemRequirements',
          name: 'SystemRequirements',
          component: SystemRequirements
        },
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
          path: 'checkItem',
          name: 'CheckItem',
          component: CheckItem
        },
        {
          path: 'reviewItem',
          name: 'ReviewItem',
          component: ReviewItem
        }
      ]
    }
  ]
})
