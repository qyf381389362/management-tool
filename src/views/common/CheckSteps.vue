/*
 * @Author: 秦雨霏 
 * @Date: 2018-05-24 13:55:35 
 * @Last Modified by: 秦雨霏
 * @Last Modified time: 2018-12-10 21:46:38
 */
<template>
  <el-container>
    <el-main class="wrapper">
      <el-breadcrumb class="breadcrumb">
        <el-breadcrumb-item>查看进度</el-breadcrumb-item>
      </el-breadcrumb>
      <el-card class="content">
        <div class="stepsContainer">
          <el-steps
            :active="1"
            finish-status="success"
            align-center>
            <el-step title="软件计划过程" description="依据系统需求和软件等级，编制软件计划，并对软件计划进行配置管理、质量保证和合格审定等"></el-step>
            <el-step title="软件开发过程" description=""></el-step>
            <el-step title="软件综合过程" description=""></el-step>
            <el-step title="软件测试" description="对开发的软件进行综合测试"></el-step>
          </el-steps>
        </div>
      </el-card>
    </el-main>
  </el-container>
</template>
<script>
export default {
  name: 'CheckSteps',
  components: {},
  data () {
    return {}
  }
}
</script>
<style scoped>
.stepsContainer {
  margin-top: 40px;
}
</style>
