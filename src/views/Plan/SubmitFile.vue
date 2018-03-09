/*
 * @Author: qinyufei 
 * @Date: 2018-03-08 17:37:37 
 * @Last Modified by: qinyufei
 * @Last Modified time: 2018-03-08 17:53:53
 */

<!--软件计划过程之上传文件-->
<template>
  <el-container>
    <el-main class="wrapper">
      <el-breadcrumb class="breadcrumb">
        <el-breadcrumb-item :to="{path:'/home/plan'}">软件计划过程</el-breadcrumb-item>
        <el-breadcrumb-item :to="{path:'/home/plan/developmentplan'}">软件开发计划</el-breadcrumb-item>
        <el-breadcrumb-item>上传文件</el-breadcrumb-item>
      </el-breadcrumb>
      <el-card class="content">
        <el-form id="baselineForm" :model="form" label-width="80px" class="formMargin">
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
            <el-col :span="3">
              <el-form-item label="创建人">
                <el-input v-model="form.creator"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="3" :offset="2">
              <el-form-item label="创建时间">
                <el-input v-model="form.creator"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="审核人">
                <el-input v-model="form.reviewer"></el-input>
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
  name: 'SubmitFile',
  data () {
    return {
      form: {},
      tableData: [
        {
          id: 1,
          name: '计划1',
          version: '1.0.4',
          period: '',
          state: '未审核',
          creater: '秦雨霏',
          createTime: '2017-10-2',
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
          createTime: '2017-10-2',
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
          createTime: '2017-10-2',
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
          createTime: '2017-10-2',
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
          createTime: '2017-10-2',
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