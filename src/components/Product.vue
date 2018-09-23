
<template>
  <router-link tag="div" :to="`/detail/${product.id}`" class="product">
    <div class="pic">
      <img v-lazy="product.pic" alt="">
    </div>
    <div class="detail">
      <h3>{{ product.name }}</h3>
      <div class="product-pos">
        <p>最近点:{{ product.dian }}</p>
        <p>{{ product.d }}m</p>
      </div>
      <div class="product-money">
        <p>
          <span class="price">{{ product.price | price }}</span>
          <span class="old-price">{{ product.oldPrice | price }}</span>
        </p>
        <Rate :rate="product.fen"></Rate>
        <!-- TODO: 这里应该要有评分组件 -->
      </div>
      <div class="other">
        <div class="support">
          支持：
          <span v-for="(item,index) in product.supportTypes" :key="index">
            {{ item }}
            <template v-if="index!==product.supportTypes.length-1">
              、
            </template>
          </span>
        </div>
        <div class="scal-count">
          月销量: {{ product.scalCount }}
        </div>
      </div>
    </div>
  </router-link>
</template>
<script>
export default {
  name: "Product",
  props: {
    product: {
      type: Object,
      required: true
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/_mixin.scss";
.product {
  display: flex;
  padding: $offset;
  background: #fff;
  border-top: 1px solid color(bc);
  .pic {
    width: 188px;
    height: 188px;
    background: red;
    img{
      width: 100%;
      vertical-align: middle;
    }
  }
  .detail {
    flex: 1;
    padding-left: $offset;
    h3 {
      font-size: fontSize(26);
      margin-bottom: 20px;
    }
    .product-pos {
      display: flex;
      justify-content: space-between;
      color: fontColor(gray);
      font-size: fontSize(20);
    }
    .product-money {
      display: flex;
      justify-content: space-between;
      margin-top: 54px;
      margin-bottom: $offset;
      p {
        span {
          &.price {
            font-size: fontSize(26);
            color: color(orange);
          }
          &.old-price {
            font-size: fontSize(18);
            color: fontColor(gray);
            text-decoration: line-through;
          }
        }
      }
    }
  }
  .other{
    display: flex;
    justify-content: space-between;
    color: fontColor(gray);
    font-size: fontSize(18);
  }
}
</style>