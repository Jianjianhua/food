<template>
  <ul class="user-state">
    <li>
      <img v-if="!member" :src="icons.member.default" alt="">
      <img v-else :src="icons.member.active" alt="">
    </li>
    <li>
      <img v-if="!by" :src="icons.by.default" alt="">
      <img v-else :src="icons.by.active" alt="">
    </li>
    <li>
      <img v-if="!hj" :src="icons.hj.default" alt="">
      <img v-else :src="icons.hj.active" alt="">
    </li>
    <li>
      <img v-if="!zs" :src="icons.zs.default" alt="">
      <img v-else :src="icons.zs.active" alt="">
    </li>
  </ul>
</template>
<script>
const pic = key => ({
  default: require(`../assets/img/${key}-default.png`),
  active: require(`../assets/img/${key}.png`)
});
export default {
  name: "UserState",
  props: {
    member: {
      type: Boolean,
      default: false
    },
    by: {
      type: Boolean,
      default: false
    },
    hj: {
      type: Boolean,
      default: false
    },
    zs: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      icons: {
        member: pic("member"),
        by: pic("by"),
        hj: pic("hj"),
        zs: pic("zs")
      }
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/_mixin.scss";
.user-state {
  display: flex;
  li{
    width: 25px;
    height: 25px;
    // margin: 0 $offset/2 ;
    margin-right: 15px;
    img{
      width: 100%;
    }
  }
}
</style>