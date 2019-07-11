<template>
  <div class="login">
    <div class="sign">
      <div class="logo">
        <router-link to="/">
          <a class="text">前端</a>
        </router-link>
      </div>
      <div class="main">
        <h4 class="title">
          <div class="normal-title">
              <router-link to="/login">
                <a class="active">登录</a>
              </router-link>
              <b>·</b>
              <router-link to="/register">
                <a class="register">注册</a>
              </router-link>
          </div>
        </h4>
        <div class="widget">
          <el-input
            placeholder="请输入用户名"
            v-model="username"
            clearable>
          </el-input>
          <el-input class="widget--password" placeholder="请输入密码" v-model="password" show-password></el-input>
          <el-button class="widget--btn" type="primary" round @click="gologin">登录</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Tools from '../util/tools.js'
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  mounted () {
  },
  methods: {
    gologin () {
      axios({
        method: 'POST',
        url:'http://106.12.57.4:3000/user/login',
        data: {
          username: this.username,
          password: this.password
        }
      }).then((res)=>{
        if (res.data.code != 0) {
          this.open4(res.data.desc)
        } else {
          const response = JSON.parse(res.data.userInfo)
          Tools.setCookie('username', response.username)
          this.$router.push('/')
        }
      })
    },
    open4(message) {
      this.$notify.error({
        title: '错误',
        message: message
      });
    }
  }
}
</script>

<style lang="scss">
.login{
  height: 100%;
  .sign{
    height: 100%;
    min-height: 750px;
    text-align: center;
    font-size: 14px;
    background-color: #f1f1f1;
    .logo{
      // font-size: 24px;
      // color: #ea6f5a;
      // line-height: 58px;
      // padding-left: 20px;
      .text{
        font-size: 24px;
        color: #ea6f5a;
        line-height: 58px;
        padding-left: 20px;
        text-align: left;
      }
    }
    .main{
      box-sizing: border-box;
      width: 400px;
      margin: 60px auto 0;
      padding: 50px 50px 80px;
      background-color: #fff;
      border-radius: 4px;
      box-shadow: 0 0 8px rgba(0,0,0,.1);
      vertical-align: middle;
      display: inline-block;
      .title{
        margin: 0 auto 50px;
        padding: 10px;
        font-weight: 400;
        color: #969696;
        .active{
          font-weight: 700;
          color: #ea6f5a;
          border-bottom: 2px solid #ea6f5a;
        }
        .register{
          padding: 10px;
          color: #969696;
        }
        a{
          padding: 10px;
          font-size: 18px;
        }
      }
      .widget{
        &--password{
          margin-top: 10px;
        }
        &--btn{
          width: 100%;
          margin-top: 20px;
        }
      }
    }
  }
}
</style>
