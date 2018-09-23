<template>
  <div class="top-header" :class="handleClass">
    <div class="top-header-left">
      <slot name="left">
        <div class="back" @click="back">
           <i class="icon-angle-left"></i>
        </div>
      </slot>
    </div>
    <div class="top-header-center">
      <slot name="center">
        <div class="title">
           {{ title }}
        </div>
      </slot>
    </div>
    <div class="top-header-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name:'TopHeader',
  props:{
    title:{
      type:String,
    },
    bgColor:{
      type:String,
      default:'orange',
    }
  },
  computed:{
    handleClass(){
      return this.bgColor;
    }
  },
  methods:{
    back(){
      /* go方法，跳转页面前进，后退 */
      this.$router.go(-1);
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../assets/scss/_mixin.scss";
.top-header{
  display: flex;
  height: 88px;
  // background: #000
  &.orange{
    background: color(orange);
    color: #fff;
  }
  &.white{
    background: #fff;
    color: #333;
  }
  &-center{
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 4;
  }
  &-left,
  &-right{
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
  }
}
</style>