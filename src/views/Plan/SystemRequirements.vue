/*
 * @Author: 秦雨霏 
 * @Date: 2018-05-10 08:16:01 
 * @Last Modified by: 秦雨霏
 * @Last Modified time: 2019-01-02 06:14:59
 */

<!--系统需求页面-->
<template>
  <el-container>
    <el-main class="wrapper">
      <el-breadcrumb class="breadcrumb">
        <el-breadcrumb-item :to="{path:'systemRequirements'}">软件计划过程</el-breadcrumb-item>
        <el-breadcrumb-item>系统需求</el-breadcrumb-item>
      </el-breadcrumb>
      <el-card class="content">
        <el-form :model="form">
          <el-row :gutter="20">
            <el-col :span="3">
              <el-form-item>
              <el-button
                type="primary" 
                @click="addSystemRequirement"
                round>
                添加系统需求
              </el-button>
              </el-form-item>
            </el-col>
            <el-col :span="3" :offset="10">
              <el-form-item>
                <el-select
                  v-model="selectedVersions"
                  placeholder="请选择版本"
                >
                  <el-option
                    v-for="version in versions"
                    :key="version.id"
                    :label="version.value"
                    :value="version.id"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="3">
              <el-form-item>
                <el-select
                  v-model="statuses"
                  placeholder="请选择状态"
                >
                  <el-option label="全部" value="-1"></el-option>
                  <el-option label="待审核" value="0"></el-option>
                  <el-option label="审核不通过" value="1"></el-option>
                  <el-option label="审核通过" value="2"></el-option>
                  <el-option label="已发布" value="3"></el-option>
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
          style="width:100%"
        >
          <el-table-column
            prop="identification"
            label="标识"
          ></el-table-column>
          <el-table-column
            prop="title"
            label="名称"
            ></el-table-column>
          <el-table-column
            prop="version"
            label="当前版本"
          ></el-table-column>
          <el-table-column
            prop="priority"
            label="优先级"
          ></el-table-column>
          <el-table-column
            prop="status"
            label="状态"
          >
            <template slot-scope="scope">
              <span v-if="scope.row.status === '待审核'" :style="{ color: color.normal }">{{ scope.row.status }}</span>
              <span v-if="scope.row.status === '审核不通过'" :style="{ color: color.danger }">{{ scope.row.status }}</span>
              <span v-if="scope.row.status === '审核通过'" :style="{ color: color.pass }">{{ scope.row.status }}</span>
              <span v-if="scope.row.status === '已发布'" :style="{ color: color.done }">{{ scope.row.status }}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="creator"
            label="创建人"
          ></el-table-column>
          <el-table-column
            prop="startTime"
            label="开始时间"
          ></el-table-column>
          <el-table-column
            prop="editor"
            label="编辑人"
          ></el-table-column>
          <el-table-column
            prop="editTime"
            label="编辑时间"
          ></el-table-column>
          <el-table-column
            label="操作"
            min-width="200"
            align="center"
          >
            <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button
                  size="mini"
                  type="primary"
                  @click="handleCheck(scope.$index, scope.row)">审核</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              </template>
          </el-table-column>
        </el-table>
      </el-card>
    </el-main>
    <el-dialog
      title="新建工作项"
      :visible.sync="addSRVisible"
      width="70%"
    >
      <new-item
        v-if="showEditor"
        :members="membersInArray"
        @save="save"
        @cansole="cansole"
      ></new-item>
    </el-dialog>
    <el-dialog
      title="审核信息"
      :visible.sync="dialogFormVisible"
      class="dialog"
    >
      <el-form :model="form">
        <el-row>
          <el-col :span="16">
            <el-form-item label="指定审核人" :label-width="formLabelWidth">
              <el-select
                v-model="form.aditor"
                filterable
              >
                 <el-option
                    v-for="member in membersInArray"
                    :key="member.memberId"
                    :label="member.name"
                    :value="member.memberId"
                  ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="18">
            <el-form-item label="截止时间" :label-width="formLabelWidth">
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
    <drawer :is-show="isCheckItem" @hideDrawer="hideDrawer"></drawer>
  </el-container>
</template>
<script>
import axios from '@/config/axios.config'
import api from '@/config/api'
import NewItem from '../../components/NewItem'
import Drawer from '../../components/Drawer'
import CONST from '../../util/CONST'

export default {
  name: 'SystemRequirements',
  components: {
    NewItem,
    Drawer
  },
  mounted () {
    this.projectId = this.$route.params.id
    this.getMembers()
    this.getVersions()
    this.getScmItems()
  },
  data () {
    return {
      projectId: '',
      membersInArray: [],
      members: {},
      versions: [],
      selectedVersions: '',
      statuses: [],
      form: {},
      addSRVisible: false,
      showEditor: true,
      dialogFormVisible: false,
      isCheckItem: false,
      formLabelWidth: '120px',
      color: {
        normal: CONST.COLOR.normal,
        danger: CONST.COLOR.danger,
        warn: CONST.COLOR.warn,
        pass: CONST.COLOR.pass,
        done: CONST.COLOR.done
      },
      tableData: []
    }
  },
  methods: {
    getMembers () {
      axios.get('/api/common/members/' + this.projectId).then(res => {
        this.membersInArray = res.data
        res.data.forEach(member => {
          if (!this.members[member.memberId]) {
            this.members[member.memberId] = member.name
          }
        })
      })
    },
    getVersions () {
      this.versions = [
        {
          projectId: this.projectId,
          id: '-1',
          value: '全部'
        }
      ]
      axios.get('/api/common/versions/' + this.projectId).then(res => {
        let finalVersions = this.versions.concat(res.data)
        this.versions = finalVersions
      })
    },
    getScmItems () {
      axios.get('/api/scmitems/' + this.projectId).then(res => {
        res.data.forEach(row => {
          // 将人员信息的code值转换为中文名字
          row.creator = this.members[row.creator]
          row.priority = CONST.PRIORITY[row.priority]
          // 将状态code码改为name值
          CONST.STATUS.forEach(status => {
            if (status.code === row.status) {
              row.status = status.name
            }
          })
        })
        this.tableData = res.data
      })
    },
    addSystemRequirement: function () {
      this.addSRVisible = true
    },
    hideDrawer () {
      this.isCheckItem = false
    },
    handleEdit () {
      // this.isCheckItem = true
      axios(
        {
          method: 'get',
          url: '/api/common/exportWord',
          responseType: 'blob'
        }
      ).then(res => {
        // console.log(res)
        // 这里res.data是返回的blob对象
        // application/vnd.openxmlformats-officedocument.wordprocessingml.document这里表示doc类型
        let blob = new Blob([res.data], {type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document;charset=utf-8'})
        let downloadElement = document.createElement('a')
        let href = window.URL.createObjectURL(blob) // 创建下载的链接
        downloadElement.href = href
        downloadElement.download = 'test' + '.docx' // 下载后文件名
        document.body.appendChild(downloadElement)
        downloadElement.click() // 点击下载
        document.body.removeChild(downloadElement) // 下载完成移除元素
        window.URL.revokeObjectURL(href) // 释放掉blob对象
      })
    },
    handleCheck () {
      this.dialogFormVisible = true
    },
    handleDelete (index, row) {
      // console.log(row._id)
      axios.delete('/api/scmitems/' + row._id)
        .then(res => {
          this.$message({
            showClose: true,
            message: '成功删除了一个工作项',
            type: 'success',
            duration: 1500
          })
          this.getScmItems()
        })
        .catch((error) => {
          this.$message({
            showClose: true,
            message: '删除失败',
            type: 'error',
            duration: 1500
          })
          console.log(error.message)
        })
    },
    save (scmItem) {
      let scmVersion = scmItem.version
      let isVersionExisted = false

      this.versions.forEach(version => {
        if (version.id === scmVersion) {
          isVersionExisted = true
        }
      })
      if (!isVersionExisted) {
        let versionToPost = {
          projectId: this.projectId,
          id: scmVersion,
          value: scmVersion
        }
        axios.post('/api/common/versions/create', versionToPost)
          .then(res => {
            return true
          })
          .catch((error) => {
            console.log(error, '发生了错误')
          })
      }

      scmItem.projectId = this.projectId
      scmItem.type = '系统需求'
      scmItem.status = 0

      // console.log(scmItem, '弹出层传入的数据')
      axios.post('/api/scmitems/create', scmItem)
      .then(res => {
        this.$message({
          showClose: true,
          message: '新建工作项成功',
          type: 'success',
          duration: 1500
        })
        this.addSRVisible = false
        this.getVersions()
        this.getScmItems()
      })
      .catch((error) => {
        this.$message({
          showClose: true,
          message: '创建工作项失败',
          type: 'error',
          duration: 1500
        })
        console.log(error.message)
      })
    },
    cansole () {
      this.addSRVisible = false
    },
    confirm () {
      console.log('确认发起审核')
    }
  }
}
</script>
<style scoped>
  
</style>