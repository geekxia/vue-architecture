<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <TodoList></TodoList> -->
    <RemDemo></RemDemo>
    <h1>suoio3</h1>
    <div class="box"></div>
  </div>
</template>

<script>
// import TodoList from '@/components/TodoList.vue'
// import HelloWorld from '@/components/HelloWorld.vue'
import RemDemo from '@/components/RemDemo.vue'

// 尽量避免组件全局注册
// import Vue from 'vue'
// Vue.component('HelloWorld', HelloWorld)
// eslint报错，认真看控制台的报错信息，并修改
// ES6模块语法，表示抛出
export default {
  name: 'app',
  data: function() {
    return {
      msg: ''
    }
  },
  // 局部组件
  components: {
    // HelloWorld,
    // TodoList,
    RemDemo
  },
  methods: {
    do: function() {
      var a = 1
      var b = 2
      // console.log(a, b)
      this.msg = a + b
    }
  }
}
</script>

<style>
html,body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
