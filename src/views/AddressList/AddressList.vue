<template>
  <div class="address-list">
    <TopHeader bgColor="white" title="编辑收货地址">

    </TopHeader>
    <div class="list" v-if="hasAddress">
      <Address class="item" v-for="(address,index) in addressList" :key="index" :data="address" control></Address>
    </div>
    <div v-else class="not-address">
      <img :src="require('../../assets/img/not-address.png')" alt="">
    </div>
    <div class="add-address">
      +新增地址
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "address-list",
  computed: {
    ...mapGetters(["addressList", "hasAddress"])
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/_mixin.scss";
.address-list {
  .list {
    margin-top: $offset;
    .item {
      margin-bottom: $offset;
    }
  }
  .not-address {
    padding-top: 306px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 413px;
    }
  }
  .add-address {
    position: fixed;
    bottom: 0;
    background: #fff;
    left: 0;
    width: 100%;
    height: 98px;
    line-height: 98px;
    text-align: center;
    color: color(orange);
    font-size: fontSize(30);  
  }
}
</style>