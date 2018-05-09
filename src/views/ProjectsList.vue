/*
 * @Author: 秦雨霏 
 * @Date: 2018-05-09 20:08:13 
 * @Last Modified by: 秦雨霏
 * @Last Modified time: 2018-05-10 00:30:27
 */
<!--项目列表和新建项目页面-->
<template>
  <el-container class="outer">
    <!-- 顶部导航 -->
    <el-header
      height="50px"
      class="header"
    >
    </el-header>
    <el-container>
      <!-- 侧边栏导航 -->
      <el-aside width="30%" class="siderBar">
        <div class="newProject">
          <div>
            <font-awesome-icon class="add_icon" :icon="['fas', 'plus']"/>
          </div>
          <p class="add_text">点击此处新建一个项目</p>
        </div>
      </el-aside>
      <!-- 内容区域 -->
      <el-main class="main-content">
        <div class="projectsList">
          
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'ProjectsList',
  components: {
  },
  data () {
    return {
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
  /* background-color: #2f4050; */
  border-right: 2px solid #2f4050;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.main-content {
  background-color: #e6e9f2;
  padding: 18px;
}
.newProject {
  width: 400px;
  height: 400px;
  border: 1px dotted #409EFF;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.add_icon {
  width: 300px;
  margin-top: 100px;
  color: #409EFF;
  font-size: 70px;
  display: block;
}
.add_text {
  margin-top: -180px;
}
</style>
