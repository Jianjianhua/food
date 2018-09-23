<template>
  <FormLayout title="找回密码" submitText="发送">
    <template slot="flieds">
       <Flied type="text" placeholder="请输入手机号码">
        <div class="get-code" slot="other">
          <FoodButton  size="sm" >获取验证码</FoodButton>
        </div>
      </Flied>
      <Flied type="text" placeholder="请输入验证码" />
      <Flied type="text" placeholder="请输入新密码" />
    </template>
  </FormLayout>
</template>
<script>
export default {
  name:'ForgetPassword',
  
}
</script>
<style lang="scss" scoped>
.forget-password{}
</style>