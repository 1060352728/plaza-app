<template>
  <div>
    <Header>
      <span>admin</span>
      <span slot="header">header</span>
      <span slot="body" slot-scope="prop">{{prop.seller}} {{prop.buyer}}</span>
    </Header>
    <table class="table">
      <thead>
        <tr>
          <th><input type="checkbox" v-on:click="allIsChcked(isCheckedAll)" :checked="isCheckedAll"></th>
          <th>编号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>电话</th>
          <th>住址</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value, index) in arr">
          <td><input type="checkbox" :value="value.id" :checked="checkeds.indexOf(value.id) > -1" v-on:click="checkedOne(value.id)" v-model="checkeds"></td>
          <td>{{index + 1}}</td>
          <td>{{value.name}}</td>
          <td>{{value.age}}</td>
          <td>{{value.phone}}</td>
          <td>{{value.address}}</td>
        </tr>
      </tbody>
    </table>
    <Footer></Footer>
  </div>
</template>

<script>

import Header from '@/components/views/main/Header';
import Footer from '@/components/views/main/Footer';

export default {
  name: 'Home',
  data () {
    return {
      arr: [
        {"id":"1","name":"张三","age":"23","phone":"13259421254","address":"西安"},
        {"id":"2","name":"李四","age":"24","phone":"13233421254","address":"北京"},
        {"id":"3","name":"王五","age":"25","phone":"13745634587","address":"上海"},
        {"id":"4","name":"赵六","age":"26","phone":"13223475643","address":"天津"}
      ],
      isCheckedAll: false,
      checkeds: ["1","2"]
    }
  },
  methods: {
    allIsChcked(isCheckedAll){
      this.isCheckedAll = !isCheckedAll;
      if (this.isCheckedAll) {// 全选时
        this.arr.forEach(function (arr) {
          this.checkeds.push(arr.id)
        }, this)
      } else {
        this.checkeds = []
      }
    },
    checkedOne(id){//单选
      let idIndex = this.checkeds.indexOf(id);
      if (idIndex >= 0) {
        // 如果已经包含了该id, 则去除(单选按钮由选中变为非选中状态)
        this.checkeds.splice(idIndex, 1);
      } else {
        // 选中该checkbox
        this.checkeds.push(id);
      }
      console.log(this.checkeds);
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>
