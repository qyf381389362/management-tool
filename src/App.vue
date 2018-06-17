/*
 * @Author: qinyufei 
 * @Date: 2018-03-02 16:33:33 
 * @Last Modified by: 秦雨霏
 * @Last Modified time: 2018-06-03 23:55:33
 */

<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
  #app {
    position: absolute;
    height: 100%;
    width: 100%;
    font-size: 18px;
  }
</style>
