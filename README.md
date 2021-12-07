# toutiao-publish-admin

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### vue 脚手架项目搭建
1、全局安装脚手架
   npm install -g @vue/cli
  低版本安装
  npm install -g @vue/cli-init
2、在想要创建项目的目录下打开cmd命令行（选择需要安装的一个版本即可）
   注：hello-word是我要安装的项目名，根据实际需求更改项目名
  （1）3.X版本安装（不会看到webpack的配置文件）
   vue create hello-world
3、安装步骤教程
  （1）3.X安装步骤：
   ①、系统将提示您选择预设：   
      可以选择基本Babel + ESLint设置附带的默认预设，也可以选择“手动选择功能”以选择所需的功能 (推荐选择第二个，手动选择)
   ②、根据个人需要选择配置项（选择方法：空格即可）
   ③、路由是否选择history模式（推荐选择 y，如果选择n，路由将默认为hash模式）
   ④、selint语法选择（推荐选择eslint+standard config:标准模式）
   ⑤、检测方式（推荐选择lint on sava）
   ⑥、文件类型（推荐使用json）
   ⑦、保存当前的配置为预设，以供未来使用（推荐使用 y）
   ⑧、保存预设并命名
  （2）低版本安装步骤：
      前面四步都可以一路回车，第五步询问是否安装vue-router，选择是，第六步使用eslint代码检查，根据个人情况选择是或否，第七步设置单元测试，选择否，第八步测试监听，选择否，第九步选择npm即可，等待安装完成
   （其实安装都没有固定的步骤，完全根据个人项目需求，这里只是推荐大众化的步骤）  
  链接：https://juejin.cn/post/6844904037674909709
4、文件夹详解 
  （1）、src文件夹放置所有的资源文件，一般会被webpack用来打包
    ①assets文件夹放置资源文件，如：css，js，fonts
    ②components文件夹放置所有的子组件，即每个页面级组件的子组件，例如：index页面级组件，把它分为header、content、footer三部分，只要在components文件夹下新建一个index文件夹（为了区分其他组件），放入对应的子组件
    ③pages文件夹放置所有的页面级组件
    ④router文件夹中index用来配置路由信息
    ⑤main.js是入口文件，可在此引入公共的样式等
  （2）、static放置的资源文件不会最终被weback打包（一般放置图片文件和本地模拟的json数据）
5、更改配置
（1）、更改App.vue文件
    <template>
        <div id="app">
            <img src="/static/logo.png">
            <router-view/>
        </div>
    </template>
    更改为：（目的：插入一个路由插槽，进行页面的跳转，显示不同的路由）
    <template>
        <router-view></router-view>
    </template>
（2）、更改main.js文件
    new Vue({
        el: '#app',
        router,
        components: { App },
        template: '<App/>'
    })

   更改为：（目的：以app做为根组件，每次在路由插槽渲染页面）（如果有语法报错，禁用eslint检查即可）
    new Vue({
        el: '#app',
        router,
        render(h){
            return h(App)
        }
    })
（3）、更改router文件夹的index文件（根据项目需求，引入对应页面，配置路由信息，进行页面跳转）（  /  代表跟路径）
    import Vue from 'vue'
    import Router from 'vue-router'
    // import HelloWorld from '@/components/HelloWorld'
    // 首页
    import Index from "../pages/Index";
    // 登录
    import Login from "../pages/Login"

    Vue.use(Router);

    export default new Router({
      linkExactActiveClass: "act",
      mode: "history",
      routes: [
        {
          path: '/Index',
          name: 'Index',
          component: Index
        },
        {
          path: '/',
          name: 'Login',
          component: Login
        }
      ]
    })
6、项目启动方式
 （1）3.X版本启动方式
     npm run serve
  （2）低版本启动方式
     npm run dev

### git(提交代码)
1、创建远程仓库(GitHub,Gitee,coding...)
2、如果没有本地仓库
  echo "# toutiao-publish-admin" >> README.md
  # 初始化本地仓库
  git init
  # 把文件添加到暂存区
  git add README.md
  # 把暂存区文件提交到本地仓库形成历史记录
  git commit -m "first commit"
  
  # 添加远程仓库地址到本地仓库
  git remote add origin https://github.com/hyjAdmin/toutiao-publish-admin.git
  # 推送到远程仓库
  git push -u origin master
3、如果已有本地仓库
  # VueCli 在创建项目的时候自动帮我们初始化了Git仓库，并且基于初始化代码默认执行了一次提交
  git remote add origin https://github.com/hyjAdmin/toutiao-publish-admin.git
  
  # -u 记住本次推送的信息，下次就不用谢推送信息了，可以直接 git push
  git push -u origin master
4、之后如果代码有变动需要提交
  git add
  git commit
  # 推送到远程仓库 
  git push
### note
5、no-repeate
  CSS 里的 no-repeat是针对背景图来说的。当你设置了no-repeat这个属性后，你的背景图将不会被重复，再换一种说法，你在网站上所看见的背景图就是你所增加的图， 不会出现平铺或重复的现象