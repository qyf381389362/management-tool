/*
 * @Author: 秦雨霏 
 * @Date: 2018-03-15 14:44:05 
 * @Last Modified by: 秦雨霏
 * @Last Modified time: 2018-12-14 03:00:03
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
              <el-form-item label="任务ID">
                <el-input v-model="form.taskId"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="所属项目">
                <el-select v-model="form.projectId">
                  <el-option label="项目1" value="待审核"></el-option>
                  <el-option label="项目2" value="审核中"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="任务描述">
                <el-input v-model="form.description"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="任务类型">
                <el-select v-model="form.type">
                  <el-option label="项目管理" value="待审核"></el-option>
                  <el-option label="其他" value="审核中"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="任务状态" placeholder="请选择状态">
                <el-select v-model="form.state">
                  <el-option label="待审核" value="待审核"></el-option>
                  <el-option label="审核中" value="审核中"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="3">
              <el-form-item label="开始时间">
                <el-date-picker
                  v-model="form.startTime"
                  type="date"
                  placeholder="请选择时间">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="3" :offset="2">
              <el-form-item label="完成时间">
                <el-date-picker
                  v-model="form.endTime"
                  type="date"
                  placeholder="请选择时间">
                </el-date-picker>
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
              <el-form-item label="任务执行人员">
                <el-checkbox-group v-model="form.members">
                  <el-checkbox label="秦雨霏"></el-checkbox>
                  <el-checkbox label="李恬霖"></el-checkbox>
                  <el-checkbox label="王宇晟"></el-checkbox>
                  <el-checkbox label="刘克瑞"></el-checkbox>
                </el-checkbox-group>
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
            <el-button type="primary" @click="onSubmit">确定</el-button>
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