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