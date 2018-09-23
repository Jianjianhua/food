<template>
  <div class="flied">
    <div class="input">
      <input 
        :type="type"
        :placeholder="placeholder"
        @input="$emit('input',$event.target.value)"
        :value="value"
      >
    </div>
    <div class="other">
      <slot name="other"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name:'Flied',
  props:{
    type:String,
    placeholder:String,
    value:String
  }
}
</script>
<style lang="scss" scoped>
@import "../assets/scss/_mixin.scss";
.flied{
  display: flex;
  background: #fff;
  justify-content: space-between;
  padding: 0 $offset;
  height: 74px;
  align-items: center;
  border-bottom: 1px solid color(bc);
  .input{
    flex: 1;
    display: flex;
    align-items: stretch;
    input{
      border: none;
      width: 100%;
    }
  }
}
</style>