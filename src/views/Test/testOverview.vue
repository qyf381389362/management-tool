/*
 * @Author: 秦雨霏
 * @Date: 2018-07-09 23:44:42
 * @Last Modified by: 秦雨霏
 * @Last Modified time: 2018-07-09 23:45:17
 * @Description: 测试总览页面
 */

<template>
  <el-container>
    <el-main class="wrapper">
      <el-breadcrumb class="breadcrumb">
        <el-breadcrumb-item :to="{path:'/home/test'}">测试</el-breadcrumb-item>
        <el-breadcrumb-item>测试总览</el-breadcrumb-item>
      </el-breadcrumb>
      <el-card class="content">
        <el-form :model="form">
          <el-row :gutter="20">
            <el-col :span="3">
              <el-form-item>
              <el-button
                type="primary" 
                @click="newCase"
                round>
                新建用例
              </el-button>
              </el-form-item>
            </el-col>
            <el-col :span="3" :offset="13">
              <el-form-item>
                <el-select placeholder="请选择版本">
                  <el-option label="1.0.0" value="1"></el-option>
                  <el-option label="1.0.1" value="2"></el-option>
                  <el-option label="1.0.2" value="3"></el-option>
                  <el-option label="1.0.3" value="4"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="5">
              <el-form-item>
                <el-input 
                  placeholder="请输入关键字"
                  prefix-icon="el-icon-search">
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <el-table 
          :data="tableData"
          stripe
          style="width:100%">
          <el-table-column
            prop="type"
            label="类型">
          </el-table-column>
          <el-table-column
            prop="id"
            label="用例编号">
          </el-table-column>
          <el-table-column
            prop="name"
            label="用例名称">
          </el-table-column>
          <el-table-column
            prop="handler"
            label="处理人">
          </el-table-column>
          <el-table-column
            prop="level"
            label="用例级别">
          </el-table-column>
          <el-table-column
            prop="iteration"
            label="迭代">
          </el-table-column>
          <el-table-column
            prop="status"
            label="状态">
          </el-table-column>
          <el-table-column
            prop="result"
            label="执行结果">
          </el-table-column>
          <el-table-column
            prop="associateRequirement"
            label="关联需求">
          </el-table-column>
          <el-table-column
            prop="fault"
            label="缺陷">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)">查看</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              </template>
          </el-table-column>
        </el-table>
      </el-card>
    </el-main>
  </el-container>
</template>
<script>
export default {
  name: 'TestCaseManagement',
  data () {
    return {
      form: {},
      tableData: []
    }
  },
  methods: {
    newCase: function () {
      // this.$router.go('/plan/developmentplan/submitFile')
      // this.$router.push({path: '#/home/plan/developmentplan/submitFile'})
      this.$router.push({ path: 'developmentplan/submitFile' })
    },
    handleEdit () {},
    handleDelete () {}
  }
}
</script>
<style scoped>
  
</style>