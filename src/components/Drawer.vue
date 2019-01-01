/*
 * @Author: 秦雨霏
 * @Date: 2018-07-11 23:18:16
 * @Last Modified by: 秦雨霏
 * @Last Modified time: 2019-01-02 03:47:12
 * @Description: 全屏遮罩层
 */
<template>
  <div
    v-if="isShow"
    class="drawerWrapper"
    @click="hide"
  >
    <check-item @closeCheckItem="closeCheckItem"></check-item>
  </div>
</template>
<script>
import CheckItem from './CheckItem'
export default {
  name: 'Drawer',
  components: {
    CheckItem
  },
  props: {
    isShow: Boolean
  },
  data () {
    return {
      // isShowDrawer: this.isShow
    }
  },
  methods: {
    hide () {
      this.$emit('hideDrawer')
    },
    closeCheckItem () {
      this.hide()
    }
  },
  mounted () {
    // console.log(this.isShowDrawer, 12345678)
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
  z-index: 1000;
  /* opacity: 0.6; */
}
</style>
