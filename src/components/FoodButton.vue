<template>
  <button class="food-button" :disabled="disabled" :class="classes" @click="$emit('click')">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "FoodButton",
  props: {
    type: {
      type: String,
      default: "primary"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "md"
    },
    round: {
      type: Boolean,
      default: false
    },
    block:{
      type:Boolean,
      default:false
    }
  },
  computed: {
    classes() {
      const cls = [];
      Object.keys(this.$props).forEach(item => {
        console.log(item, item !== "round", this[item]);
        if (item !== "round" && item !== "disabled") {
          cls.push(`food-button-${this[item]}`);
        }
      });
      console.log(cls);
      if (this.round) {
        cls.push(`food-button-round`);
      }

      if(this.block){
        cls.push('food-button-block')
      }

      return cls;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/_mixin.scss";
.food-button {
  border: 1px solid color(orange);
  border-radius: 5px;
  outline: none;
  &:active {
    opacity: 0.8;
  }
  &-block{
    width: 100%;
    display: block;
  }
  &-primary {
    background: color(orange);
    color: #fff;
  }
  &-primary-line {
    color: color(orange);
    background: #fff;
    border: solid 3px color(orange);
  }
  &-default {
    background: #fff;
    border: solid 3px #c9c7c7;
  }
  &-round {
    border-radius: 30px;
  }
  &:disabled {
    background: fontColor(lightGray);
    color: #fff;
    border-color: fontColor(lightGray);
  }
  &-invser {
    background: #fff;
    color: color(orange);
  }
  &-sm {
    font-size: fontSize(22);
    padding: 14px 28px;
  }
  &-md {
    font-size: fontSize(20);
    padding: 20px 28px;
  }
  &-lg {
    font-size: fontSize(30);
    padding: 22px 196px;
  }
}
</style>