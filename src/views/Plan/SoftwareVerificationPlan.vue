/*
 * @Author: 秦雨霏
 * @Date: 2018-03-02 19:15:53 
 * @Last Modified by: 秦雨霏
 * @Last Modified time: 2018-05-10 04:36:01
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
        <el-form :model="form">
          <el-row :gutter="20">
            <el-col :span="3">
              <el-form-item>
              <el-button
                type="primary" 
                @click="submitFile"
                round>
                上传计划
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
                  placeholder="请输入内容"
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
            prop="id"
            label="标识">
          </el-table-column>
          <el-table-column
            prop="name"
            label="名称">
          </el-table-column>
          <el-table-column
            prop="version"
            label="当前版本">
          </el-table-column>
          <el-table-column
            prop="period"
            label="阶段">
          </el-table-column>
          <el-table-column
            prop="state"
            label="状态">
          </el-table-column>
          <el-table-column
            prop="creater"
            label="创建人">
          </el-table-column>
          <el-table-column
            prop="createTime"
            label="创建时间">
          </el-table-column>
          <el-table-column
            prop="editor"
            label="编辑人">
          </el-table-column>
          <el-table-column
            prop="editTime"
            label="编辑时间">
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
  name: 'VerificationPlan',
  data () {
    return {
      form: {},
      tableData: [
        {
          id: 'SVP-1',
          name: '软件验证计划1',
          version: '1.0.4',
          period: '',
          state: '未审核',
          creater: '秦雨霏',
          createTime: '2017-10-2',
          editor: '许文静',
          editTime: '2017-10-3'
        }
      ]
    }
  },
  methods: {
    submitFile: function () {
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