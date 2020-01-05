<template>
<div>
  <h1>卖座电影</h1>
  <div class="tabs">
    <!-- active-class给高亮样式 -->
    <!-- exact表示完全匹配 -->
    <div>
      <router-link to='/film' tag='span' active-class='on' exact>正在热映</router-link>
    </div>
    <div>
      <router-link to="/film/future" tag='span' active-class='on' exact>即将上映</router-link>
    </div>
  </div>
  <div class="content">
    <!-- 这个视图容器是子容器，用于显示路由中匹配成功的childen路由组件 -->
    <router-view></router-view>


    <!-- 在这里渲染二级路由所对应的组件 -->
    <!-- 带有 name 属性的router-view，叫做命名视图 -->
    <!-- <router-view name='b'></router-view> -->
    <!-- <router-view name='a'></router-view> -->
  </div>
</div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.tabs {
  display: flex;
  &>div {
    flex: 1;
    text-align: center;
    height: 50px;
    line-height: 50px;
    border: 1px solid gray;
    cursor: pointer;
  }
  &>div>.on {
    color: red;
    font-weight: bold;
  }
}
</style>
