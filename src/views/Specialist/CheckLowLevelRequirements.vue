/*
 * @Author: 秦雨霏 
 * @Date: 2018-06-03 23:35:27 
 * @Last Modified by: 秦雨霏
 * @Last Modified time: 2018-06-04 21:35:38
 */
<!--验证软件计划过程页面-->
<template>
  <el-container>
    <el-main class="wrapper">
      <el-breadcrumb class="breadcrumb">
        <el-breadcrumb-item>软件低层需求即软件架构核查</el-breadcrumb-item>
      </el-breadcrumb>
      <el-card class="content">
        <div class="data">
          <p>软件开发计划(SDP):&nbsp;&nbsp;&nbsp;&nbsp;<router-link to='/home/plan/developmentplan'>软件开发计划</router-link></p>
          <p>软件验证计划(SVP):&nbsp;&nbsp;&nbsp;&nbsp;<router-link to='/home/plan/developmentplan'>软件验证计划</router-link></p>
          <p>软件审定计划(PSAC):&nbsp;&nbsp;&nbsp;&nbsp;<router-link to='/home/plan/developmentplan'>软件审定计划</router-link></p>
          <p>软件配置管理计划(SCMP):&nbsp;&nbsp;&nbsp;&nbsp;<router-link to='/home/plan/developmentplan'>软件配置管理计划</router-link></p>
          <p>软件质量保证计划(SQAP):&nbsp;&nbsp;&nbsp;&nbsp;<router-link to='/home/plan/developmentplan'>软件质量保证计划</router-link></p>
          <p>软件需求标准:&nbsp;&nbsp;&nbsp;&nbsp;<router-link to='/home/plan/developmentplan'>软件需求标准</router-link></p>
          <p>软件设计标准:&nbsp;&nbsp;&nbsp;&nbsp;<router-link to='/home/plan/developmentplan'>软件设计标准</router-link></p>
          <p>软件编码标准:&nbsp;&nbsp;&nbsp;&nbsp;<router-link to='/home/plan/developmentplan'>软件编码标准</router-link></p>
        </div>
        <el-table
          :data="tableData"
          stripe
          style="width:100%"
          class="table">
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
  name: 'CheckLowLevelRequirements',
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
          name: '低层需求符合高级需求(独立性)',
          pass: '',
          refused: '',
          notApplicable: ''
        },
        {
          id: '2',
          name: '低层需求准确且一致(独立性)',
          pass: '',
          refused: '',
          notApplicable: ''
        },
        {
          id: '3',
          name: '低层需求与目标计算机相兼容',
          pass: '',
          refused: '',
          notApplicable: ''
        },
        {
          id: '4',
          name: '低层需求可验证',
          pass: '',
          refused: '',
          notApplicable: ''
        },
        {
          id: '5',
          name: '低层需求符合标准',
          pass: '',
          refused: '',
          notApplicable: ''
        },
        {
          id: '6',
          name: '低层需求可追踪到高层需求',
          pass: '',
          refused: '',
          notApplicable: ''
        },
        {
          id: '7',
          name: '算法准确(独立性)',
          pass: '',
          refused: '',
          notApplicable: ''
        },
        {
          id: '8',
          name: '软件架构与高层需求相兼容(独立性)',
          pass: '',
          refused: '',
          notApplicable: ''
        },
        {
          id: '9',
          name: '软件架构的一致性(独立性)',
          pass: '',
          refused: '',
          notApplicable: ''
        },
        {
          id: '10',
          name: '软件架构与目标计算机相兼容',
          pass: '',
          refused: '',
          notApplicable: ''
        },
        {
          id: '11',
          name: '软件架构可验证',
          pass: '',
          refused: '',
          notApplicable: ''
        },
        {
          id: '12',
          name: '软件架构符合标准',
          pass: '',
          refused: '',
          notApplicable: ''
        },
        {
          id: '13',
          name: '确定软件分区的完整性(独立性)',
          pass: '',
          refused: '',
          notApplicable: ''
        },
        {
          id: '14',
          name: '形式化分析用例和规程正确(独立性)',
          pass: '',
          refused: '',
          notApplicable: ''
        },
        {
          id: '15',
          name: '形式化分析结果正确，并且解释差异性(独立性)',
          pass: '',
          refused: '',
          notApplicable: ''
        },
        {
          id: '16',
          name: '需求形式化正确(独立性)',
          pass: '',
          refused: '',
          notApplicable: ''
        },
        {
          id: '17',
          name: '形式化方法被正确定义和证明，并且适合应用(独立性)',
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
.table {
  font-size: 18px;
}
</style>