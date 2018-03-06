/*
 * @Author: qinyufei 
 * @Date: 2018-03-02 16:32:50 
 * @Last Modified by: qinyufei
 * @Last Modified time: 2018-03-06 17:28:17
 */
<!--软件计划过程之软件开发计划页面-->
<template>
  <el-container>
    <el-main class="wrapper">
      <el-breadcrumb class="breadcrumb">
        <el-breadcrumb-item :to="{path:'/home/plan'}">软件计划过程</el-breadcrumb-item>
        <el-breadcrumb-item>软件开发计划</el-breadcrumb-item>
      </el-breadcrumb>
      <el-card class="content">
        <div>马老师威武啊</div>
      </el-card>
    </el-main>
  </el-container>
</template>
<script>
export default {
  name: 'DevelopmentPlan',
  data () {
    return {
    }
  }
}
</script>
<style scoped>
  
</style>
