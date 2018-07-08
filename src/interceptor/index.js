/*
 * @Author: 秦雨霏
 * @Date: 2018-07-08 22:32:31
 * @Last Modified by: 秦雨霏
 * @Last Modified time: 2018-07-08 22:44:46
 */
import axios from 'axios'
import Qs from 'qs'

axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.interceptors.request.use((config) => {
  // let token = localStorage.getItem('jwt-token')
  // if (token !== null && token !== '') {
  //   config.headers.Authorization = token
  // }
  if (config.method === 'post') {
    config.data = Qs.stringfy(config.data)
  }
  return config
}, (error) => {
  return Promise.reject(error)
})
export default axios
