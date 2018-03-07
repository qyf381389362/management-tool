/*
 * @Author: qinyufei 
 * @Date: 2018-03-02 16:32:50 
 * @Last Modified by: qinyufei
 * @Last Modified time: 2018-03-06 20:58:07
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
        <el-form :model="form">
          <el-form-item>
            <el-button type="primary" round>上传文件</el-button>
          </el-form-item>
          <el-form-item>
            <el-input 
              placeholder="请输入内容"
              prefix-icon="el-icon-search">
            </el-input>
          </el-form-item>
        </el-form>
        <el-table 
          :data="tableData"
          stripe
          style="width:100%">
        </el-table>
      </el-card>
    </el-main>
  </el-container>
</template>
<script>
export default {
  name: 'DevelopmentPlan',
  data () {
    return {
      tableData: []
    }
  }
}
</script>
<style scoped>
  
</style>
