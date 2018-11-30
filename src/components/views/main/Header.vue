<template>
    <div :style = "styles" :class="[{activity: isActivity}]">
      <p>欢迎使用</p>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data() {
          return {
            styles: {
              color: "red"
            },
            isActivity: true
          }
        }
    }
</script>

<style scoped>
  .activity {font-size: 20px;}
</style>
