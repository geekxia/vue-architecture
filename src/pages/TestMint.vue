<template lang="html">
  <div>
    <!-- <mt-header fixed title="饿了么"></mt-header> -->
    <mt-switch v-model="value">开关</mt-switch>

    <mt-button type="primary">primary</mt-button>

    <mt-actionsheet
      :actions="actions"
      v-model="sheetVisible">
    </mt-actionsheet>
  </div>
</template>

<script>

// JS组件的使用
import Vue from 'vue'
import { Actionsheet } from 'mint-ui';

Vue.component(Actionsheet.name, Actionsheet);

export default {
  data: function() {
    return {
      value: '',
      sheetVisible: '',
      actions: [{name: '相册', methods: function() {}}, {name: '拍照', methods: function() {}}]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
