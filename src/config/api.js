/*
 * @Author: 秦雨霏
 * @Date: 2018-07-08 21:33:57
 * @Last Modified by: 秦雨霏
 * @Last Modified time: 2018-07-08 21:50:52
 */
import IP from './ip.config'
const key = process.env.NODE_ENV === 'production' ? 'production' : 'dev'
const prefix = IP[key]
// const projectPrefix = prefix + '/home/project'
// const planPrefix = prefix + '/home/plan'
const commonPrefix = prefix + '/common'

const common = {
  login: prefix + '/login',
  getVersions: commonPrefix + '/versions'
}
// const plan = {
//   getVersions: planPrefix + ''
// }
const api = {
  common
}

export default api
