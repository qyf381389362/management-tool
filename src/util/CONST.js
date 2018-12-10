/*
 * @Author: 秦雨霏
 * @Date: 2018-10-23 23:32:17
 * @Last Modified by: 秦雨霏
 * @Last Modified time: 2018-12-10 17:47:27
 * @Description: 定义项目中使用到的常量
 */

const CONST = {
  // 配置项状态
  STATUS: [
    {
      code: 0,
      name: '待审核'
    },
    {
      code: 1,
      name: '审核不通过'
    },
    {
      code: 2,
      name: '审核通过'
    },
    {
      code: 3,
      name: '已发布'
    }
  ],
  // 优先级
  PRIORITY: {
    0: '低',
    1: '中',
    2: '高'
  },
  // 重要程度
  IMPORTANCE: [
    {
      code: 1,
      label: '关键'
    },
    {
      code: 2,
      label: '重要'
    },
    {
      code: 3,
      label: '一般'
    }
  ],
  // 颜色
  COLOR: {
    normal: '#409EFF',
    danger: '#f56c6c',
    warn: '#e6a23c',
    pass: '#67c23a',
    done: '#909399'
  }
}

export default CONST
