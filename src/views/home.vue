<template>
  <div class="home">
     <div class="home--div">
       <ul class="home--div__left">
         <li class="home--div__left--li" v-for="(item, index) in 10" :key="index">
          <router-link to="/detail">
           <p class="home--div__left--title">相见欢</p>
           <div class="home--div__left--desc">
      当日她哭着乞求她，说她不想嫁与王爷。 “你真愿与那人过浪迹天涯的生活，也不愿嫁与王爷？” “是，我保证我永远不会回来”第二日，王爷迎娶舞家大小姐...
          </div>
           <p class="home--div__left--like">
             <i class="el-icon-star-on"></i>
              82人喜欢
            </p>
          </router-link>
         </li>
         
       </ul>
       <ul class="home--div__right"></ul>
     </div>
  </div>
</template>
<script>
import { init } from '../api/home'
import { mapGetters } from 'vuex'
// import { Tabs, TabPane, Button } from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
export default {
  // 服务端路由进来时，就会触发这个函数
  // 触发请求，服务端获取数据，存到vuex中
  asyncData({ store, route }) {
    // 触发 action 后，会返回 Promise
    return store.dispatch('getAllData')
  },
  name: 'home',
  title: 'Home',
  data() {
    return {
      introduction: 'sssss'
    }
  },
  computed: {
    // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters([
      'totalRegister',
      'topMouthActiver'
    ]),
    totalActiver() {
      return this.$store.getters.totalActiver
    },
    todayLogin() {
      return this.$store.getters.todayLogin
    }
  }
}
</script>

<style lang="scss">
.home{
  width:750px;
  margin: 0 auto;
  margin-top: 58px;
  &--div{
    width: 100%;
    float: left;
    &__left{
      width: 70%;
      margin-right: 2%;
      &--li{
        padding: 30px 0;
        border-bottom: 1px solid #e7e7e7;
      }
      &--title{
        font-size: 18px;
        font-weight: 700;
        line-height: 1.5;
        color: #000;
      }
      &--desc{
        margin: 4px 0 12px;
        font-size: 13px;
        line-height: 24px;
        color: #999;
      }
      &--like{
        font-size: 12px;
        font-weight: 400;
        line-height: 20px;
        color: #ea6f5a;
        i{
          color: #ea6f5a;
        }
      }
    }
    &__right{
      width: 28%;
    }
  }
}
</style>