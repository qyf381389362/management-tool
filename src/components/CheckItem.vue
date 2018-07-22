/*
 * @Author: 秦雨霏
 * @Date: 2018-07-22 19:34:57
 * @Last Modified by: 秦雨霏
 * @Last Modified time: 2018-07-22 23:33:18
 * @Description: 当点击查看时弹出的查看列表项具体内容的模块
 */
<template>
  <div
    class="checkItem__container"
    @click.stop="stopProp"
  >
    12345678
  </div>
</template>
<script>
export default {
  name: 'CheckItem',
  data () {
    return {}
  },
  methods: {
    stopProp () {

    }
  }
}
</script>
<style>
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
  box-shadow: 0 7px 21px #3a3e55;
  color: #303133;
  overflow: auto;
  /* z-index: 100; */
}
</style>

