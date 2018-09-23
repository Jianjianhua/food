<template>
  <div class="pay">
    <TopHeader bgColor="white" title="订单配送至">

    </TopHeader>
    <div class="address">
      <FoodButton type="primary" round v-if="!hasAddress">+添加收货地址</FoodButton>
      <Address v-else :data=" address || defaultAddress " arrow></Address>
    </div>
    <CellList>
      <Cell title="支付宝" value="更换支付方式" showArrow></Cell>
      <Cell title="选择送达时间" showArrow>
        <div class="bottom" slot="bottom">
          <span>蜂鸟专送</span>
          <span>准时送达</span>
          <p>当前时段下单暂不享受超时赔付？</p>
        </div>
      </Cell>
    </CellList>
    <CellList title="您所选择的食品">
      <Cell title="姜葱白切鸡">
        <div slot="value">
          <span>x1</span>
          <span>￥20.00</span>
        </div>
      </Cell>
      <Cell title="餐盒">
        <div slot="value">
          <span>x1</span>
        </div>
      </Cell>
      <Cell title="配送费">
        <div slot="value">
          <span>￥3</span>
        </div>
      </Cell>
      <Cell title="优惠券" value="请选用优惠券" showArrow>
      </Cell>
      <Cell>
        <div slot="value">
          总计： ￥20.00
        </div>
      </Cell>
    </CellList>
    <CellList>
      <Cell title="备注:">
        <textarea class="bz" slot="value" placeholder="请输入备注内容（可不填）"></textarea>
      </Cell>
    </CellList>
    <div class="f-b">
      <p>
        <span class="price">￥20.00</span>|
        <i>已优惠￥0</i>
      </p>
      <FoodButton class="btn" @click="openConfirmPop">
        确认支付
      </FoodButton>
    </div>
    <Popover ref="confirmPop">
      <div class="confirm-pay" v-if="payStep===0">
        <div class="confirm-pay-header">
          <i class="fa fa-close" @click="closeConfirmPop"></i>
          <h3>确认支付</h3>
        </div>
        <div class="money">
          ￥20.00
        </div>
        <CellList>
          <Cell title="支付宝账号" noPad value="150****8940"></Cell>
          <Cell title="支付方式" @click="openSelectPayType" noPad :value="payType" showArrow></Cell>
        </CellList>
        <FoodButton class="next" @click="payStep++" block>立即支付</FoodButton>
      </div>
      <!-- 输入支付密码 -->
      <div class="input-pay-password" v-if="payStep===1">
        <div class="confirm-pay-header">
          <i class="fa fa-angle-left"  @click="payStep--"></i>
          <h3>输入支付密码</h3>
        </div>
        <Flied type="password" placeholder="请输入支付密码" v-model="payPassword"></Flied>
      </div>
    </Popover>
    <VuePicker @cancel="closeSelectPayType" :selectData="pickData1" :show="payTypePickShow" @confirm="selectPayType"></VuePicker>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import VuePicker from "vue-pickers";
export default {
  name: "Pay",
  components: {
    VuePicker
  },
  computed: {
    ...mapState({
      address: state => state.address
    }),
    ...mapGetters(["hasAddress", "defaultAddress"])
  },
  data() {
    return {
      payStep:0,
      payType:'支付宝',
      payTypePickShow: false,
      pickData1: {
        columns: 1, // picker的列数
        default: [
          // 默认显示哪一个字段
          {
            text: "支付宝",
            value: "支付宝"
          }
        ],
        // 第一列的数据结构
        pData1: [
          {
            text: "支付宝",
            value: "支付宝"
          },
          {
            text: "微信支付",
            value: "微信支付"
          }
        ]
      },
      payPassword:''
    };
  },
  watch:{
    payPassword(newVal){
      if(newVal.length===6){
        console.log('发送支付请求，跳转到支付成功页面')
      }
    }
  },
  mounted(){
    // this.openConfirmPop();
  },
  methods: {
    openConfirmPop() {
      console.log(12321321);
      this.$refs.confirmPop.open();
    },
    closeConfirmPop() {
      this.$refs.confirmPop.close();
    },
    selectPayType(e) {
      const { select1 } = e;
      this.payType= select1.value;
      this.closeSelectPayType();
    },
    openSelectPayType(){
      this.payTypePickShow=true;
    },
    closeSelectPayType(){
      this.payTypePickShow=false;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/_mixin.scss";
.pay {
  .address {
    padding: $offset 0 0;
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .bottom {
    display: flex;
    margin-top: $offset;
    align-items: center;
    p {
      color: fontColor(gray);
    }
    span {
      width: 104px;
      height: 28px;
      border: solid 2px #999999;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 12px;
      // font-size: 12px;

      margin-right: 11px;
      &:nth-of-type(1) {
        background: color(orange);
        color: #fff;
        border-color: color(orange);
      }
    }
  }
  .bz {
    width: 625px;
    height: 166px;
    padding: $offset;
  }
  .f-b {
    display: flex;
    justify-content: space-between;
    padding: 0 0 0 $offset;
    position: fixed;
    width: 100%;
    background: #fff;
    bottom: 0;
    align-items: center;
    height: 88px;
    p {
      color: fontColor(gray);
      span {
        color: color(orange);
        padding-right: $offset / 2;
      }
    }
    .btn {
      height: 88px;
      width: 188px;
      border-radius: 0;
    }
  }
  .confirm-pay {
    &-header {
      position: relative;
      margin-bottom: 68px;
      height: 2em;
      i {
        z-index: 2;
        position: absolute;
        color: fontColor(gray);
        font-size: 2em;
      }
      h3 {
        top: 0;
        text-align: center;
        font-size: fontSize(26);
        position: absolute;
        width: 100%;
        line-height: 2em;
      }
    }
    .money {
      text-align: center;
      margin-bottom: 30px;
      font-size: fontSize(32);
      font-weight: bold;
    }
    .next{
      margin-top: 160px;
    }
  }
}
</style>