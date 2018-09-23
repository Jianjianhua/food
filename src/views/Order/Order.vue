<template>
  <DefaultLayout class="order">
    <TopHeader title="订单"></TopHeader>
    <div class="userinfo">
      <div class="avatar">
        <!-- 此处是头像 -->
        <img :src="userInfo.avatar" alt="">
      </div>
      <div class="detail">
        <h3>{{userInfo.name}}</h3>
        <p>{{userInfo.desc}}</p>
        <UserState :member="userInfo.member" :by="userInfo.by" :hj="userInfo.hj" :zs="userInfo.zs"></UserState>
      </div>

    </div>
    <div class="my-order order-plane">
      <Cell title="我的订单" to="/orderList?type=-1"></Cell>
      <ul class="list">
        <router-link tag="li" to="/orderList?type=1">
          <i class="icon-bicycle"></i>
          <span>订单跟踪</span>
        </router-link>
        <router-link tag="li" to="/orderList?type=2">
          <i class="icon-wait-comment"></i>
          <span>待评价</span>
        </router-link>
        <router-link tag="li" to="/orderList?type=10">
          <i class="icon-back-money-success"></i>
          <span>退款/售后</span>
        </router-link>
      </ul>
    </div>
    <div class="wait-pay-list order-plane">
      <Cell title="待付款订单" to="/orderList?type=0"></Cell>
      <OrderItem v-for="(order,index) in orderWaitPayList" :key="index" :order="order"></OrderItem>
    </div>
    <div class="last-list order-plane">
      <Cell title="最近订单" to="/orderList?type=0"></Cell>
      <OrderItem v-for="(order,index) in lastOrderList" :key="index" :order="order"></OrderItem>
    </div>
  </DefaultLayout>
</template>
<script>
/* 
  有没有登录？
  如果有登录才能展示页面

  鉴权

  vuex 状态管理
  1.保存全局数据（状态）
  2.修改全局数据
*/
import { mapState, mapGetters, mapActions } from "vuex";
import _ from "lodash";
export default {
  name: "Order",
  created() {
    //普通方式获取全局状态
    console.log(this.isLogin);
  },
  data() {
    return {};
  },
  computed: {
    //映射全局状态（简写）
    ...mapGetters(["isLogin", "orderWaitPayList"]),
    lastOrderList() {
      let list = Array.from(this.orderList).map(item=>{
        item.create_time= new Date(item.create_time).getTime();
        return item;
      });
      list =  _.sortBy(list,item=>{
        return -item.create_time
      })
    
      return list.filter((item,index)=>index<5);
    },
    ...mapState({
      orderList: state => state.orderList,
      aaa: state => state.token,
      userInfo: state => state.userInfo
    })
  },
  methods: {
    update() {
      // 调用mutation的方法, 第一个参数是mutation的名字，第二个参数是值
      this.$store.commit("setToken", "更新后的值");
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/order.scss";
</style>