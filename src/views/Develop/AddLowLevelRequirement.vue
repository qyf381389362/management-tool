/*
 * @Author: 秦雨霏 
 * @Date: 2018-05-10 10:48:01 
 * @Last Modified by: 秦雨霏
 * @Last Modified time: 2018-05-10 11:10:02
 */

<!--新增低层需求页面-->
<template>
  <el-container>
    <el-main class="wrapper">
      <el-breadcrumb class="breadcrumb">
        <el-breadcrumb-item :to="{path:'/home/plan'}">软件开发过程</el-breadcrumb-item>
        <el-breadcrumb-item :to="{path:'/home/plan/develop/lowLevelRequirements'}">低层需求</el-breadcrumb-item>
        <el-breadcrumb-item>添加低层需求</el-breadcrumb-item>
      </el-breadcrumb>
      <el-card class="content">
        <el-form id="baselineForm" :model="form" label-width="80px" class="formMargin">
          <el-row>
            <el-col :span="10">
              <el-form-item label="标识">
                <el-input v-model="form.id"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="10">
              <el-form-item label="名称">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="10">
              <el-form-item label="当前版本">
                <el-input v-model="form.version"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="10">
              <el-col :span="12">
                <el-form-item label="创建人">
                  <el-input v-model="form.creator"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="10" :offset="1">
                <el-form-item label="创建时间">
                  <el-date-picker
                    v-model="form.creator"
                    type="date"
                    placeholder="选择日期"></el-date-picker>
                  <!-- <el-input v-model="form.creator"></el-input> -->
                </el-form-item>
              </el-col>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="10">
              <el-col :span="12">
                <el-form-item label="编辑人">
                  <el-input v-model="form.editor"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="10" :offset="1">
                <el-form-item label="编辑时间">
                  <el-date-picker
                    v-model="form.editTime"
                    type="date"
                    placeholder="选择日期"></el-date-picker>
                  <!-- <el-input v-model="form.editTime"></el-input> -->
                </el-form-item>
              </el-col>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="数据追踪">
                <el-transfer
                  filterable
                  v-model="dataTracking"
                  :data="data"
                  :titles="['待追踪高层需求', '追踪项']">
                </el-transfer>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="10">
              <el-form-item label="备注">
                <el-input type="textarea" v-model="form.remarks"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="10">
              <el-form-item label="上传附件">
                <el-upload
                  class="upload-demo"
                  drag
                  action=""
                  multiple>
                  <i class="el-icon-upload"></i>
                  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                  <div class="el-upload__tip" slot="tip">只能上传pdf文件，且不超过50M</div>
                </el-upload>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item class="buttonGroup">
            <el-button type="primary" @click="onSubmit">添加</el-button>
            <el-button @click="cancle">取消</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-main>
  </el-container>
</template>
<script>
export default {
  name: 'AddLowLevelRequirement',
  data () {
    const generateData = _ => {
      const data = []
      for (let i = 1; i <= 15; i++) {
        data.push({
          key: i,
          label: `备选项 ${i}`,
          disabled: i % 4 === 0
        })
      }
      return data
    }
    return {
      form: {},
      data: generateData(),
      dataTracking: []
    }
  },
  methods: {
    onSubmit () {
      this.$router.push({name: 'LowLevelRequirements'})
    },
    cancle () {
      this.$router.push({name: 'LowLevelRequirements'})
    }
  }
}
</script>
<style scoped>

</style>