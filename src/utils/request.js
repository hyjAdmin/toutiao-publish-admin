/* 
  基于 axios 封装的请求模块
*/

import axios from 'axios'

// 创建一个 axios 实例, 就是复制一个 axios
// 通过这个实例去发请求，把需要的配置配置给这个实例来处理
const request = axios.create({
  baseURL: 'http://localhost:5000' //请求的基础路径
})

// 导出请求方法
export default request

// 谁使用就加载 request 模块
// import request from 'request.js'
// request.xxx
// request({
//   method: ,
//   url: ''
// })