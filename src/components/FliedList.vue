<template>
  <div class="flied-list">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:'FliedList',
}
</script>
<style lang="scss" scoped>
@import "../assets/scss/_mixin.scss";
.flied-list{
  margin: $offset 0;
}
</style>