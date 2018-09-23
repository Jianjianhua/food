<template>
  <div class="rate">
    <i 
      class="icon-star" 
      v-for="n in 5" 
      :key="n"
      :class="{
        gray:n>rate,
        orange:n<=rate
      }"
    >

    </i>
  </div>
</template>
<script>
export default {
  name: "Rate",
  props: {
    rate: {
      type: Number
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/_mixin.scss";
.rate {
  i {
    margin-left: 3px;
    font-size: 1.3em;
    &.gray {
      color: fontColor(lightGray);
    }
    &.orange{
      color: color(orange);
    }
  }
}
</style>