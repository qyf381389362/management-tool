<template>
  <el-form :model="form" :rules="rules" ref="form">
    <el-row :gutter="30">
      <el-col :span="18">
        <div>
          <el-input
            v-model="form.name"
            auto-complete="off"
            placeholder="请输入标题名称"
            class="nameHolder"
          >
          </el-input>
          <editor></editor>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="mb10">
          <el-row>
            <el-col :span="6">
              <span class="mt5">创建人：</span>
            </el-col>
            <el-col :span="18">
              <el-select
                v-model="form.creatorId"
                filterable
                size="medium"
                placeholder="请选择"
                class="w200">
                <el-option
                  v-for="item in members"
                  :key="item.id"
                  :label="item.label"
                  :value="item.id">
                </el-option>
              </el-select>
            </el-col>
          </el-row>
        </div>
        <div class="mb10">
          <el-row>
            <el-col :span="6">
              <span class="mt5">标识：</span>
            </el-col>
            <el-col :span="18">
              <el-input
                v-model="form.identification"
                class="inline w200"
                size="medium">
              </el-input>
            </el-col>
          </el-row>
        </div>
        <div class="mb10">
          <el-row>
            <el-col :span="6">
              <span class="mt5">版本：</span>
            </el-col>
            <el-col :span="18">
              <el-input
                v-model="form.version"
                class="inline w200"
                size="medium">
              </el-input>
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
                v-model="form.startDate"
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
                v-model="form.endDate"
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
              <el-input-number
                v-model="form.manHour"
                controls-position="right"
                :min="1">
              </el-input-number>
              <span>人时</span>
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
                label="low">
                低
              </el-radio>
              <el-radio
                v-model="form.priority"
                label="medium">
                中
              </el-radio>
              <el-radio
                v-model="form.priority"
                label="high">
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
                class="w200">
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
                class="w200">
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
                drag
                action=""
                multiple>
                <i class="el-icon-upload"></i>
                <div>将文件拖到此处，或<em>点击上传</em></div>
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
          @click="save"
          round>
          &nbsp;&nbsp;保&nbsp;&nbsp;存&nbsp;&nbsp;
        </el-button>
        <el-button 
          @click="console"
          round>
          &nbsp;&nbsp;取&nbsp;&nbsp;消&nbsp;&nbsp;
        </el-button>
      </el-col>
    </el-row>
  </el-form>
  <!-- <editor></editor> -->
</template>
<script>
import Editor from './Editor'
export default {
  name: 'newItem',
  components: {
    Editor
  },
  data () {
    return {
      form: {
        name: '',
        creatorId: '',
        identification: '',
        version: '',
        startDate: '',
        endDate: '',
        manHour: '',
        priority: '',
        importance: '',
        remarks: ''
      },
      members: [
        {
          id: '001',
          label: '秦雨霏'
        },
        {
          id: '002',
          label: '死胖子'
        },
        {
          id: '003',
          label: '王宇晟'
        },
        {
          id: '004',
          label: '许文静'
        }
      ],
      importanceItems: [
        {
          code: '1',
          label: '关键'
        },
        {
          code: '2',
          label: '重要'
        },
        {
          code: '3',
          label: '一般'
        }
      ]
    }
  },
  methods: {
    save () {
      console.log('保存成功')
    },
    cansole () {
      console.log('取消')
    }
  }
}
</script>
<style>
.nameHolder {
  margin-bottom: 20px;
}
.datePicker .el-date-editor.el-input {
  width: 200px;
}
.upload-area .el-upload-dragger{
  width: 200px;
  height: 120px;
}
.upload-area .el-upload-dragger .el-icon-upload {
  font-size: 40px;
  margin-top: 20px;
}
</style>
