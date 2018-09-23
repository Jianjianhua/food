<template>
  <div class="cell" :class="{noPad:noPad}" @click="goPage">
    <div class="content">
      <div class="top">
        <h3 class="title"><i :class="`icon-${icon}`" v-if="icon"></i>{{title}}</h3>
        <slot name="value">
          <div class="value">
            {{ value }}
          </div>
        </slot>
      </div>
      <slot name="bottom"></slot>
    </div>
    <span class="icon" v-if="to || showArrow">
      <i class="fa fa-angle-right"></i>
    </span>
  </div>
</template>
<script>
export default {
  name: "Cell",
  props: {
    icon:String,
    value: {
      type: String
    },
    title: {
      type: String
    },
    to: {
      type: String
    },
    noPad: {
      type: Boolean
    },
    showArrow: Boolean
  },
  methods: {
    goPage() {
      if (this.to) {
        this.$router.push(this.to);
      } else {
        this.$emit("click");
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/_mixin.scss";
.cell {
  flex: 1;
  display: flex;
  padding: $offset / 2 $offset;
  background: #fff;
  justify-content: space-between;
  align-items: center;
  min-height: 3em;
  &.noPad {
    padding: $offset / 2 0;
  }
  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    .top {
      display: flex;
      justify-content: space-between;
      width: 100%;
      .title{
        display: flex;
        align-items: center;
        i{
          color: fontColor(gray);
          font-size: 1.4em;
          // margin-right: $offset;
          width: 40px;
        }
      }
    }
    .right {
      display: flex;
      align-items: center;
      .value {
        margin-right: $offset;
      }
    }
  }
  .icon {
    // width: 2em;
    padding-left: $offset;
    color: fontColor(gray);
    font-size: 2em;
  }
}
</style>