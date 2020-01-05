<template>
  <div>
    <!-- <TodoList></TodoList> -->
    <!-- <TestSass></TestSass> -->

    <!-- 这个组件是路由视图容器 -->
    <!-- <router-view name='aaa'></router-view>
    <router-view name='bbb'></router-view> -->
    <router-view></router-view>

  </div>
</template>

<script>
// ES6模块化语法
// import TodoList from '@/components/TodoList.vue'
// import TestSass from '@/components/TestSass.vue'


export default {
  // 注册成局部组件
  components: {
    // TodoList,
    // TestSass
  },
  mounted() {
    
  },
  methods: {
  }
}
</script>

<style lang='scss' scoped>

</style>
