<template>
  <div class="home">
    <html>
<head>
	<meta charset="utf-8">
	<title>登陆</title>
	<link rel="stylesheet" href="test.css" type="text/css" media="all" />
</head><body>
<fieldset>
	<table background="http://img.tukuppt.com//ad_preview/00/03/30/5c98a556e3a89.jpg" width="1877" height="500">
		<tr height="170"> <td width="570px">
		</td>
			<td>
			</td>
		</tr>
		<tr><td>
		</td>
			<td>
				<table>
					<form method ="POST" action="http://192.168.1.101:5000/login" name="frmLogin"  >
					<tr><td class="test">用户名：</td>
						<td>
							<input type="text" name="username" size="20" maxlength="20" />
					    </td>
					</tr>
					<tr>
						<td>密  码：</td>
						<td><input type="password" name="password"  size="20" maxlength="20"  />
						</td>
					</tr>
					<tr>
						<td>验证码:</td>
						<td>
							<input type="text" size="" name="inputcode"  />
						</td>
						<td>
							<img src="https://g.csdnimg.cn/static/user-medal/chizhiyiheng.svg">
						</td>
						<td>
							<a href="#" onclick="shuaxin();">刷新</a>
						</td>
					</tr>
					<tr>
						<td><input type="checkbox" name="zlogin" value="1">自动登录</td>
					</tr>
				</table>
			</td>
		<tr>
		<td>
		</td>
		<td>
			<table>
				<tr>
					<td>
						<input type="submit" name="login" value="登录" onClick="return validateLogin()"/>
					</td>
					<td>
						<input type="reset" name="rs" value="重置">
					</td>
					<td>
						<input type="button" name="button" value="注册" onclick="location.href='http://192.168.1.101:5000/registered'">
					</td>
				</tr>
				</tr>
			</table>
		</td>
	</table>
</fieldset>
</form>
<script src="test.js"></script>
</body>
</html>

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