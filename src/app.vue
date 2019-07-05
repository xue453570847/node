<template>
  <div id="app">
    <my-header></my-header>
    <!-- <header class="header">
      <router-link to="/home">Home</router-link>
      <router-link to="/project">Project</router-link>
      <router-link to="/list">List</router-link>
    </header> -->
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
    <!-- <my-footer></my-footer> -->
  </div>
</template>
<script>
import MyFooter from './components/footer.vue'
import MyHeader from './components/head.vue'
export default {
  components: {
    MyFooter,
    MyHeader
  }
}
</script>
<style lang="scss">
.clearfix:after,.clearfixVisible:after{content:"."; display:block; height:0; visibility:hidden; clear:both; }
.clearfix,.clearfixVisible{ *zoom:1; }
*{
  margin: 0;
  padding: 0;
}
#app{
  margin-top: 58px;
}
ul,li{
  list-style: none;
}
a{
  text-decoration: none;
}
</style>
