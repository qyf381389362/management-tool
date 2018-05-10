/*
 * @Author: 秦雨霏 
 * @Date: 2018-05-10 13:19:32 
 * @Last Modified by: 秦雨霏
 * @Last Modified time: 2018-05-10 13:20:18
 */

<!--我的评审页面-->
<template>
  <el-container>
    <el-main class="wrapper">
      <el-breadcrumb class="breadcrumb">
        <el-breadcrumb-item>我的核查</el-breadcrumb-item>
      </el-breadcrumb>
      <el-card class="content">
        <el-form :model="form">
          <el-row :gutter="20">
            <el-col :span="3">
              <el-form-item>
                <el-select placeholder="请选择状态">
                  <el-option label="待核查" value="1"></el-option>
                  <el-option label="已完成" value="2"></el-option>
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
            prop="tracking"
            label="追踪">
          </el-table-column>
          <el-table-column
            label="操作"
            min-width="200"
            align="center"
          >
            <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)">评审</el-button>
              </template>
          </el-table-column>
        </el-table>
      </el-card>
    </el-main>
    <el-dialog
      title="审核信息"
      :visible.sync="dialogFormVisible"
      class="dialog"
    >
      <el-form :model="form">
        <el-row>
          <el-col :span="16">
            <el-form-item label="指定审核人" :label-width="formLabelWidth">
              <el-input v-model="form.aditor" auto-complete="off"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="18">
            <el-form-item label="计划完成时间" :label-width="formLabelWidth">
              <el-date-picker
                v-model="form.endDate"
                type="date"
                placeholder="选择日期"></el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="18">
            <el-form-item label="描述" :label-width="formLabelWidth">
              <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="confirm">发送</el-button>
        <el-button @click="dialogFormVisible = false">取 消</el-button>
      </div>
    </el-dialog>
  </el-container>
</template>
<script>
export default {
  name: 'MyCheckList',
  data () {
    return {
      form: {
        aditor: [],
        endDate: '',
        desc: ''
      },
      dialogFormVisible: false,
      formLabelWidth: '120px',
      tableData: [
        {
          id: 'HLD-1',
          name: '高层需求1',
          version: '1.0.0',
          period: '',
          state: '待核查',
          creater: '秦雨霏',
          createTime: '2017-10-2',
          editor: '许文静',
          editTime: '2017-10-3'
        },
        {
          id: 'LLD-2',
          name: '低层需求2',
          version: '1.0.0',
          period: '',
          state: '已完成',
          creater: '秦雨霏',
          createTime: '2018-5-2',
          editor: '许文静',
          editTime: '2018-5-10'
        }
      ]
    }
  },
  methods: {
    handleEdit () {},
    handleCheck () {
      this.dialogFormVisible = true
    },
    handleDelete () {}
  }
}
</script>
<style scoped>
  
</style>