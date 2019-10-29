<template lang="html">
  <div>
    <h1>影院页面</h1>

    <div v-text='$store.state.userinfo.name'></div>

    <h4 v-text='$store.state.musicList.length'></h4>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
