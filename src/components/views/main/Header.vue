<template>
    <div :style = "styles" :class="[{activity: isActivity}]">
      <p>{{addMessage}}</p>
      <p v-on:click="showMessage(isShow)">{{welcomes}}</p>
      <div v-if="isShow">{{mesg}}</div>
      <div v-show="isShow">{{mesg}}</div>
    </div>
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
