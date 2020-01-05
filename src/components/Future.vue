<template lang="html">
<div>
  <h3>即将上映的列表</h3>
  <!-- <div class="tabs">
    <div>
      <router-link to='/film/future/tab1'>tab1</router-link>
    </div>
    <div>
      <router-link to="/film/future/tab2">tab2</router-link>
    </div>
  </div>
  <router-view></router-view> -->
</div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.tabs {
  display: flex;
  width: 50%;
  margin: 0 auto;
  &>div {
    flex: 1;
    text-align: center;
    height: 30px;
    line-height: 30px;
    border: 1px solid gray;
    cursor: pointer;
  }
}
</style>
