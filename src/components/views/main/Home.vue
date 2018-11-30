<template>
  <div>
    <Header></Header>
    <table>
      <thead>
        <tr>
          <th></th>
          <th>编号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>电话</th>
          <th>住址</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value, index) in arr">
          <td><input type="checkbox"></td>
          <td>{{index}}</td>
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
        {"name":"张三","age":"23","phone":"13259421254","address":"西安"},
        {"name":"李四","age":"24","phone":"13233421254","address":"北京"},
        {"name":"王五","age":"25","phone":"13745634587","address":"上海"},
        {"name":"赵六","age":"26","phone":"13223475643","address":"天津"}
        ]
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>
