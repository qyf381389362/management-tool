/*
 * @Author: qinyufei 
 * @Date: 2018-03-02 16:32:50 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-03-03 17:19:47
 */

<template>
  <Content class="wrapper">
    <Breadcrumb class="breadcrumb">
      <Breadcrumb-Item href="/home/plan">软件计划过程</Breadcrumb-Item>
      <Breadcrumb-Item>软件开发计划</Breadcrumb-Item>
    </Breadcrumb>
    <Card class="content">
      <div>马老师威武啊</div>
    </Card>
  </Content>
</template>
<script>
export default {
  name: 'DevelopmentPlan',
  data () {
    return {
    }
  }
}
</script>
<style scoped>
  .wrapper {
    margin: 20px;
    padding:0 10px 10px;
  }
  .content {
    margin-top: 10px;
    min-height: 750px;
  }
  .breadcrumb {
    font-size: 16px;
  }
</style>
