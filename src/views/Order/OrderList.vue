<template>
  <div class="order-list" :class="{showBuyBox:type===0}">
    <TopHeader bgColor="white" title="我的订单">
      <i class="icon-menu" slot="right"></i>
    </TopHeader>
    <ul class="tabs">
      <li :class="{active:type==-1}" @click="type=-1">全部</li>
      <li :class="{active:type==0}" @click="type=0">待付款</li>
      <li :class="{active:type==1}" @click="type=1">订单跟踪</li>
      <li :class="{active:type==2}" @click="type=2">待评价</li>
      <li :class="{active:type==10}" @click="type=10">退款/售后</li>
    </ul>
    <Slider v-for="(order,index) in orderList" :key="index" :disabled="type!==0">
      <template slot="left">
        <CheckBox v-model="selects" :value="order.id"></CheckBox>
      </template>
      <OrderItem :order="order"></OrderItem>
    </Slider>
    <div class="buy-box" v-if="type===0">
      <p class="top">共{{ selects.length }}件商品,合计:
        <span>{{ allPrice | price }}</span>
      </p>
      <div class="bottom">
        <span>更多</span>
        <FoodButton type="default" size="sm" round>
          联系卖家
        </FoodButton>
        <FoodButton type="default" size="sm" round>
          取消订单
        </FoodButton>
        <FoodButton type="primary-line" size="sm" round @click="$router.push('/pay')">
          付款
        </FoodButton>
      </div>
    </div>
  </div>
</template>
<script>
import { ORDER_SATUS } from "../../model/index.js";
import { mapGetters, mapState } from "vuex";
export default {
  name: "order-list",

  data() {
    return {
      /* 
       -1  全部
        0        
      */
      type: 0,
      selects: []
    };
  },
  created() {
    const type = this.$route.query.type;
    this.type = type ? type : 0;
  },
  computed: {
    allPrice() {
      return this.selects.reduce((val, cur) => {
        const orders = this.orderWaitPayList.filter(item => {
          return item.id === cur;
        });
        const orderItem = orders ? orders[0] : null;
        return orderItem ? val + orderItem.price : val + 0;
      }, 0);
    },
    ...mapState({
      allOrderList: state => state.orderList
    }),
    ...mapGetters([
      "orderBackMoneyList",
      "orderWaitCommentList",
      "orderWaitPayList",
      "orderTailList"
    ]),
    orderList() {
      const {
        type,
        allOrderList,
        orderBackMoneyList,
        orderWaitCommentList,
        orderWaitPayList,
        orderTailList
      } = this;
      console.log(type);
      switch (type) {
        case -1:
          return allOrderList;
        case ORDER_SATUS.WAIT_PAY.CODE:
          return orderWaitPayList;
        case ORDER_SATUS.TAIL.CODE:
          return orderTailList;
        case ORDER_SATUS.WAIT_COMMENT.CODE:
          return orderWaitCommentList;
        case ORDER_SATUS.BACK_MONEY.CODE:
          return orderBackMoneyList;
        default:
          return allOrderList;
      }
    }
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/_mixin.scss";
.order-list {
  overflow-x: hidden;
  &.showBuyBox {
    padding-bottom: 161px + $offset;
  }
  .tabs {
    border-top: 1px solid color(bc);
    // padding: $offset 0;
    display: flex;
    justify-content: space-between;
    background: #fff;
    li {
      flex: 1;
      text-align: center;
      border-bottom-width: 1px;
      border-bottom-style: solid;
      border-color: #fff;
      padding: $offset 0;
      &.active {
        border-color: color(orange);
        color: color(orange);
      }
    }
  }
  .check {
    width: 100px;
    height: 100px;
    background: #fff;
  }
  .buy-box {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 161px;
    background: #fff;
    box-shadow: 0 -3px 5px rgba(0, 0, 0, 0.5);
    padding: $offset;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;
    .top {
      font-size: fontSize(24);
      span {
        font-size: fontSize(28);
        font-weight: bold;
      }
    }
    .bottom{
      span{
        color:fontColor(gray);
      }
      // margin-top:48px ;
    }
  }
}
</style>