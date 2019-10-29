<template>
  <div id="app">

     <!-- <div @touchstart='skipTodo'>打开todolist</div> -->

     <div class="navbar">

       <!-- <span>电影</span>
       <span>影院</span>
       <span>资讯</span>
       <span>我的</span> -->

       <!-- <a href="/#/film">电影</a>
       <a href="/#/movie">影院</a>
       <a href="/#/news">资讯</a>
       <a href="/#/user">我的</a> -->


       <!-- 声明式路由 -->
       <!-- to 指定要跳转至哪个路由 -->
       <!-- tag 指定用什么HTML标签来替换渲染router-link -->
       <!-- activeClass 指定导航选项卡的高亮样式 -->
       <router-link to='/film' tag='span' activeClass='on'>电影</router-link>
       <router-link to='/movie' tag='span' activeClass='on'>影院</router-link>
       <router-link to='/news' tag='span' activeClass='on'>资讯</router-link>
       <router-link to='/user' tag='span' activeClass='on'>我的</router-link>




     </div>

     <!-- 在这里承载一级路由所对应的组件，在这里渲染一线路由所对应的组件 -->
     <router-view></router-view>
     <!-- <router-view name='geek'></router-view> -->



  </div>
</template>

<script>
// import TodoList from '@/components/TodoList.vue'
// import HelloWorld from '@/components/HelloWorld.vue'
// import RemDemo from '@/components/RemDemo.vue'

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
    // RemDemo
  },
  methods: {
    do: function() {
      var a = 1
      var b = 2
      // console.log(a, b)
      this.msg = a + b
    },
    tapClick() {
      alert('tap')
    },
    fn1(e) {
      console.log('start', e)
    },
    fn2(e) {
      console.log('move', e)
    },
    fn3(e) {
      console.log('end', e)
    },
    skipTodo() {
      this.$router.push({name: 'todo', params: {}})
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
.navbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 0.8rem;
  line-height: 0.8rem;
  font-size: 0.5rem;
  text-align: center;
  box-sizing: border-box;
  border: 1px solid gray;
}
.navbar span {
  display: inline-block;
  width: 25%;
}
.on {
  color: red;
}
</style>
