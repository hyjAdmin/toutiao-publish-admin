
import VueRouter from 'vue-router'
import Login from '@/views/login/'
/* 
  @   等价于    //'../views/login'

  在 VueCli 创建的项目中， @ 表示 src 目录
  他是 src 目录的路径别名
  好处是它不受当前文件路径的影响
  注意：@ 就是 src 路径， 后面别忘了写 '/'
  使用建议：如果加载的资源路径就在当前目录下，那就正常写
           如果需要进行父级路径查找的都使用 @
 */  

//创建并暴露一个路由器
export default new VueRouter({
	routes:[
		{
			path:'/login',
      name: 'login',
			component:Login
		},
		
	]
})