<template>
  <div class="radio">
    <div class="input" :class="{'input-checked':checked}">
      <input type="radio" :checked="checked" @change="change" :name="name" :value="value" :disabled="disabled">
      <i class="fa fa-check"></i>
    </div>
    <span class="text" :class="{'input-checked-text':checked}">
      <slot></slot>
    </span>
  </div>
</template>
<script>
export default {
  name: "Radio",
  model: {
    prop: "modelValue",
    event: "change"
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    modelValue:{
      type:String
    }
  },
  data(){
    return {
      checked:false
    }
  },
  methods: {
    change() {
      this.checked = !this.checked;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/_mixin.scss";
.radio {
  display: flex;
  align-items: center;
  .input {
    &.input-checked {
      background: color(orange);
      border-color: color(orange);
    }
    width: 25px;
    height: 25px;
    position: relative;
    border: solid 2px #999999;
    border-radius: 4px;
    input,
    i {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
    }
    input {
      z-index: 2;
      opacity: 0;
    }
  }
  .text{
    margin-left: 13px;
    &.input-checked-text{
      color: color(orange);
    }
  }
}
</style>