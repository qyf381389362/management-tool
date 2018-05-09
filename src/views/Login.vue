/*
 * @Author: 秦雨霏 
 * @Date: 2018-05-09 19:42:05 
 * @Last Modified by: 秦雨霏
 * @Last Modified time: 2018-05-09 20:49:21
 */
<!--登录页面-->
<template>
  <el-container class="container">
    <el-main class="middle">
      <div class="login">
        <div class="header">登&nbsp;&nbsp;&nbsp;录</div>
        <div>
          <form>
            <el-input
              placeholder="请输入用户名"
              class="userName"
              v-model="userName"
              clearable>
              <font-awesome-icon slot="prefix" class="icon" :icon="['fas', 'user']"/>
            </el-input>
            <el-input
              placeholder="请输入密码"
              class="password"
              v-model="password"
              clearable>
              <font-awesome-icon slot="prefix" class="icon" :icon="['fas', 'unlock']"/>
            </el-input>
            <el-button
              plain
              class="submitButton"
              @click="login"
            >
              登  录
              <i class="el-icon-arrow-right el-icon--right"></i>
            </el-button>
          </form>
        </div>
      </div>
    </el-main>
  </el-container>
</template>
<script>
export default {
  name: 'Login',
  components: {
  },
  data () {
    return {
      userName: '',
      password: ''
    }
  },
  methods: {
    login () {
      if (this.userName === 'admin' && this.password === '123456') {
        this.$router.push({path: '/projects'})
      }
    }
  }
}
</script>
<style scoped>
.container {
  background-color: #2f4050;
  height: 100%;
}
.middle {
  display: flex;
  align-items: center;
  justify-content: center;
}
.login {
  width: 500px;
  height: 300px;
  background-color: #fff;
  border-radius: 5px;
}
.header {
  height: 50px;
  background-color: #f0f0f0;
  border-radius: 5px;
  text-align: center;
  line-height: 50px;
  color: #767676;
  font-weight: 800;
  font-size: 25px;
}
.userName,.password {
  display: inline-block;
  height: 60px;
  margin-top: 10px;
}
.icon {
  margin-top: 10px;
}
.submitButton {
  width:480px;
  height: 60px;
  color: #fff;
  font-size: 18px;
  margin-top: 20px;
  margin-left: 10px;
  font-weight: 800;
  background-color: #92c623;
}
</style>
