/*
 * @Author: qinyufei 
 * @Date: 2018-03-02 16:33:03 
 * @Last Modified by: qinyufei
 * @Last Modified time: 2018-03-04 22:34:43
 */

<template>
  <div class="layout">
    <!-- 顶部 -->
    <Layout>
      <Header class="menu-dark">
        <Menu mode="horizontal" theme="dark" active-name="1" class="menu-dark">
          <div class="layout-logo"></div>
          <div class="layout-nav">
            <Menu-Item name="1">
              <Icon type=""></Icon>
              内容管理
            </Menu-Item>
            <Menu-Item name="2">
              用户管理
            </Menu-Item>
            <Menu-Item name="3">
              综合管理
            </Menu-Item>
            <Menu-Item name="4">
              <Icon type="person"></Icon>
              当前用户
            </Menu-Item>
          </div>
        </Menu>
      </Header>
       
    </Layout>
    <!-- 中部 -->
    <Layout class="main">
      <Sider hide-trigger>
        <Row>
          <Col span="8">
            <Menu theme="dark" active-name="1-1" :open-names="['1']" style="width:200px;">
              <Submenu name="1">
                <template slot="title">
                  <Icon type="ios-folder"></Icon>
                  软件计划过程
                </template>
                <Menu-Item name='1-1'><div>软件开发计划</div></Menu-Item>
                <Menu-Item name='1-2' href="/home/plan/developmentplan">软件验证计划</Menu-Item>
                <Menu-Item name='1-3'>软件质量保证计划</Menu-Item>
                <Menu-Item name='1-4'>软件合格审定计划</Menu-Item>
                <Menu-Item name='1-5'>配置管理计划</Menu-Item>
                <Menu-Item name='1-6'>软件需求标准</Menu-Item>
              </Submenu>
              <Submenu name="2">
                <template slot="title">
                  <Icon type="ios-paper"></Icon>
                  软件开发过程
                </template>
                <MenuGroup title="软件需求过程">
                  <Menu-Item name='2-1'>软件开发计划</Menu-Item>
                  <Menu-Item name='2-2'>软件验证计划</Menu-Item>
                </MenuGroup>
                <MenuGroup title="软件设计过程">
                  <Menu-Item name='2-3'>软件开发计划</Menu-Item>
                  <Menu-Item name='2-4'>软件验证计划</Menu-Item>
                </MenuGroup>
                <MenuGroup title="软件编码过程">
                  <Menu-Item name='2-5'>软件开发计划</Menu-Item>
                  <Menu-Item name='2-6'>软件验证计划</Menu-Item>
                </MenuGroup>
                <MenuGroup title="软件集成过程">
                  <Menu-Item name='2-7'>软件开发计划</Menu-Item>
                  <Menu-Item name='2-8'>软件验证计划</Menu-Item>
                </MenuGroup>
                
              </Submenu>
              <Submenu name="3">
                <template slot="title">
                  <Icon type="ios-albums"></Icon>
                  软件综合过程
                </template>
                <MenuGroup title="软件验证过程">
                  <Menu-Item name='3-1'>软件开发计划</Menu-Item>
                  <Menu-Item name='3-2'>软件验证计划</Menu-Item>
                </MenuGroup>
                <MenuGroup title="软件配置管理过程">
                  <Menu-Item name='3-3'>软件开发计划</Menu-Item>
                  <Menu-Item name='3-4'>软件验证计划</Menu-Item>
                </MenuGroup>
                <MenuGroup title="软件质量保证过程">
                  <Menu-Item name='3-5'>软件开发计划</Menu-Item>
                  <Menu-Item name='3-6'>软件验证计划</Menu-Item>
                </MenuGroup>
                <MenuGroup title="软件联络审计过程">
                  <Menu-Item name='3-7'>软件开发计划</Menu-Item>
                  <Menu-Item name='3-8'>软件验证计划</Menu-Item>
                </MenuGroup>
              </Submenu>
            </Menu>
          </Col>
        </Row>
      </Sider> 
      <div class="container">
        <router-view></router-view>
      </div>
    </Layout>
    <!-- 底部 -->
    <!-- <Layout>
      <Footer class="footer layout-footer-center menu-dark">2017-2018 &copy; ACT 秦雨霏 </Footer>
    </Layout> -->
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  components: {
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu-dark {
  background-color: #1c2532;
}
.layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    height: 100%;
    overflow: hidden;
}
.layout-con {
  height: 100%;
  width:100%;
}
.layout-logo {
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav {
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
.main {
  height: 100%;
  overflow: auto;
}
.container {
  width: 100%;
}
.layout-footer-center {
  height: 60px;
  line-height: 60px;
  text-align: center;
  color: rgba(255,255,255,.7);
}
.footer {
  position: absolute;
  bottom: 0px;
  width: 100%;
  z-index: 900; /*z-index 仅能在定位元素上奏效*/
}
</style>
