/*
 * @Author: 秦雨霏 
 * @Date: 2018-05-09 20:08:13 
 * @Last Modified by: 秦雨霏
 * @Last Modified time: 2019-01-01 02:39:09
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
          <p class="add_mainMember" @click="createMainMember">点击此处新增项目管理人员</p>
        </div>
      </el-aside>
      <!-- 内容区域 -->
      <el-main class="main-content">
        <h4>已有项目</h4>
        <div class="projectsList">
          <el-table
            stripe
            :data="tableData"
            style="width: 100%">
            <el-table-column label="项目名称">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.projectName }}</span>
              </template>
            </el-table-column>
            <el-table-column label="开始日期">
              <template slot-scope="scope">
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{ scope.row.startTime }}</span>
              </template>
            </el-table-column>
            <el-table-column label="负责人">
              <template slot-scope="scope">
                <font-awesome-icon :icon="['fas', 'user-tie']"/>
                <span style="margin-left: 10px">{{ scope.row.principal }}</span>
              </template>
            </el-table-column>
            <el-table-column label="进度">
              <template slot-scope="scope">
                <font-awesome-icon :icon="['fas', 'calendar-alt']"/>
                <span style="margin-left: 10px">{{ scope.row.schedule }}</span>
              </template>
            </el-table-column>
            <el-table-column label="项目等级">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.standard }}—{{ scope.row.level }}级</span>
              </template>
            </el-table-column>
            <el-table-column label="工作项数">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.workItems }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="操作"
              min-width="200"
              align="center"
            >
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)"
                >
                  查看
                </el-button>
                <el-button
                  size="mini"
                  type="primary"
                >
                  修改
                </el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)"
                >
                  删除
                </el-button>
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
            <el-form-item label="项目名称" :label-width="formLabelWidth" prop="projectName">
              <el-input v-model="form.projectName" auto-complete="off"></el-input>
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
            <el-form-item label="项目负责人" :label-width="formLabelWidth" prop="principal">
              <el-select v-model="form.principal" filterable placeholder="请选择项目负责人">
                <el-option
                  v-for="item in members"
                  :key="item.memberId"
                  :label="item.name"
                  :value="item.memberId">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="18">
            <el-form-item label="计划开始时间" :label-width="formLabelWidth" prop="startTime">
              <el-date-picker
                v-model="form.startTime"
                type="date"
                placeholder="选择计划开始时间">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="计划完成时间" :label-width="formLabelWidth" prop="endTime">
              <el-date-picker
                v-model="form.endTime"
                type="date"
                placeholder="选择计划完成时间">
              </el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="18">
            <el-form-item label="项目描述" :label-width="formLabelWidth">
              <el-input type="textarea" v-model="form.description"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="create('form')">新建并启动</el-button>
        <el-button @click="dialogFormVisible = false">取 消</el-button>
      </div>
    </el-dialog>
    <el-dialog
      title="新增项目管理人员"
      :visible.sync="dialogFormVisible2"
      class="dialog"
    >
      <el-form :model="newMemberForm" :rules="newMemberrules" ref="newMemberForm">
        <el-row>
          <el-col :span="16">
            <el-form-item label="成员ID" :label-width="formLabelWidth" prop="memberId">
              <el-input v-model="newMemberForm.memberId" auto-complete="off"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="16">
            <el-form-item label="姓名" :label-width="formLabelWidth" prop="name">
              <el-input v-model="newMemberForm.name" auto-complete="off"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="16">
            <el-form-item label="职务" :label-width="formLabelWidth" prop="duties">
              <el-input v-model="newMemberForm.duties" auto-complete="off"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="createMember('newMemberForm')">新建</el-button>
        <el-button @click="dialogFormVisible2 = false">取 消</el-button>
      </div>
    </el-dialog>
  </el-container>
</template>

<script>
import axios from '@/config/axios.config'
import moment from 'moment'

export default {
  name: 'ProjectsList',
  components: {},
  data () {
    return {
      dialogFormVisible: false,
      dialogFormVisible2: false,
      members: [],
      form: {
        projectName: '',
        standard: '',
        level: '',
        principal: '',
        startTime: '',
        endTime: '',
        description: ''
      },
      newMemberForm: {
        memberId: '',
        name: '',
        duties: ''
      },
      formLabelWidth: '120px',
      rules: {
        projectName: [
          { required: true, message: '请输入项目名称', trigger: 'blur' },
          { max: 15, message: '长度不超过 15 个字符', trigger: 'blur' }
        ],
        standard: [
          { required: true, message: '请选择研制标准', trigger: 'change' }
        ],
        level: [
          { required: true, message: '请选择软件等级', trigger: 'change' }
        ],
        principal: [
          { required: true, message: '请选择项目负责人', trigger: 'blur' }
        ],
        startTime: [
          { type: 'date', required: true, message: '请选择计划开始时间', trigger: 'change' }
        ],
        endTime: [
          { type: 'date', required: true, message: '请选择计划完成时间', trigger: 'change' }
        ]
      },
      newMemberrules: {
        memberId: [
          { required: true, message: '请输入成员Id', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        duties: [
          { required: true, message: '请输入职务', trigger: 'blur' }
        ]
      },
      tableData: []
    }
  },
  mounted () {
    this.getMembers()
    this.getProjects()
  },
  methods: {
    getMembers () {
      axios.get('/api/common/mainMembers').then(res => {
        this.members = res.data
      })
    },
    getProjects () {
      axios.get('/api/projects').then(res => {
        // res.data.forEach(row => {
        //   this.members.forEach(member => {
        //     if (member.memberId === row.principal) {
        //       row.principal = member.name
        //     }
        //   })
        // })
        this.tableData = res.data
      })
    },
    createProject () {
      this.form = {}
      this.dialogFormVisible = true
    },
    create (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.dialogFormVisible = false
          axios.post('/api/projects/create', this.form)
            .then(res => {
              this.$router.push({path: '/project/' + res.data._id + '/systemRequirements'})
            })
            .catch((error) => {
              console.log(error, '发生了错误')
            })
        } else {
          return false
        }
      })
    },
    createMainMember () {
      this.newMemberForm = {}
      this.dialogFormVisible2 = true
    },
    createMember (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.dialogFormVisible2 = false
          axios.post('/api/common/mainMembers/create', this.newMemberForm)
            .then(
              this.$message({
                showClose: true,
                message: '新建项目管理人员成功',
                type: 'success',
                duration: 1500
              })
            )
            .catch((error) => {
              console.log(error, '发生了错误')
            })
        } else {
          return false
        }
      })
    },
    handleEdit (index, row) {
      this.$router.push({path: '/project/' + row._id + '/systemRequirements'})
    },
    handleDelete (index, row) {
      axios.delete('/api/projects/' + row._id)
        .then(res => {
          this.$message({
            showClose: true,
            message: '成功删除了一个项目',
            type: 'success',
            duration: 1500
          })
          this.getProjects()
        })
        .catch((error) => {
          this.$message({
            showClose: true,
            message: '删除项目失败',
            type: 'error',
            duration: 1500
          })
          console.log(error.message)
        })
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
  margin-top: -100px;
  margin-left: 30%;
  width: 100%;
}
.add_mainMember {
  /* margin-top: -100px; */
  /* margin-left: 30%; */
  /* width: 100%; */
  font-size: 14px;
}
.projectsList {
  margin-top: 20px;
}
.dialog {
  border-radius: 50px;
}
</style>
