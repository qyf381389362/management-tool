/*
 * @Author: 秦雨霏 
 * @Date: 2018-03-02 16:32:50 
 * @Last Modified by: 秦雨霏
 * @Last Modified time: 2018-07-11 00:29:20
 */
<!--软件计划过程之软件开发计划页面-->
<template>
  <el-container>
    <el-main class="wrapper">
      <el-breadcrumb class="breadcrumb">
        <el-breadcrumb-item :to="{path:'/home/plan'}">软件计划过程</el-breadcrumb-item>
        <el-breadcrumb-item>软件开发计划</el-breadcrumb-item>
      </el-breadcrumb>
      <el-card class="content">
        <el-form :model="form">
          <el-row :gutter="20">
            <el-col :span="5">
              <el-form-item>
                <el-button
                  type="primary" 
                  @click="submitFile"
                  round>
                  上传计划
                </el-button>
                <span class="exportContainer cursorPointer">
                  <font-awesome-icon class="fileExport circle-button" :icon="['fas', 'file-archive']"/>
                  <span>导出</span>
                </span>
                <!-- <span class="circle-button"></span> -->
              </el-form-item>
            </el-col>
            <el-col :span="3" :offset="11">
              <el-form-item>
                <el-select
                  v-model="form.version"
                  placeholder="请选择版本">
                  <el-option
                    v-for="item in versions"
                    :key="item.version"
                    :label="item.label"
                    :value="item.version">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="5">
              <el-form-item>
                <el-input
                  v-model="form.searchValue"
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
          <el-table-column label="操作" align="center">
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
        <div v-if="isShowItem">
          <item></item>
        </div>
        <el-dialog
          title="新建工作项"
          :visible.sync="dialogVisible"
          width="70%">
            <new-item v-if="showEditor"></new-item>
        </el-dialog>
      </el-card>
    </el-main>
  </el-container>
</template>
<script>
import axios from '@/config/axios.config'
import api from '@/config/api'
import NewItem from '../../components/NewItem'
import Item from '../../components/Item'
export default {
  name: 'DevelopmentPlan',
  components: {
    NewItem,
    Item
  },
  data () {
    return {
      form: {},
      showEditor: true,
      dialogVisible: false,
      isShowItem: false,
      versions: [],
      tableData: [
        {
          id: 'SDP-1',
          name: '软件开发计划1',
          version: '1.0.4',
          state: '未审核',
          creater: '秦雨霏',
          createTime: '2017-10-2',
          editor: '许文静',
          editTime: '2017-10-3'
        },
        {
          id: 'SDP-2',
          name: '软件开发计划2',
          version: '1.0.3',
          state: '未审核',
          creater: '秦雨霏',
          createTime: '2017-10-2',
          editor: '许文静',
          editTime: '2017-10-3'
        },
        {
          id: 'SDP-3',
          name: '软件开发计划3',
          version: '1.0.2',
          state: '未审核',
          creater: '秦雨霏',
          createTime: '2017-10-2',
          editor: '许文静',
          editTime: '2017-10-3'
        },
        {
          id: 'SDP-4',
          name: '软件开发计划4',
          version: '1.0.1',
          state: '未审核',
          creater: '秦雨霏',
          createTime: '2017-10-2',
          editor: '许文静',
          editTime: '2017-10-3'
        },
        {
          id: 'SDP-5',
          name: '软件开发计划5',
          version: '1.0.0',
          state: '未审核',
          creater: '秦雨霏',
          createTime: '2017-10-2',
          editor: '许文静',
          editTime: '2017-10-3'
        }
      ]
    }
  },
  mounted () {
    this.getVersions()
  },
  methods: {
    getVersions () {
      // 向后台获取版本数据
      axios.get(api.common.getVersions).then(res => {
        this.versions = res.data.list
      })
    },
    submitFile () {
      // this.$router.go('/plan/developmentplan/submitFile')
      // this.$router.push({path: '#/home/plan/developmentplan/submitFile'})
      // this.$router.push({ path: 'developmentplan/submitFile' })
      this.dialogVisible = true
    },
    handleEdit () {},
    handleDelete () {},
    // 设置表头操作列的样式
    toCenter ({row, column, rowIndex, columnIndex}) {
      if (columnIndex === 8) {
        return 'text-align:center'
      }
    }
  }
}
</script>
<style scoped>
.exportContainer {
  position:absolute;
}
.fileExport {
  margin-left: 30px;
  margin-top: 4px;
  display: inline-block;
  color: #409EFF;
}
.circle-button {
  position: relative;
  width: 20px;
  height: 20px;
  box-shadow: 0 0 4px 0 rgba(152, 142, 142, 1);
  border-radius: 50%;
  padding: 5px;
}
</style>
