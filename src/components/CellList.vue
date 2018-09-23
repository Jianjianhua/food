<template>
  <div class="cell-list">
    <div class="title" v-if="title">
      {{ title }}
    </div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:'CellList',
  props:{
    title:{
      type:String
    }
  } 
}
</script>
<style lang="scss" scoped>
@import "../assets/scss/_mixin.scss";
.cell-list{
  margin: $offset 0;
  background: #fff;
  .title{
    padding: $offset;
    color: fontColor(gray);
  }
}
</style>