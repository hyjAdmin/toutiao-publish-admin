/* 
  项目启动入口
*/
import Vue from 'vue'
import App from './App.vue'
//引入VueRouter
import VueRouter from 'vue-router'
import router from './router'
// 加载element 组件库的样式
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 加载全局样式
import './styles/index.less'
//应用插件
Vue.use(VueRouter)
// 全局注册 element 组件库
Vue.use(ElementUI)
// 关闭vue的生产提示
Vue.config.productionTip = false

// 创建vue 根实例
//创建vm
new Vue({
  // el: '#app'  //等价于 $mount('#app')
	el:'#app',
  // 通过render方法把App根组件渲染到#app入口节点
	render: h => h(App),
	router:router
})


