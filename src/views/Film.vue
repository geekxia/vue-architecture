<template lang="html">
  <div>

    <h1>首页</h1>

    <div class="tabs">
      <!-- <span>正在热映</span>
      <span>即将上映</span> -->

      <!-- 声明式路由 -->
      <router-link to='/film/hot' tag='span' activeClass='active'>正在热映</router-link>
      <router-link to='/film/future' tag='span' activeClass='active'>即将上映</router-link>

    </div>

    <!-- 在这里渲染二级路由所对应的组件 -->
    <router-view></router-view>



  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.tabs {
  height: 1.2rem;
  font-size: 0.5rem;
  line-height: 1.2rem;
  text-align: center;
  box-sizing: border-box;
  /* border: 1px solid gray; */
}
.tabs span {
  display: inline-block;
  width: 50%;
}
.list {
  width: 5rem;
  margin: 0 auto;
  border: 1px solid gray;
}
.active {
  border-bottom: 2px solid red;
  color: red;
}
</style>
