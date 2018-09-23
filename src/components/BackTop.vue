<template>
  <transition name="fade">
    <div class="backTop" v-if="show" @click="goBack">
      <i class="fa fa-arrow-up"></i>
    </div>
  </transition>
</template>
<script>
export default {
  name: "BackTop",
  data() {
    return {
      show: false
    };
  },
  mounted() {
    window.addEventListener("scroll", () => {
      const scrollTop = document.documentElement.scrollTop;
      if (scrollTop > 500) {
        this.show = true;
      } else {
        this.show = false;
      }
    });
  }
};
</script>
<style lang="scss">
@import "../assets/scss/_mixin.scss";
.fade {
  &-enter {
    opacity: 0;
    &-active {
      transition: all 0.5s;
    }
  }
  &-leave {
    &-to {
      opacity: 0;
    }
    &-active {
      transition: all 0.5s;
    }
  }
}
.backTop {
  position: fixed;
  bottom: 30%;
  right: 0;
  width: 90px;
  height: 90px;
  background: color(orange);
  z-index: 999;
  border-radius: 100%;
  text-align: center;
  line-height: 90px;
  color: #fff;
  font-size: 2em;
}
</style>