<template>
  <div class="setting">
    <TopHeader title="设置" bgColor="white"></TopHeader>
    <CellList>
      <Cell title="账户与安全" showArrow></Cell>
      <Cell title="新消信通知" showArrow></Cell>
      <Cell title="地区设置" showArrow></Cell>
      <Cell title="隐私" showArrow></Cell>
    </CellList>
    <CellList>
      <Cell title="我的反馈" showArrow></Cell>
      <Cell title="关于美食连锁店" showArrow></Cell>
    </CellList>
    <FoodButton block class="login-out">退出登录</FoodButton>
  </div>
</template>
<script>
export default {
  name: "Setting"
};
</script>
<style lang="scss" scoped>
.setting {
  .login-out {
    width: 526px;
    height: 80px;
    margin: 86px auto;
  }
}
</style>