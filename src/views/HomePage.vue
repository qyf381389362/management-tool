/*
 * @Author: 秦雨霏 
 * @Date: 2018-03-02 16:33:03 
 * @Last Modified by: 秦雨霏
 * @Last Modified time: 2018-05-24 14:15:08
 */

<template>
  <el-container class="outer">
    <!-- 顶部导航 -->
    <el-header height="50px" class="header">
      <!-- <div class="logo"></div> -->
      <el-menu
        :default-active="$route.path"
        mode="horizontal"
        class="topMenu"
        background-color="#1c2532"
        text-color="#fff"
        active-text-color="#ffd04b"
        router>
        <el-submenu class="menuItem" index="1">
          <template slot="title">基线</template>
          <el-menu-item index="/home/plan/createBaseLine">创建基线</el-menu-item>
          <el-menu-item index="/home/baseLineList">基线列表</el-menu-item>
        </el-submenu>
        <el-menu-item class="menuItem" index="/projects">项目列表</el-menu-item>
        <el-menu-item class="menuItem" index="/home/checkSteps">项目进度</el-menu-item>
        <el-submenu class="menuItem" index="2">
          <template slot="title">我的</template>
          <el-menu-item index="/home/myCheckList">我的核查</el-menu-item>
          <el-menu-item index="/home/myReviewList">我的评审</el-menu-item>
        </el-submenu>
        <el-menu-item class="menuItem" index="/">退出</el-menu-item>
      </el-menu>
    </el-header>
    <el-container>
      <!-- 侧边栏导航 -->
      <el-aside width="200px" class="siderBar">
        <el-menu
          :default-active="$route.path"
          background-color="#2f4050"
          text-color="#fff"
          active-text-color="#ffd04b"
          class="el-menu"
          unique-opened
          router>
          <el-submenu index="/home/plan">
            <template slot="title">
              <i class="el-icon-tickets"></i>
              <span>软件计划过程</span>
            </template>
            <el-menu-item index="/home/plan/developmentplan">软件开发计划</el-menu-item>
            <el-menu-item index="/home/plan/verificationplan">软件验证计划</el-menu-item>
            <el-menu-item index="/home/plan/certificationplan">软件合格审定计划</el-menu-item>
            <el-menu-item index="/home/plan/QAplan">软件质量保证计划</el-menu-item>
            <el-menu-item index="/home/plan/SCMplan">软件配置管理计划</el-menu-item>
            <el-menu-item index="/home/plan/demandStandard">软件需求标准</el-menu-item>
            <el-menu-item index="/home/plan/designStandard">软件设计标准</el-menu-item>
            <el-menu-item index="/home/plan/codingStandard">软件编码标准</el-menu-item>
          </el-submenu>
          <el-submenu
            index="/home/develop"
            :disabled='isPlanCompleted'>
            <template slot="title">
              <i class="el-icon-document"></i>
              <span>软件开发过程</span>
            </template>
            <el-menu-item index="/home/develop/systemRequirements">系统需求</el-menu-item>
            <el-menu-item index="/home/develop/highLevelRequirements">高层需求</el-menu-item>
            <el-menu-item index="/home/develop/lowLevelRequirements">低层需求</el-menu-item>
            <el-menu-item index="/home/develop/softwareStructure">软件架构</el-menu-item>
            <el-menu-item index="/home/develop/softwareCoding">软件编码</el-menu-item>
            <el-menu-item index="/home/plan/problemReport">问题报告</el-menu-item>
          </el-submenu>
          <el-submenu
            index="3"
            :disabled='isDevCompleted'>
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>软件综合过程</span>
            </template>
            <el-menu-item index="3-1">软件集成</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 内容区域 -->
      <el-main class="main-content">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'HomePage',
  components: {
  },
  data () {
    return {
      asideBar: [],
      activeIndex: '',
      isPlanCompleted: false,
      isDevCompleted: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.outer {
  height: 100%;
}
.logo{
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  display: inline-block;
  /* float: left; */
  /* position: relative; */
  top: 15px;
  left: 20px;
}
.header {
  background-color: #1c2532;
}
.siderBar {
  background-color: #2f4050;
  overflow-x: hidden;
}
.main-content {
  background-color: #e6e9f2;
  padding: 18px;
}
.el-menu {
  width: 100%;
}
.topMenu {
  display: flex;
  justify-content: flex-end;
  height: 50px;
}
.menuItem {
  height: 50px;
}
.menuItem .submenu__title {
  height: 50px;
}
</style>
