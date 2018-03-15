/*
 * @Author: 秦雨霏 
 * @Date: 2018-03-15 14:44:05 
 * @Last Modified by: 秦雨霏
 * @Last Modified time: 2018-03-15 14:55:09
 */
<!--问题报告页面-->
<template>
  <el-container>
    <el-main class="wrapper">
      <el-breadcrumb class="breadcrumb">
        <el-breadcrumb-item>问题报告</el-breadcrumb-item>
      </el-breadcrumb>
      <el-card class="content">
        <el-form id="baselineForm" :model="form" label-width="100px" class="formMargin">
          <el-row>
            <el-col :span="8">
              <el-form-item label="问题标识">
                <el-input v-model="form.identification"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="问题标题">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="项目名称">
                <el-input v-model="form.projectName"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="问题来源">
                <el-input v-model="form.problemResource"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="问题描述">
                <el-input type="textarea" v-model="form.instructions"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="问题状态" placeholder="请选择状态">
                <el-select v-model="form.state">
                  <el-option label="待审核" value="待审核"></el-option>
                  <el-option label="审核中" value="审核中"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="3">
              <el-form-item label="问题创建人">
                <el-input v-model="form.creator"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="3" :offset="1">
              <el-form-item label="问题创建时间">
                <el-date-picker
                  v-model="form.createTime"
                  type="date"
                  placeholder="请选择时间">
                </el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="问题严重程度" placeholder="请选择状态">
                <el-select v-model="form.state">
                  <el-option label="严重" value="严重"></el-option>
                  <el-option label="一般" value="一般"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="优先级" placeholder="请选择优先级">
                <el-select v-model="form.youxian">
                  <el-option label="一级" value="一级"></el-option>
                  <el-option label="二级" value="二级"></el-option>
                  <el-option label="三级" value="三级"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="发布内容">
                <el-input type="textarea" v-model="form.publication"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="3">
              <el-form-item label="审核人">
                <el-input v-model="form.reviewer"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="3" :offset="1">
              <el-form-item label="审核时间">
                <el-date-picker
                  v-model="form.reviewTime"
                  type="date"
                  placeholder="请选择时间"></el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
           <el-row>
            <el-col :span="8">
              <el-form-item label="审核意见">
                <el-input type="textarea" v-model="form.checkComments"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="备注">
                <el-input type="textarea" v-model="form.remarks"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item class="buttonGroup">
            <el-button type="primary" @click="onSubmit">创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-main>
  </el-container>
</template>
<script>
export default {
  name: 'ProblemReport',
  data () {
    return {
      form: {
        name: '',
        state: '',
        identification: '',
        instructions: '',
        creator: '',
        createTime: '',
        reviewer: '',
        publication: '',
        remarks: ''
      }
    }
  },
  methods: {
    onSubmit: function () {
      console.log('submit')
    }
  }
}
</script>
<style scoped>
  
</style>