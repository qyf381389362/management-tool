/*
 * @Author: 秦雨霏 
 * @Date: 2018-05-10 08:16:01 
 * @Last Modified by: 秦雨霏
 * @Last Modified time: 2018-12-09 23:45:03
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
            <el-col :span="3" :offset="13">
              <el-form-item>
                <el-select
                  v-model="versions"
                  placeholder="请选择版本"
                >
                  <el-option label="1.0.0" value="1"></el-option>
                  <el-option label="1.0.1" value="2"></el-option>
                  <el-option label="1.0.2" value="3"></el-option>
                  <el-option label="1.0.3" value="4"></el-option>
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
            prop="period"
            label="阶段">
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
    <drawer :is-show="isCheckItem" @hideDrawer="hideDrawer"></drawer>
  </el-container>
</template>
<script>
import axios from '@/config/axios.config'
import api from '@/config/api'
import NewItem from '../../components/NewItem'
import Drawer from '../../components/Drawer'

export default {
  name: 'SystemRequirements',
  components: {
    NewItem,
    Drawer
  },
  data () {
    return {
      versions: [],
      form: {},
      addSRVisible: false,
      showEditor: true,
      dialogFormVisible: false,
      isCheckItem: false,
      formLabelWidth: '120px',
      tableData: [
        {
          id: 'SRD-1',
          name: '系统需求1',
          version: '1.0.4',
          period: '',
          state: '未审核',
          creater: '秦雨霏',
          createTime: '2017-10-2',
          editor: '许文静',
          editTime: '2017-10-3'
        },
        {
          id: 'SRD-2',
          name: '系统需求2',
          version: '1.0.3',
          period: '',
          state: '未审核',
          creater: '秦雨霏',
          createTime: '2017-10-2',
          editor: '许文静',
          editTime: '2017-10-3'
        },
        {
          id: 'SRD-3',
          name: '系统需求3',
          version: '1.0.2',
          period: '',
          state: '未审核',
          creater: '秦雨霏',
          createTime: '2017-10-2',
          editor: '许文静',
          editTime: '2017-10-3'
        },
        {
          id: 'SRD-4',
          name: '系统需求4',
          version: '1.0.1',
          period: '',
          state: '未审核',
          creater: '秦雨霏',
          createTime: '2017-10-2',
          editor: '许文静',
          editTime: '2017-10-3'
        }
      ]
    }
  },
  methods: {
    getScmItems () {
      console.log('获取配置项列表')
    },
    addSystemRequirement: function () {
      this.addSRVisible = true
    },
    hideDrawer () {
      this.isCheckItem = false
    },
    handleEdit () {},
    handleCheck () {
      this.dialogFormVisible = true
    },
    handleDelete () {},
    save (scmItem) {
      let version = scmItem.version

      console.log(scmItem, '弹出层传入的数据')
      axios.post('/api/scmitems/create', scmItem)
      .then(res => {
        this.$message({
          showClose: true,
          message: '新建工作项成功',
          type: 'success',
          duration: 1500
        })
        this.addSRVisible = false
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