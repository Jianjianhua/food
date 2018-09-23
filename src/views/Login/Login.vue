<template>

  <div class="login">
    <TopHeader title="登录">
      <span slot="right">
        <router-link to="/password-login">
          密码登录
        </router-link>
      </span>
    </TopHeader>
    <div class="content">
      <Flied type="text" v-model="mobilePhone" placeholder="请输入手机号码">
        <div class="get-code" slot="other">
          <FoodButton :disabled="vcodeBtnState" size="sm" @click="getVcode">{{ vcodeBtnText }}</FoodButton>
        </div>
      </Flied>
      <Flied type="text" v-model="vcode" placeholder="验证码" />
      <p class="tips">温馨提示：未注册饭菜真香的手机号，登录时将自动注册，且代表您的已同意
        <router-link to="/">《用户服务协议》</router-link>
      </p>
    </div>
    <div class="login-btn">
      <FoodButton size="lg" @click="submit">登录</FoodButton>
    </div>
    <div class="other-type">
      <h3>第三方登录</h3>
      <ul>
        <li class="wechat">
          <i class="fa fa-wechat"></i>
          <span>微信</span>
        </li>
        <li class="qq">
          <i class="fa fa-qq"></i>
          <span>微信</span>
        </li>
        <li class="weibo">
          <i class="fa fa-weibo"></i>
          <span>微信</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  name: "Login",
  data() {
    return {
      mobilePhone: "13800138000",
      vcode: "123456",
      vcodeBtnState: true,
      vcodeBtnText: "获取验证码",
      nextGetVcodeTime: 30
    };
  },
  watch: {
    mobilePhone(newVal) {
      const result = /1[3578]\d{9}/g.test(newVal);
      if (result) {
        this.vcodeBtnState = false;
      }
    }
  },
  created(){
    this.submit();
  },
  methods: {
    //获取验证码
    getVcode() {
      // const   mobilePhone  = this;
      let n = 0;
      const time = setInterval(() => {
        if (n < this.nextGetVcodeTime) {
          n++;
          this.vcodeBtnText = `还剩下${this.nextGetVcodeTime - n}s`;
          this.vcodeBtnState = true;
        } else {
          this.vcodeBtnState = false;
          this.vcodeBtnText = "获取验证码";
          clearInterval(time);
        }
      }, 1000);
    },
    ...mapActions([
      'login'
    ]),
    submit() {
      this
        .login({
          phone: this.mobilePhone,
          vcode: this.vcode
        })
        .then(() => {
          this.$toast({
            icon: "check",
            text: "登录成功，即将跳转页面"
          });
           setTimeout(()=>{
             this.back();
           },0)
        });
    },
    back() {
      const { redirect } = this.$route.query;
      this.$router.push({
        path: redirect
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/login.scss";
</style>