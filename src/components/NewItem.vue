/*
 * @Author: 秦雨霏
 * @Date: 2018-07-24 15:13:32
 * @Last Modified by: 秦雨霏
 * @Last Modified time: 2018-12-12 22:04:46
 * @Description: 新建工作项
 */

<template>
  <el-form :model="form" :rules="rules" ref="form">
    <el-row :gutter="30">
      <el-col :span="18">
        <el-form-item prop="title">
          <el-input
            v-model="form.title"
            auto-complete="off"
            placeholder="请输入标题名称"
            class="nameHolder"
          >
          </el-input>
        </el-form-item>
        <el-form-item>
          <editor @editorContent="getEditorContent"></editor>
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <div class="mb10">
          <el-row>
            <el-col :span="6">
              <span class="mt5">创建人：</span>
            </el-col>
            <el-col :span="18">
              <el-form-item prop="creator">
                <el-select
                  v-model="form.creator"
                  filterable
                  size="medium"
                  placeholder="请选择"
                  class="percentWidth_100"
                >
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
        </div>
        <div class="mb10">
          <el-row>
            <el-col :span="6">
              <span class="mt5">标识：</span>
            </el-col>
            <el-col :span="18">
              <el-form-item prop="identification">
                <el-input
                  v-model="form.identification"
                  class="inline percentWidth_100"
                  size="medium">
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </div>
        <div class="mb10">
          <el-row>
            <el-col :span="6">
              <span class="mt5">版本：</span>
            </el-col>
            <el-col :span="18">
              <el-form-item prop="version">
                <el-input
                  v-model="form.version"
                  class="inline percentWidth_100"
                  size="medium"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </div>
        <div class="mb10">
          <el-row>
            <el-col :span="6">
              <span class="mt5">开始时间：</span>
            </el-col>
            <el-col
              :span="18"
              class="datePicker">
              <el-date-picker
                v-model="form.startTime"
                type="date"
                placeholder="选择开始时间">
              </el-date-picker>
            </el-col>
          </el-row>
        </div>
        <div class="mb10">
          <el-row>
            <el-col :span="6">
              <span class="mt5">结束时间：</span>
            </el-col>
            <el-col
              :span="18"
              class="datePicker">
              <el-date-picker
                v-model="form.endTime"
                type="date"
                placeholder="选择结束时间">
              </el-date-picker>
            </el-col>
          </el-row>
        </div>
        <div class="mb10">
          <el-row>
            <el-col :span="6">
              <span class="mt5">预计工时：</span>
            </el-col>
            <el-col :span="18">
              <el-row>
                <el-col :span="18">
                  <el-input-number
                    v-model="form.workingHours"
                    controls-position="right"
                    :min="1"
                  >
                  </el-input-number>
                </el-col>
                <el-col :span="6">
                  <span>人时</span>
                </el-col>
              </el-row>              
            </el-col>
          </el-row>
        </div>
        <div class="mb10">
          <el-row>
            <el-col :span="6">
              <span class="mt5">优先级：</span>
            </el-col>
            <el-col :span="18">
              <el-radio
                v-model="form.priority"
                label="0"
              >
                低
              </el-radio>
              <el-radio
                v-model="form.priority"
                label="1"
              >
                中
              </el-radio>
              <el-radio
                v-model="form.priority"
                label="2"
              >
                高
              </el-radio>
            </el-col>
          </el-row>
        </div>
        <div class="mb10">
          <el-row>
            <el-col :span="6">
              <span class="mt5">重要程度：</span>
            </el-col>
            <el-col :span="18">
              <el-select
                v-model="form.importance"
                filterable
                size="medium"
                placeholder="请选择"
                class="percentWidth_100">
                <el-option
                  v-for="item in importanceItems"
                  :key="item.code"
                  :label="item.label"
                  :value="item.code">
                </el-option>
              </el-select>
            </el-col>
          </el-row>
        </div>
        <div class="mb10">
          <el-row>
            <el-col :span="6">
              <span class="mt5">备注：</span>
            </el-col>
            <el-col :span="18">
              <el-input
                type="textarea"
                v-model="form.remarks"
                :rows="3"
                filterable
                size="medium"
                class="percentWidth_100">
              </el-input>
            </el-col>
          </el-row>
        </div>
        <div class="mb10">
          <el-row>
            <el-col :span="6">
              <span class="mt5">上传附件：</span>
            </el-col>
            <el-col :span="18">
              <el-upload
                class="upload-area"
                ref="upload"
                drag
                action=""
                :auto-upload="false"
              >
                <!-- <i class="el-icon-upload"></i> -->
                <el-button slot="trigger" size="small">选取文件</el-button>
                <div slot="tip">只能上传pdf文件，且不超过50M</div>
              </el-upload>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <el-row class="mt20">
      <el-col :span="6" :offset="9">
        <el-button
          type="primary"
          @click="save('form')"
          round
        >
          &nbsp;&nbsp;保&nbsp;&nbsp;存&nbsp;&nbsp;
        </el-button>
        <el-button
          @click='cansole'
          round
        >
          &nbsp;&nbsp;取&nbsp;&nbsp;消&nbsp;&nbsp;
        </el-button>
      </el-col>
    </el-row>
  </el-form>
  <!-- <editor></editor> -->
</template>
<script>
import axios from '@/config/axios.config'
import CONST from '@/util/CONST'
// import api from '@/config/api'
import Editor from './Editor'

export default {
  name: 'newItem',
  components: {
    Editor
  },
  props: ['members'],
  data () {
    return {
      form: {
        title: '',
        content: '',
        creator: '',
        identification: '',
        version: '',
        startTime: '',
        endTime: '',
        workingHours: '',
        priority: 'low',
        importance: '',
        remarks: ''
      },
      importanceItems: CONST.IMPORTANCE,
      rules: {
        title: [
          { required: true, message: '请输入标题名称', trigger: 'blur' },
          { max: 100, message: '长度不超过100个字符', trigger: 'blur' }
        ],
        creator: [
          { required: true, message: '请输入创建人', trigger: 'change' }
        ],
        identification: [
          { required: true, message: '请输入标识', trigger: 'blur' }
        ],
        version: [
          { required: true, message: '请输入版本', trigger: 'blur' }
        ]
      }
    }
  },
  mounted () {
    // this.getMembers()
  },
  methods: {
    // getMembers () {
    //   axios.get('/api/common/members').then(res => {
    //     this.members = res.data
    //   })
    // },
    getEditorContent (editorContent) {
      let content = editorContent
      this.form.content = content
    },
    save (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$emit('save', this.form)
        } else {
          return false
        }
      })
    },
    cansole () {
      this.form = {}
      this.$emit('cansole')
    }
  }
}
</script>

<style>
.nameHolder {
  margin-bottom: 20px;
}
.datePicker .el-date-editor.el-input {
  width: 100%;
}
.upload-area .el-upload-dragger {
  width: 100%;
  height: 120px;
}
.upload-area .el-upload-dragger .el-icon-upload {
  font-size: 40px;
  margin-top: 10px;
}
</style>
