<template>
  <FormLayout title="注册" submitText="注册">
    <template slot="flieds">
      <Flied type="text" placeholder="请输入手机号码" />
      <Flied type="text" placeholder="验证码">
        <div class="get-code" slot="other">
          <FoodButton size="sm">获取验证码</FoodButton>
        </div>
      </Flied>
      <Flied type="password" placeholder="请设置密码（6-20位字母，数字）" />
      <Flied type="password" placeholder="请重新输入密码" />
    </template>
  </FormLayout>
</template>
<script>
export default {
  name: "Register"
};
</script>
<style lang="scss" scoped>
.register {
}
</style>