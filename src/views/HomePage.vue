/*
 * @Author: 秦雨霏 
 * @Date: 2018-03-02 16:33:03 
 * @Last Modified by: 秦雨霏
 * @Last Modified time: 2018-05-09 20:02:36
 */

<template>
  <el-container class="outer">
    <!-- 顶部导航 -->
    <el-header height="50px" class="header">
      <!-- <div class="logo"></div> -->
      <el-menu
        :default-active="activeIndex"
        mode="horizontal"
        class="topMenu"
        background-color="#1c2532"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item class="menuItem" index="1">个人信息</el-menu-item>
        <el-menu-item class="menuItem" index="2">项目列表</el-menu-item>
        <el-menu-item class="menuItem" index="3">退出</el-menu-item>
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
            <el-menu-item index="/home/plan/createBaseLine">创建基线</el-menu-item>
            <el-menu-item index="/home/plan/checkBaseLine">审核基线</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span>软件开发过程</span>
            </template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="/home/plan/problemReport">问题报告</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>软件综合过程</span>
            </template>
            <el-menu-item index="3-1">选项1</el-menu-item>
            <el-menu-item index="3-2">选项2</el-menu-item>
            <el-menu-item index="3-3">选项3</el-menu-item>
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
      activeIndex: '1'
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
