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
            width="500px;"
            label="检查项">
          </el-table-column>
          <el-table-column
            prop="pass"
            label="通过">
            <template slot-scope="scope">
              <el-radio v-model="radio" label="1">通过</el-radio>
            </template>
          </el-table-column>
          <el-table-column
            prop="refused"
            label="不通过">
            <template slot-scope="scope">
              <el-radio v-model="radio" label="2">不通过</el-radio>
            </template>
          </el-table-column>
          <el-table-column
            prop="notApplicable"
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
                  @click="handleEdit(scope.$index, scope.row)">意见</el-button>
              </template>
          </el-table-column>
        </el-table>
        <div class="submit__Button">
          <el-button
            type="primary"
            round
            style="width:200px;font-size:16px;"
            @click="submit">提  交</el-button>
        </div>
      </el-card>
    </el-main>
  </el-container>
</template>
<script>
export default {
  name: 'CheckItem',
  data () {
    return {
      form: {
        aditor: [],
        endDate: '',
        desc: ''
      },
      radio: '',
      tableData: [
        {
          id: '1',
          name: '数据需求描述是否清晰、准确、一致、无二义性?(独立性要求)',
          pass: '',
          refused: '',
          notApplicable: ''
        },
        {
          id: '2',
          name: '数据是否及时、准确、完整?',
          pass: '',
          refused: '',
          notApplicable: ''
        },
        {
          id: '3',
          name: '数据是否可追踪到系统需求？',
          pass: '',
          refused: '',
          notApplicable: ''
        },
        {
          id: '4',
          name: '高层需求符合系统需求（独立性要求）',
          pass: '',
          refused: '',
          notApplicable: ''
        },
        {
          id: '5',
          name: '高层需求是否与目标计算机相兼容？',
          pass: '',
          refused: '',
          notApplicable: ''
        },
        {
          id: '6',
          name: '高层需求可验证',
          pass: '',
          refused: '',
          notApplicable: ''
        },
        {
          id: '7',
          name: '高层需求符合标准',
          pass: '',
          refused: '',
          notApplicable: ''
        },
        {
          id: '8',
          name: '算法是否准确？',
          pass: '',
          refused: '',
          notApplicable: ''
        }
      ]
    }
  },
  methods: {
    handleEdit () {},
    handleCheck () {
      this.dialogFormVisible = true
    },
    submit () {}
  }
}
</script>
<style scoped>
.data {
  border-bottom: 2px solid black;
  margin-bottom: 40px;
}
.data p {
  margin-top: 10px;
  margin-bottom: 10px;
}
.submit__Button {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
</style>