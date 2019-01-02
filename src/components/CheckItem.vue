/*
 * @Author: 秦雨霏
 * @Date: 2018-07-22 19:34:57
 * @Last Modified by: 秦雨霏
 * @Last Modified time: 2019-01-02 13:08:39
 * @Description: 当点击查看时弹出的查看列表项具体内容的模块
 */
<template>
  <div
    class="checkItem__container"
    :class="{fullScreen: isFullScreen}"
    @click.stop="stopProp"
  >
    <div class="header">
      <span class="idStyle">{{ singleItem.identification }}</span>
      <span>{{ singleItem.title }}</span>
      <span class="iconGroup">
        <font-awesome-icon
          class="circle-button cursorPointer"
          :icon="['fas', 'compress']"
          @click="toggleFullScreen"
        />
        <font-awesome-icon
          class="circle-button cursorPointer"
          :icon="['fas', 'times']"
          @click="close"
        />
      </span>
    </div>
    <el-form :model="form" :rules="rules" ref="form">
      <el-row class="mt10" :gutter="20">
      <el-col :span="18">
        <el-tabs v-model="activeName" class="tabs">
          <el-tab-pane label="信息描述" name="information">
            <editor
              :content="singleItem.content"
              @editorContent="getEditorContent">
            </editor>
          </el-tab-pane>
          <el-tab-pane label="子工作项" name="children">
            子工作项
          </el-tab-pane>
          <el-tab-pane label="关联工作项" name="relatedItems">
            关联工作项
          </el-tab-pane>
          <!-- <el-tab-pane label="关联WIKI" name="relatedWIKI">
            关联WIKI
          </el-tab-pane> -->
          <!-- <el-tab-pane label="关联测试用例" name="relatedTestItems">
            关联测试用例
          </el-tab-pane> -->
          <!-- <el-tab-pane label="操作历史" name="relatedWIKI">

          </el-tab-pane> -->
        </el-tabs>
      </el-col>
      <el-col :span="6">
        <div class="header">基本信息</div>
        <div class="mb10">
          <el-row class="mt20">
            <el-col :span="8">
              <span class="mt5">创建人：</span>
            </el-col>
            <el-col :span="16">
              <el-form-item prop="creator">
                <el-input
                  v-model="form.creator"
                  class="inline percentWidth_100"
                  size="medium"
                  :disabled="true"
                  >
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </div>
        <div class="mb10">
          <el-row>
            <el-col :span="8">
              <span class="mt5">标识：</span>
            </el-col>
            <el-col :span="16">
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
            <el-col :span="8">
              <span class="mt5">版本：</span>
            </el-col>
            <el-col :span="16">
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
            <el-col :span="8">
              <span class="mt5">开始时间：</span>
            </el-col>
            <el-col
              :span="16"
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
            <el-col :span="8">
              <span class="mt5">结束时间：</span>
            </el-col>
            <el-col
              :span="16"
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
            <el-col :span="8">
              <span class="mt5">预计工时：</span>
            </el-col>
            <el-col :span="16">
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
            <el-col :span="8">
              <span class="mt5">优先级：</span>
            </el-col>
            <el-col :span="16">
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
            <el-col :span="8">
              <span class="mt5">重要程度：</span>
            </el-col>
            <el-col :span="16">
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
            <el-col :span="8">
              <span class="mt5">备注：</span>
            </el-col>
            <el-col :span="16">
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
      </el-col>
    </el-row>
    <el-row class="mb20">
      <el-button
          type="primary"
          @click="update('form')"
          round
        >
          &nbsp;&nbsp;修&nbsp;&nbsp;改&nbsp;&nbsp;
        </el-button>
        <el-button
          @click='close'
          round
        >
          &nbsp;&nbsp;取&nbsp;&nbsp;消&nbsp;&nbsp;
        </el-button>
    </el-row>
    </el-form>
    
  </div>
</template>
<script>
import Editor from './Editor'
import CONST from '@/util/CONST'

export default {
  name: 'CheckItem',
  components: {
    Editor
  },
  props: ['singleItem'],
  data () {
    return {
      isFullScreen: false,
      activeName: 'information',
      importanceItems: CONST.IMPORTANCE,
      form: {},
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
    this.form = this.singleItem
  },
  methods: {
    stopProp () {

    },
    toggleFullScreen () {
      this.isFullScreen = !this.isFullScreen
    },
    close () {
      this.$emit('closeCheckItem')
    },
    getEditorContent (editorContent) {
      let content = editorContent
      this.form.content = content
    },
    update (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$emit('update', this.form)
          // console.log(this.form, '修改后的表单')
        } else {
          return false
        }
      })
    }
  }
}
</script>
<style scoped>
.checkItem__container {
  position: relative;
  float: right;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ffffff;
  width: 60%;
  height: 100%;
  padding: 20px;
  box-shadow: 0 7px 21px #3a3e55;
  color: #303133;
  overflow: hidden;
  /* z-index: 100; */
}
.fullScreen {
  width: 98%;
}
.idStyle {
  color: #409EFF;
  /* text-decoration: underline; */
}
.circle-button {
  position: relative;
  width: 20px !important;
  height: 20px;
  box-shadow: 0 0 4px 0 rgba(152, 142, 142, 1);
  border-radius: 50%;
  padding: 5px;
}
.iconGroup {
  position: relative;
  float: right;
}
.header {
  border-bottom: 2px solid#e4e7ed;
  padding-bottom: 14px;
}
.tabs .el-tabs__item{
  color: green;
}
</style>
