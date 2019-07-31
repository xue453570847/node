<template>
  <div class="head" v-show="show">
    <span class="head__desc">前端</span>
    <ul class="head__ul">
      <router-link to="/home">
        <li class="head__li--home">首页
        </li>
      </router-link>
      <router-link to="/register" v-show="!isLogin">
        <li class="head__li--register">
          注册
        </li>
      </router-link>
      <router-link to="/login" v-show="!isLogin">
      <li class="head__li--login">
        登录
      </li>
      </router-link>
      <li class="head__li--active" v-show="isLogin">
        Welcome back <span>{{user}}</span>
      </li>
      <router-link to="/project">
        <li class="head__li--pro">
          <el-button type="danger" round>
            <i class="el-icon-edit"></i>
            写文章</el-button>
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
import Tools from '../util/tools.js'
export default {
  name: 'MyHeader',
  data () {
    return {
      show: true,
      isLogin: false,
      user: ''
    }
  },
  watch:{
    '$route':'getPath'
  },
  mounted () {
    this.getPath()
  },
  methods: {
    getPath(){
      // 路由变化 判断是否有头部 & 判断用户是否登录
      if (Tools.getCookie('username')) {
        this.isLogin = true
        this.user = Tools.getCookie('username')
      } else {
        this.isLogin = false
      }
      let flag = true
      if (this.$route.path.indexOf('login') > -1 || this.$route.path.indexOf('register') > -1
      || this.$route.path.indexOf('project') > -1){
        flag = false
      } else {
        flag = true
      }
      this.show =  flag
    }
  }
}
</script>

<style lang="scss">
.head{
  transform: translateZ(0);
  position: fixed;
  top: 1px;
  width: 100%;
  height: 58px;
  background: #fff;
  border-top: 1px solid #e7e7e7;
  border-bottom:  1px solid #e7e7e7;
  &__desc{
    font-size: 24px;
    color: #ea6f5a;
    line-height: 58px;
    padding-left: 20px;
  }
  &__ul{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 750px;
    margin: 0 auto;
    height: 58px;
  }
  &__li{
    &--home{
      color: #ea6f5a;
      font-size: 18px;
      box-sizing: border-box;
      padding-top: 15px;
    }
    &--pro{
      position: fixed;
      right: 10px;;
      top: 9px;
    }
    &--register{
      border-radius: 20px;
      width: 80px;
      text-align: center;
      height: 38px;
      line-height: 38px;
      position: fixed;
      border: 1px solid rgba(236,97,73,.7);
      top: 9px;
      right: 150px;
      color: #ea6f5a;
    }
    &--login{
      color: #969696;
      position: fixed;
      top: 21px;
      right: 300px;
    }
    &--active{
      color: #969696;
      position: fixed;
      top: 21px;
      right: 200px;
      span{
        margin-left: 5px;
        color: forestgreen;
      }
    }
  }
}
</style>
