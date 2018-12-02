<template>
  <div>
    <p v-html="html"></p>
    <p>{{addNamePss}}</p>
    <p>{{getAddNamePss()}}</p>
    <p>{{fullName1}}</p>
    <p>{{fullName2}}</p>
    <p><input type="text" name="username" v-model="username">{{username}}</p>
    <p><input type="text" name="password" v-model="password">{{password}}</p>
    <select>
      <option v-for="item in arr">
        {{item}}
      </option>
    </select>
    <div>
      <input type="radio" value="one" v-model="isRemaberMe">记住我
      <input type="radio" value="two" v-model="isRemaberMe">下次再说
    </div>
    <button v-on:click="login">登录</button>
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
      this.$router.push({path: '/main'});
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
