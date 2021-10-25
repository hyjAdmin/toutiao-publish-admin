import Vue from 'vue'
import VueRouter from 'vue-router'
/* 
  @   等价于    //'../views/login'

  在 VueCli 创建的项目中， @ 表示 src 目录
  他是 src 目录的路径别名
  好处是它不受当前文件路径的影响
  注意：@ 就是 src 路径， 后面别忘了写 '/'

 */
import Login from '@/views/login'  
// 路由配置表
const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router