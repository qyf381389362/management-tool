/*
 * @Author: 秦雨霏 
 * @Date: 2018-05-10 07:15:42 
 * @Last Modified by: 秦雨霏
 * @Last Modified time: 2018-05-10 07:37:52
 */

<template>
  <el-container>
    <el-main class="wrapper">
      <el-breadcrumb class="breadcrumb">
        <el-breadcrumb-item>基线列表</el-breadcrumb-item>
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
                创建基线
              </el-button>
              </el-form-item>
            </el-col>
            <el-col :span="3" :offset="13">
              <el-form-item>
                <el-select placeholder="请选择状态">
                  <el-option label="待审核" value="1"></el-option>
                  <el-option label="审核通过" value="2"></el-option>
                  <el-option label="审核拒绝" value="3"></el-option>
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
            label="审核人">
          </el-table-column>
          <el-table-column
            prop="editTime"
            label="审核时间">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)">审核</el-button>
              </template>
          </el-table-column>
        </el-table>
      </el-card>
    </el-main>
  </el-container>
</template>
<script>
export default {
  name: 'BaseLineList',
  data () {
    return {
      form: {},
      tableData: [
        {
          id: 'D1',
          name: '软件计划完成基线',
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
      this.$router.push({path: '/home/plan/createBaseLine'})
    },
    handleEdit () {
      this.$router.push({path: '/home/checkBaseLine'})
    }
  }
}
</script>
<style scoped>
  
</style>