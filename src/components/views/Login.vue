<template>
  <!-- login -->
  <div class="logbackcol">
    <div class="top center">
      <div class="logo center">
        <a href="" target="_blank"><img src="../../../static/image/mistore_logo.png" alt=""></a>
      </div>
    </div>
    <form method="post" action="" class="form center">
      <div class="login">
        <div class="login_center">
          <div class="login_top">
            <div class="left fl">会员登录</div>
            <div class="right fr">您还不是我们的会员？<a href="" target="_self">立即注册</a></div>
            <div class="clear"></div>
            <div class="xian center"></div>
          </div>
          <div class="login_main center">
            <div class="username">用户名:&nbsp;<input class="shurukuang" type="text" name="username" placeholder="请输入你的用户名"/></div>
            <div class="username">密&nbsp;&nbsp;&nbsp;&nbsp;码:&nbsp;<input class="shurukuang" type="password" name="password" placeholder="请输入你的密码"/></div>
            <div class="username">
              <div class="left fl">验证码:&nbsp;<input class="yanzhengma" type="text" name="username" placeholder="请输入验证码"/></div>
              <div class="right fl"><img src="../../../static/image/yanzhengma.jpg"></div>
              <div class="clear"></div>
            </div>
          </div>
          <div class="login_submit">
            <input class="submit" type="button" v-on:click="login" value="立即登录" >
          </div>
        </div>
      </div>
    </form>
    <footer>
      <div class="copyright">简体 | 繁体 | English | 常见问题</div>
      <div class="copyright">小米公司版权所有-京ICP备10046444-<img src="../../../static/image/ghs.png" alt="">京公网安备11010802020134号-京ICP证110507号</div>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: '',
      arr: ["请选择", "买家", "卖家"],
      html: "<h1>请登录</h1>",
      username1: "buyer",
      password1: "111111",
      fullName1: "",
      fullName2: "",
      isRemaberMe: "one"
    }
  },
  methods: {
    login: function (){
      this.$router.replace({path: '/main'});
    },
    getAddNamePss(){
      console.log("getAddNamePss==========================");
      return "用户名：" + this.username1 + " " + "密码：" +this.password1;//效率较低，每次都会计算
    }
  },
  computed: {
    addNamePss(){
      console.log("addNamePss==========================");
      return "用户名：" + this.username1 + " " + "密码：" +this.password1;//效率比methods高，存在缓存，如果数据不变，就不会在重新计算
    }
  },
  watch: {  //不建议使用数据拼装,一般用在前台数据变化通知后台使用
    username(){ //当username发生变化时执行该方法，初始化不执行
      this.fullName1 = this.username + this.password1
    },
    password() {
      handle:  {
        this.fullName2 = this.username1 + this.password
      }
      immediate: true
    }
  }
}
</script>
<style scoped>
  @import '../../../static/css/login.css';
  .logbackcol{
    background: rgb(20,33,42);
  }
</style>
