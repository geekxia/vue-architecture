<template lang="html">
  <h1>我的收益</h1>
</template>

<script>
export default {
  // 局部的路由守卫，路由拦截
  // beforeRouteEnter: function(to, from, next) {
  //   let isLogin = false
  //   if (!isLogin) {
  //     next('/login')
  //   } else {
  //     next()
  //   }
  // },

  // 箭头函数的写法
  beforeRouteEnter(to, from, next) {
    let isLogin = true
    if (!isLogin) {
      next('/login')
    } else {
      next()
    }
  }
}
</script>

<style lang="css" scoped>
</style>
