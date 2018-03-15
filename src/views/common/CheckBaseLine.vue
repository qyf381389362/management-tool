/*
 * @Author: 秦雨霏 
 * @Date: 2018-03-15 14:06:00 
 * @Last Modified by: 秦雨霏
 * @Last Modified time: 2018-03-15 14:39:42
 */

<!--审核基线页面-->
<template>
  <el-container>
    <el-main class="wrapper">
      <el-breadcrumb class="breadcrumb">
        <el-breadcrumb-item :to="{path:'/home/plan'}">软件计划过程</el-breadcrumb-item>
        <el-breadcrumb-item>审核基线</el-breadcrumb-item>
      </el-breadcrumb>
      <el-card class="content">
        <el-form id="baselineForm" :model="form" label-width="100px" class="formMargin">
          <el-row>
            <el-col :span="8">
              <el-form-item label="基线名称">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="基线标识">
                <el-input v-model="form.identification"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="基线说明">
                <el-input type="textarea" v-model="form.instructions"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="状态" placeholder="请选择状态">
                <el-select v-model="form.state">
                  <el-option label="待审核" value="待审核"></el-option>
                  <el-option label="审核中" value="审核中"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="创建人">
                <el-input v-model="form.creator"></el-input>
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
            <el-col :span="8">
              <el-form-item label="基线审核标识">
                <el-input v-model="form.checkIdentification"></el-input>
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
            <el-col :span="3">
              <el-form-item label="审核人">
                <el-input v-model="form.reviewer"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="3" :offset="2">
              <el-form-item label="审核时间">
                <el-input v-model="form.reviewTime"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="基线发布时间">
                <el-date-picker
                  v-model="form.checkTime"
                  type="date"
                  placeholder="选择日期"></el-date-picker>
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
  name: 'CheckBaseLine',
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