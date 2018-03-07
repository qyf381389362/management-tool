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
          <el-row>
            <el-col :span="3">
              <el-form-item>
              <el-button type="primary" round>上传文件</el-button>
              </el-form-item>
            </el-col>
            <el-col :span="3" :offset="18">
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
          
          <el-table-column
            label="操作">
          </el-table-column>
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
      tableData: [
        {
          id: 1,
          name: '计划1',
          version: '1.0.4',
          period: '',
          state: '未审核',
          creater: '秦雨霏',
          createTime : '2017-10-2',
          editor: '许文静',
          editTime: '2017-10-3'
        }, 
        {
          id: 2,
          name: '计划2',
          version: '1.0.3',
          period: '',
          state: '未审核',
          creater: '秦雨霏',
          createTime : '2017-10-2',
          editor: '许文静',
          editTime: '2017-10-3'
        }, 
        {
          id: 3,
          name: '计划3',
          version: '1.0.2',
          period: '',
          state: '未审核',
          creater: '秦雨霏',
          createTime : '2017-10-2',
          editor: '许文静',
          editTime: '2017-10-3'
        }, 
        {
          id: 4,
          name: '计划4',
          version: '1.0.1',
          period: '',
          state: '未审核',
          creater: '秦雨霏',
          createTime : '2017-10-2',
          editor: '许文静',
          editTime: '2017-10-3'
        },
        {
          id: 5,
          name: '计划5',
          version: '1.0.0',
          period: '',
          state: '未审核',
          creater: '秦雨霏',
          createTime : '2017-10-2',
          editor: '许文静',
          editTime: '2017-10-3'
        } 
      ]
    }
  }
}
</script>
<style scoped>
  
</style>
