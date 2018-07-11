/*
 * @Author: 秦雨霏
 * @Date: 2018-07-11 23:18:16
 * @Last Modified by: 秦雨霏
 * @Last Modified time: 2018-07-11 23:39:41
 * @Description: 全屏遮罩层
 */
<template>
  <div
    v-if="isShow"
    class="drawerWrapper"
    @click="hide"
  >
  </div>
</template>
<script>
export default {
  name: 'Drawer',
  data () {
    return {
      isShow: true
    }
  },
  methods: {
    hide () {
      this.isShow = false
    }
  }
}
</script>
<style scoped>
.drawerWrapper {
  position: absolute;
  top: 0;
  left: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,.3);
  width: 100%;
  height: 100%;
  /* opacity: 0.6; */
}
</style>


