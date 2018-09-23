<template>
  <!-- <div class="password-login">
    <TopHeader title="密码登录"> </TopHeader>
    <FliedList>
      <Flied type="text" v-model="account" placeholder="手机/邮箱/用户名" />
      <Flied type="password" v-model="password" placeholder="请输入密码" />
    </FliedList>
    <div class="login-btn">
      <FoodButton size="lg">登录</FoodButton>
    </div>
    
  </div> -->
  <FormLayout class="password-login" submitText="登录" title="密码登录">
    <template slot="flieds">
      <Flied type="text" v-model="account" placeholder="手机/邮箱/用户名" />
      <Flied type="password" v-model="password" placeholder="请输入密码" />
    </template>
    <div slot="main">
      <router-link class="forget" to="/forget-password">
        忘记密码?
      </router-link>
    </div>
  </FormLayout>
</template>
<script>
export default {
  name: "password-login",
  data() {
    return {
      account: "",
      password: ""
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/_mixin.scss";
.password-login {

  .forget {
    display: block;
    padding-right: $offset;
    color: color(blue);
    font-size: fontSize(26);
    text-align: right;
  }
}
</style>