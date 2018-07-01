/*
 * @Author: 秦雨霏 
 * @Date: 2018-05-09 20:08:13 
 * @Last Modified by: 秦雨霏
 * @Last Modified time: 2018-06-29 20:59:15
 */
<!--项目列表和新建项目页面-->
<template>
  <el-container class="outer">
    <!-- 顶部导航 -->
    <el-header
      height="50px"
      class="header"
    >
    </el-header>
    <el-container>
      <!-- 侧边栏导航 -->
      <el-aside width="30%" class="siderBar">
        <div class="newProject">
          <div>
            <font-awesome-icon class="add_icon" :icon="['fas', 'plus']" @click="createProject"/>
          </div>
          <p class="add_text" @click="createProject">点击此处新建一个项目</p>
        </div>
      </el-aside>
      <!-- 内容区域 -->
      <el-main class="main-content">
        <h4>已有项目</h4>
        <div class="projectsList">
          <el-table
            stripe
            :data="tableData"
            style="width: 100%"
            :header-cell-style="toCenter"
            :cell-style="toCenter">
            <el-table-column label="项目名称">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.name }}</span>
              </template>
            </el-table-column>
            <el-table-column label="创建日期">
              <template slot-scope="scope">
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column label="负责人">
              <template slot-scope="scope">
                <font-awesome-icon :icon="['fas', 'user-tie']"/>
                <span style="margin-left: 10px">{{ scope.row.charge }}</span>
              </template>
            </el-table-column>
            <el-table-column label="进度">
              <template slot-scope="scope">
                <font-awesome-icon :icon="['fas', 'calendar-alt']"/>
                <span style="margin-left: 10px">{{ scope.row.schedule }}</span>
              </template>
            </el-table-column>
            <el-table-column label="成员数">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.members }}</span>
              </template>
            </el-table-column>
            <el-table-column label="工作项数">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.workItems }}</span>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)">查看</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-main>
    </el-container>
    <el-dialog
      title="新建项目"
      :visible.sync="dialogFormVisible"
      class="dialog"
    >
      <el-form :model="form" :rules="rules" ref="form">
        <el-row>
          <el-col :span="16">
            <el-form-item label="项目名称" :label-width="formLabelWidth" prop="name">
              <el-input v-model="form.name" auto-complete="off"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="研制标准" :label-width="formLabelWidth" prop="standard">
          <el-select v-model="form.standard" placeholder="请选择研制标准">
            <el-option label="DO-178B/C" value="DO-178B/C"></el-option>
            <!-- <el-option label="GJB2786A/438B/5000A" value="GJB2786A/438B/5000A"></el-option> -->
          </el-select>
        </el-form-item>
        <el-form-item label="软件等级" :label-width="formLabelWidth" prop="level">
          <el-select v-model="form.level" placeholder="请选择软件等级">
            <el-option label="A级" value="A"></el-option>
            <el-option label="B级" value="B"></el-option>
            <el-option label="C级" value="C"></el-option>
            <el-option label="D级" value="D"></el-option>
          </el-select>
        </el-form-item>
        <el-row>
          <el-col :span="18">
            <el-form-item label="项目负责人" :label-width="formLabelWidth" prop="charge">
              <el-input v-model="form.charge" auto-complete="off"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="18">
            <el-form-item label="计划开始时间" :label-width="formLabelWidth" prop="startDate">
              <el-date-picker
                v-model="form.startDate"
                type="date"
                placeholder="选择计划开始时间"></el-date-picker>
            </el-form-item>
            <el-form-item label="计划完成时间" :label-width="formLabelWidth" prop="endDate">
              <el-date-picker
                v-model="form.endDate"
                type="date"
                placeholder="选择计划完成时间"></el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="18">
            <el-form-item label="项目描述" :label-width="formLabelWidth">
              <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="confirm('form')">新建并启动</el-button>
        <el-button @click="dialogFormVisible = false">取 消</el-button>
      </div>
    </el-dialog>
  </el-container>
</template>

<script>
export default {
  name: 'ProjectsList',
  components: {
  },
  data () {
    return {
      dialogFormVisible: false,
      form: {
        name: '',
        standard: '',
        level: '',
        charge: '',
        startDate: '',
        endDate: '',
        description: ''
      },
      formLabelWidth: '120px',
      rules: {
        name: [
          { required: true, message: '请输入项目名称', trigger: 'blur' },
          { max: 15, message: '长度不超过 15 个字符', trigger: 'blur' }
        ],
        standard: [
          { required: true, message: '请选择研制标准', trigger: 'change' }
        ],
        level: [
          { required: true, message: '请选择软件等级', trigger: 'change' }
        ],
        charge: [
          { required: true, message: '请选择项目负责人', trigger: 'blur' }
        ],
        startDate: [
          { type: 'date', required: true, message: '请选择计划开始时间', trigger: 'change' }
        ],
        endDate: [
          { type: 'date', required: true, message: '请选择计划完成时间', trigger: 'change' }
        ]
      },
      tableData: [{
        date: '2017-05-02',
        name: '项目1',
        charge: '秦雨霏',
        schedule: '软件计划阶段'
      }, {
        date: '2018-05-04',
        name: '项目2',
        charge: '秦雨霏',
        schedule: '软件需求阶段'
      }, {
        date: '2017-05-01',
        name: '项目3',
        charge: '许文静',
        schedule: '软件设计阶段'
      }, {
        date: '2016-05-03',
        name: '项目4',
        charge: '死胖子',
        schedule: '完成'
      }]
    }
  },
  methods: {
    createProject () {
      this.dialogFormVisible = true
    },
    confirm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.dialogFormVisible = false
          this.$router.push({path: '/home/plan'})
        } else {
          return false
        }
      })
    },
    handleEdit () {
    },
    handleDelete () {
    },
    // 设置表头操作列的样式
    toCenter ({row, column, rowIndex, columnIndex}) {
      if (columnIndex === 6) {
        return 'text-align:center'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.outer {
  height: 100%;
}
.logo{
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  display: inline-block;
  /* float: left; */
  /* position: relative; */
  top: 15px;
  left: 20px;
}
.header {
  background-color: #1c2532;
}
.siderBar {
  /* background-color: #2f4050; */
  border-right: 2px solid #2f4050;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.main-content {
  background-color: #e6e9f2;
  padding: 18px;
}
.newProject {
  width: 400px;
  height: 400px;
  border: 1px dotted #409EFF;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.add_icon {
  width: 300px;
  margin-top: 100px;
  color: #409EFF;
  font-size: 70px;
  display: block;
}
.add_text {
  margin-top: -180px;
}
.projectsList {
  margin-top: 20px;
}
.dialog {
  border-radius: 50px;
}
</style>
