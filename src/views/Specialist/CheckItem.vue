/*
 * @Author: 秦雨霏 
 * @Date: 2018-05-10 13:22:57 
 * @Last Modified by: 秦雨霏
 * @Last Modified time: 2018-05-10 13:43:09
 */
<template>
  <el-container>
    <el-main class="wrapper">
      <el-breadcrumb class="breadcrumb">
        <el-breadcrumb-item>我的核查</el-breadcrumb-item>
      </el-breadcrumb>
      <el-card class="content">
        <div class="data">
          <p>标识:</p>
          <p>名称:</p>
          <p>版本:</p>
          <p>创建时间:</p>
          <p>创建人:</p>
          <p>修改人:</p>
          <p>修改时间:</p>
          <p>追踪项:</p>
          <p>备注:</p>
          <p>附件:</p>
        </div>
        <el-table 
          :data="tableData"
          stripe
          style="width:100%">
          <el-table-column
            prop="id"
            label="">
          </el-table-column>
          <el-table-column
            prop="name"
            label="检查项">
          </el-table-column>
          <el-table-column
            prop="version"
            label="通过">
            <template slot-scope="scope">
              <el-radio v-model="radio" label="1">通过</el-radio>
            </template>
          </el-table-column>
          <el-table-column
            prop="period"
            label="不通过">
            <template slot-scope="scope">
              <el-radio v-model="radio" label="2">不通过</el-radio>
            </template>
          </el-table-column>
          <el-table-column
            prop="state"
            label="不适用">
            <template slot-scope="scope">
              <el-radio v-model="radio" label="3">不适用</el-radio>
            </template>
          </el-table-column>
          <el-table-column
            label="核查意见"
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
      radio: '',
      dialogFormVisible: false,
      formLabelWidth: '120px',
      tableData: [
        {
          id: '1',
          name: '对该项检查是否通过？',
          version: '',
          period: '',
          state: ''
        },
        {
          id: '2',
          name: '数据需求描述是否清晰、准确、无二义性',
          version: '',
          period: '',
          state: ''
        },
        {
          id: '3',
          name: '数据是否及时、准确、完整',
          version: '',
          period: '',
          state: ''
        },
        {
          id: '4',
          name: '数据是否可追踪',
          version: '',
          period: '',
          state: ''
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
.data {
  border-bottom: 2px solid black;
  margin-bottom: 40px;
}
</style>