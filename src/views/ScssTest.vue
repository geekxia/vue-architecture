<template lang="html">
<div class="page">
  <button type="button" name="button">测试Sass</button>

  <div class="box1">
    <button class="btn" type="button" name="button">测试Sass2</button>
  </div>

  <div class="box2">
    <button class="btn" type="button" name="button">测试Sass3</button>
  </div>
</div>


</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/common.scss';

.page {

  > button {
    font-size: $btnSize;
    color: $color;
  }

  > div {
    button {
      color: $color2;
    }
  }

  > .box1 {
    .btn {
      border: .03rem solid red;
    }
  }
}




</style>
