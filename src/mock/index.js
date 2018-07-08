/*
 * @Author: 秦雨霏
 * @Date: 2018-06-17 19:44:41
 * @Last Modified by: 秦雨霏
 * @Last Modified time: 2018-07-08 22:53:19
 */

// 使用mock.js造伪数据
import Mock from 'mockjs'

import Versions from './data/Version'

Mock.setup({
  timeout: 300
})
// 文件上传拦截
// Mock.mock()
// 公共接口拦截
Mock.mock(/\common\/versions/, Versions)
