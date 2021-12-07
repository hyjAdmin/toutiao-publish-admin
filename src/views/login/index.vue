<template>
  <div class="login-container">
    <!-- 
      el-form 表单组件
      每个表单项都必须使用 el-form-item 组件包裹
     -->
    <el-form class="login-form" ref="form" :model="user">
      <el-form-item >
        <el-input 
          v-model="user.mobile"
          placeholder="请输入手机号">
        </el-input>
      </el-form-item>
      <el-form-item >
        <el-input 
          v-model="user.code"
          placeholder="请输入验证码">
        </el-input>
      </el-form-item>
      <el-form-itme>
        <el-checkbox v-model="checked">我已阅读并同意用户协议和隐私条款</el-checkbox>  
      </el-form-itme>
      <el-form-item>
        <el-button 
          class="loginBtn"
          type="primary" 
          @click="onLogin">
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>  
</template>

<script>
import request from '@/utils/request'
  export default {
    name: 'LoginIndex',
    components: {},
    props: {},
    data() {
      return {
        user: {
          mobile: '', // 手机号
          code: ''    // 验证码
        },
        checked: false // 是否同意协议的选中状态
      }
    },
    computed: {},
    watch: {},
    created () {},
    mounted () {},
    methods: {
      onLogin () {
        // 获取表单数据(根据接口要求绑定数据)
        const user = this.user
        // 表单验证
        // 验证通过， 提交登录
        request({ 
          method: 'POST',
          url: '/mp/v1_0/authorizations',
          // data 用来设置 POST 请求体
          data: user
        })
      }
    }
  }
</script>

<style scoped>
  .login-container {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url("./login_bg.jpg") no-repeat;
    background-size: cover;
  }
  .login-form {
      background-color: #fff;
      padding: 50px;
      min-width: 300px;
    }
  .loginBtn {
    width: 100%;
    margin-top: 10px;
  }
</style>