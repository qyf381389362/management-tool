/*
 * @Author: 秦雨霏
 * @Date: 2018-07-22 19:34:57
 * @Last Modified by: 秦雨霏
 * @Last Modified time: 2019-01-02 03:45:19
 * @Description: 当点击查看时弹出的查看列表项具体内容的模块
 */
<template>
  <div
    class="checkItem__container"
    :class="{fullScreen: isFullScreen}"
    @click.stop="stopProp"
  >
    <div class="header">
      <span v-model="form.id" class="idStyle">#4334213</span>
      <span v-model="form.name">名称</span>
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
    <el-row class="mt10" :gutter="20">
      <el-col :span="18">
        <el-tabs v-model="activeName" class="tabs">
          <el-tab-pane label="信息描述" name="information">
            信息描述
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
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'CheckItem',
  data () {
    return {
      isFullScreen: false,
      activeName: 'information',
      form: {}
    }
  },
  methods: {
    stopProp () {

    },
    toggleFullScreen () {
      this.isFullScreen = !this.isFullScreen
    },
    close () {
      this.$emit('closeCheckItem')
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
  border-bottom: 1px solid#d7d7d7;
  padding-bottom: 20px;
}
.tabs .el-tabs__item{
  color: green;
}
</style>
