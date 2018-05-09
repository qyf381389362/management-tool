/*
 * @Author: 秦雨霏
 * @Date: 2018-03-02 19:15:53 
 * @Last Modified by: qinyufei
 * @Last Modified time: 2018-05-09 14:12:49
 */
<!--软件计划过程之软件验证计划页面-->
<template>
  <el-container>
    <el-main class="wrapper">
      <el-breadcrumb class="breadcrumb">
        <el-breadcrumb-item :to="{path:'/home/plan'}">软件计划过程</el-breadcrumb-item>
        <el-breadcrumb-item>软件验证计划</el-breadcrumb-item>
      </el-breadcrumb>
      <el-card class="content">
        <div>软件验证计划</div>
      </el-card>
    </el-main>
  </el-container>
</template>
<script>
export default {
  name: 'VerificationPlan',
  data () {
    return {
    }
  }
}
</script>
<style scoped>

</style>