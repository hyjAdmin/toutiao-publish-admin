/* 
  项目启动入口
*/
import Vue from 'vue'
import App from './App.vue'
import './styles/index.less'
Vue.config.productionTip = false

//创建vue 根实例

new Vue({
  // 通过render方法把App根组件渲染到#app入口节点
  render: h => h(App),
  //el: '#app'  //等价于 $mount('#app')
}).$mount('#app')
