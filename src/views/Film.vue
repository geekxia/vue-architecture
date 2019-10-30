<template lang="html">
  <div>
    <!-- 使用 ElementUI -->
    <el-input-number v-model="num" :step="2" size='small'></el-input-number>

    <h1>首页</h1>

    <div v-text='$store.state.count'></div>

    <div class="tabs">
      <!-- <span>正在热映</span>
      <span>即将上映</span> -->

      <!-- 声明式路由 -->
      <router-link to='/film/hot' tag='span' activeClass='active'>正在热映</router-link>
      <router-link to='/film/future' tag='span' activeClass='active'>即将上映</router-link>

    </div>

    <!-- 在这里渲染二级路由所对应的组件 -->
    <!-- 带有 name 属性的router-view，叫做命名视图 -->
    <router-view name='b'></router-view>
    <router-view name='a'></router-view>

    <!-- <div v-text='$store.state.isLogin'></div> -->

  </div>
</template>

<script>
export default {
  data: function() {
    return {
      num: 5
    }
  }
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
