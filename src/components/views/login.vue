<template>
  <div>
    <p v-html="html"></p>
    <p><input type="text" name="username" v-model="username">{{username}}</p>
    <p><input type="text" name="password" v-model="password">{{password}}</p>
    <select>
      <option v-for="item in arr">
        {{item}}
      </option>
    </select>
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
      html: "<h1>请登录</h1>"
    }
  },
  methods: {
    login: function (){
      this.$router.push({path: '/main'});
    }
  }
}
</script>
