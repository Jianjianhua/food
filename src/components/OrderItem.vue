
<template>
  <router-link tag="div" :to="`/detail/${order.id}`" class="order-item">
    <div class="pic">
      <img v-lazy="order.shop.pic" alt="">
    </div>
    <div class="detail">
      <h3>{{ order.shop.name }}</h3>
      <p class="desc">{{ order.shop.desc }}</p>
      <div class="support">
        支持：
        <span v-for="(item,index) in order.shop.support" :key="index">
          {{ item }}
          <template v-if="index!==order.shop.support.length-1">
            、
          </template>
        </span>
      </div>
      <div class="other">
        <div class="order-money">
          <p>
            <span class="price">{{ order.shop.price | price }}</span>
            <span class="old-price">{{ order.shop.oldPrice | price }}</span>
          </p>
        </div>
        <div class="scal-count">
          x{{ order.count }} 
        </div>
      </div>
    </div>
  </router-link>
</template>
<script>
export default {
  name: "OrderItem",
  props: {
    order: {
      type: Object,
      required: true
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/_mixin.scss";
.order-item {
  display: flex;
  padding: $offset;
  background: #fff;
  border-top: 1px solid color(bc);
  // justify-content: space-between;
  .pic {
    width: 188px;
    height: 188px;
    background: red;
    img {
      width: 100%;
      vertical-align: middle;
    }
  }

  .detail {
   
    // justify-content: space-between;
    height: 188px;
    width: calc(100% - 188px - 24px);
    .desc {
      @include singleText();
      color: fontColor(gray);
      margin-bottom: $offset;
    }
    padding-left: $offset;
    h3 {
      font-size: fontSize(26);
      margin-bottom: 20px;
    }
  }
  .support {
    color: fontColor(gray);
  }
  .other {
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    color: fontColor(gray);
    font-size: fontSize(18);
    .order-money {
      display: flex;
      justify-content: space-between;
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
}
</style>