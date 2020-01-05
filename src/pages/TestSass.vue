<template>
  <div class="app">

    <div class="box">
      <div>
        <h3>1917 - 1</h3>
        <div>
          <h3>1917 -2</h3>
        </div>
      </div>
      <h3>1917 -3</h3>
    </div>

    <h3>1917 -4</h3>
    <hr>

    <h3 v-text='$store.state.count'></h3>

  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>

@import '@/assets/css/common.scss';

.app {

  &>h3 {
    color: $color1;
    font-size: $size1;
  }
  &>.box {
    &>h3 {
      color: $color2;
      font-size: $size2;
    }
    &>div {
      &>h3 {
        color: blue;
      }
      &>div {
        &>h3 {
          color: orange;
        }
      }
    }
  }
}

</style>
