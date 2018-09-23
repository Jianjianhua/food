<template>
  <div class="popover" v-show="show">
    <transition name="fade">
      <div class="mark" v-if="show" @touchstart="close"></div>
    </transition>
    <transition name="slideUp">
      <div v-if="show" class="popover-content">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "Popover",
  data() {
    return {
      show: false
    };
  },
  methods: {
    open() {
      console.log('12312312');
      document.body.style.overflow='hidden';
      this.show = true;
    },
    close() {
      document.body.style.overflow='auto';
      this.show = false;
    }
  }
};
</script>
<style lang="scss">
@import "../assets/scss/_mixin.scss";
.fade-enter-active,
.fade-leave-active{
  transition: all 0.5s;
}
.fade-enter,
.fade-leave-to{
  opacity: 0
}

.slideUp-enter-active,
.slideUp-leave-active{
  transition: all 0.5s;
}
.slideUp-enter,
.slideUp-leave-to{
  transform: translateY(100%);
}
.popover {
  top: 0;
  left: 0;
  position: fixed;
  z-index: 1111;
  width: 100%;
  height: 100%;
  .mark {
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
  }
  &-content {
    z-index: 1;
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    background: #fff;
    padding: $offset;
  }
}
</style>