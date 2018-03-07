/*
 * @Author: qinyufei 
 * @Date: 2018-03-07 11:37:53 
 * @Last Modified by: qinyufei
 * @Last Modified time: 2018-03-07 12:03:33
 */
<!--创建基线页面-->
<template>
  <el-container>
    <el-main class="wrapper">
      <el-breadcrumb class="breadcrumb">
        <el-breadcrumb-item :to="{path:'/home/plan'}">软件计划过程</el-breadcrumb-item>
        <el-breadcrumb-item>创建基线</el-breadcrumb-item>
      </el-breadcrumb>
      <el-card class="content">
        <el-form :model="form">
          <el-form-item label="基线名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="状态" placeholder="请选择状态">
            <el-select v-model="form.state">
              <el-option label="待审核" value="待审核"></el-option>
              <el-option label="审核中" value="审核中"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="基线标识">
            <el-input v-model="form.identification"></el-input>
          </el-form-item>
          <el-fomr-ietm>
            <el-input type=""></el-input>
          </el-fomr-ietm>
        </el-form>
      </el-card>
    </el-main>
  </el-container>
</template>
<script>
export default {
  name: 'CreateBaseLine',
  data () {
    return {
      form: {
        name: '',
        state: '',
        identification: '',
        instructions: '',
        reviewer: '',
        creator: '',
        createTime: '',
        content: '',
        remarks: ''
      }
    }
  }
}
</script>
<style scoped>

</style>
