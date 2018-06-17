/*
 * @Author: 秦雨霏
 * @Date: 2018-06-17 19:44:41
 * @Last Modified by: 秦雨霏
 * @Last Modified time: 2018-06-17 19:52:59
 */

// 使用mock.js造伪数据
import Mock from 'mockjs'

Mock.setup({
  timeout: 300
})
// 文件上传拦截
Mock.mock()
