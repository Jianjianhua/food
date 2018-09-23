<template>
  <div class="slide" :style="style" @touchstart="start" @touchmove="move" @touchend="end">
    <div class="left" ref="left">
      <slot name="left"></slot>
    </div>
    <div class="content">
      <slot></slot>
    </div>
    <div class="right" ref="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "Slider",
  props: {
    //滑动方向
    dir: {
      type: String,
      default: "right"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      style: "transform:translate3d(0,0,0)",
      startX: 0, //触摸开始的x
      disX: 0 //滑动的距离
    };
  },
  methods: {
    start(e) {
      // e.touches.length == 1 判断有几个手指触摸
      if (e.touches.length == 1) {
        // 保存当前的x
        this.startX = e.touches[0].clientX;
      }
    },

    // 获取左边块的宽度
    getLeftWidth() {
      return this.$refs.left.offsetWidth;
    },
    // 获取右边块的宽度
    getRightWidth() {
      return this.$refs.right.offsetWidth;
    },
    move(e) {
      if (e.touches.length == 1) {
        // 计算滑动的距离
        this.disX = e.touches[0].clientX - this.startX;

        // 判断组件是定义往哪边滑动，调用各自的函数
        if (!this.disabled) {
          if (this.dir === "right") {
            this.moveRight();
          } else if (this.dir === "left") {
            this.moveLeft();
          }
        }
      }
    },
    end() {
      const leftWidth = this.getLeftWidth();
      const rightWidth = this.getRightWidth();
      if (!this.disabled) {
        if (this.dir === "right") {
          if (this.disX > leftWidth / 2) {
            this.disX = leftWidth;
            this.style = `transform:translate3d(${this.disX}px,0,0)`;
          } else {
            this.reset();
          }
        } else if (this.dir === "left") {
          if (this.disX > rightWidth / 2) {
            this.disX = rightWidth;
            this.style = `transform:translate3d(${this.disX}px,0,0)`;
          } else {
            this.reset();
          }
        }
      }
    },
    moveRight() {
      if (this.disX > 0) {
        //向右滑动,显示左边

        //边界计算
        this.disX =
          this.disX > this.getLeftWidth() ? this.getLeftWidth() : this.disX;

        //更新样式
        this.style = `transform:translate3d(${this.disX}px,0,0)`;
      } else if (this.disX < 0) {
        //向左滑动，恢复正常
        this.reset();
      }
    },
    moveLeft() {
      if (this.disX < 0) {
        //向左滑动,显示右边
        this.disX =
          Math.abs(this.disX) > this.getRightWidth()
            ? this.getRightWidth()
            : Math.abs(this.disX);
        this.style = `transform:translate3d(-${this.disX}px,0,0)`;
      } else if (this.disX > 0) {
        //向右滑动，恢复正常
        this.reset();
      }
    },
    reset() {
      this.style = `transform:translate3d(0px,0,0)`;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/_mixin.scss";
.slide {
  position: relative;
  width: 100%;
  background: #fff;
  transition: all 0.5s;
  .left,
  .right {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    padding: $offset;
    z-index: 1;
    height: 100%;
    // background: red;
    background: #fff;
  }
  .left {
    left: 0;
    // left: 100%;
    transform: translateX(-101%);
  }
  .right {
    transform: translateX(101%);
    right: 0;
  }
}
</style>