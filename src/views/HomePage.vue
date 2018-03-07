/*
 * @Author: qinyufei 
 * @Date: 2018-03-02 16:33:03 
 * @Last Modified by: qinyufei
 * @Last Modified time: 2018-03-06 17:41:01
 */

<template>
  <el-container class="outer">
    <!-- 顶部导航 -->
    <el-header height="50px" class="header"></el-header>
    <el-container>
      <!-- 侧边栏导航 -->
      <el-aside width="210px" class="siderBar">
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
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span>软件开发过程</span>
            </template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
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
      asideBar: []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.outer {
  height: 100%;
}
.header {
  background-color: #1c2532;
}
.siderBar {
  background-color: #2f4050;
}
.main-content {
  background-color: #e6e9f2;
  padding: 18px;
}
.el-menu {
  width: 100%;
}
</style>
