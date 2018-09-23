<template>
  <transition name="show">
    <div class="toast" :class="pos" v-if="show">
      <i class="fa" v-if="icon" :class="classes"></i>
      <p class="text">{{ text }}</p>
    </div>
  </transition>
</template>
<script>
export default {
  data() {
    return {
      text: "",
      icon: "",
      pos: "top",
      show: false,
      autoClose:true,
      autoCloseTime:2000
    };
  },
  computed:{
    classes(){
      const icon = this.icon;
      if(icon==='loading'){
        return [ 'fa-spinner',' fa-spin' ]
      }
      return [ `fa-${icon}` ]
    }
  },
  mounted(){
    this.open();
    if(this.autoClose){
      setTimeout(()=>{
        this.close();
      },this.autoCloseTime)
    }
  },
  methods: {
    open() {
      this.show = true;
    },
    close() {
      this.show = false;
    }
  }
};
</script>
<style lang="scss">
@import "../../assets/scss/_mixin.scss";
.show {
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
.toast {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  padding: $offset;
  color: #fff;
  left: 50%;
  // transform: translate(-50%,-50%);
  &.center {
    top: 50%;
    transform: translate(-50%, -50%);
  }
  &.top {
    top: 5%;
    transform: translateX(-50%);
  }
  &.bottom {
    bottom: 5%;
    transform: translateX(-50%);
  }
  i{
    font-size: 3em;
  }
  p{
    padding: $offset 0 0;
    font-size: fontSize(28);
  }
}
</style>


