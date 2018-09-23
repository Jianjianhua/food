<template>
  <DefaultLayout class="user-center">
    <div class="user-info">
      <div class="message">
        <i class="icon-msg"></i>
      </div>
      <div class="avatar">
        <!-- 此处是头像 -->
        <img :src="userInfo.avatar" alt="">
      </div>
      <div class="detail">
        <h3>{{userInfo.name}}</h3>
        <UserState :member="userInfo.member" :by="userInfo.by" :hj="userInfo.hj" :zs="userInfo.zs"></UserState>
      </div>

    </div>
    <CellList>
      <Cell title="个人资料" icon="info" to="/userInfo"></Cell>
      <Cell title="我的钱包" icon="bad" showArrow></Cell>
      <Cell title="我的优惠券" icon="conph" showArrow></Cell>
      <Cell title="我的积分" icon="jf" showArrow></Cell>
      <Cell title="我的收藏" icon="collect" showArrow></Cell>
    </CellList>
    <CellList>
      <Cell title="客服" icon="kefu" showArrow></Cell>
      <Cell title="设置" icon="setting" to="/setting"></Cell>
    </CellList>
  </DefaultLayout>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "UserCenter",
  computed: {
    ...mapState({
      userInfo: state => state.userInfo
    })
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/userCenter.scss";
</style>