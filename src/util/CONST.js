/*
 * @Author: 秦雨霏
 * @Date: 2018-10-23 23:32:17
 * @Last Modified by: 秦雨霏
 * @Last Modified time: 2018-12-09 22:25:16
 * @Description: 定义项目中使用到的常量
 */

const CONST = {
  // 配置项状态
  STATUS: [
    {
      code: 0,
      label: '待审核'
    },
    {
      code: 1,
      label: '审核不通过'
    },
    {
      code: 2,
      label: '审核通过'
    },
    {
      code: 3,
      label: '已发布'
    }
  ],
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
  ]
}

export default CONST
