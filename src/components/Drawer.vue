/*
 * @Author: 秦雨霏
 * @Date: 2018-07-11 23:18:16
 * @Last Modified by: 秦雨霏
 * @Last Modified time: 2019-01-02 13:11:31
 * @Description: 全屏遮罩层
 */
<template>
  <div
    v-if="isShow"
    class="drawerWrapper"
    @click="hide"
  >
    <check-item
      :singleItem="singleScmItem"
      @closeCheckItem="closeCheckItem"
      @update="update"
    >
    </check-item>
  </div>
</template>
<script>
import CheckItem from './CheckItem'
export default {
  name: 'Drawer',
  components: {
    CheckItem
  },
  props: ['isShow', 'singleScmItem'],
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
    },
    update (scmItem) {
      this.$emit('update', scmItem)
    }
  },
  mounted () {
    // console.log(this.singleScmItem, '中间层')
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
