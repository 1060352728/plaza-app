<template>
  <header>
    <div class="top center">
      <div class="left fl">
        <ul>
          <li><a href="" target="_blank">小米商城</a></li>
          <li>|</li>
          <li><a href="">MIUI</a></li>
          <li>|</li>
          <li><a href="">米聊</a></li>
          <li>|</li>
          <li><a href="">游戏</a></li>
          <li>|</li>
          <li><a href="">多看阅读</a></li>
          <li>|</li>
          <li><a href="">云服务</a></li>
          <li>|</li>
          <li><a href="">金融</a></li>
          <li>|</li>
          <li><a href="">小米商城移动版</a></li>
          <li>|</li>
          <li><a href="">问题反馈</a></li>
          <li>|</li>
          <li><a href="">Select Region</a></li>
          <div class="clear"></div>
        </ul>
      </div>
      <div class="right fr">
        <div class="gouwuche fr"><a href="">购物车</a></div>
        <div class="fr">
          <ul>
            <li><router-link to="/">登录</router-link></li>
            <li>|</li>
            <li><a href="./register.html" target="_blank" >注册</a></li>
            <li>|</li>
            <li><a href="">消息通知</a></li>
          </ul>
        </div>
        <div class="clear"></div>
      </div>
      <div class="clear"></div>
    </div>
  </header>
</template>

<script>
    export default {
        name: "Header",
        data() {
          return {
            welcomes: "欢迎使用",
            mesg: "网上购物商城",
            styles: {
              color: "red"
            },
            isActivity: true,
            isShow: false
          }
        },
      computed: {
        addMessage() {
          return this.welcomes + "" + this.mesg
        }
      },
      methods: {
        showMessage(isShow){
          this.isShow = !isShow
        }
      }
    }
</script>

<style scoped>
  .activity {font-size: 20px;}
</style>
