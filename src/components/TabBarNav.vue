<template>
  <ul class="tab-bar-nav">
    <router-link 
      :to="item.url" 
      :key="index"
      v-for="(item,index) in navs"
      tag="li"
    >
      <i class="default" :class="[ `icon-${item.icon}` ]"></i>
      <i class="hover" :class="[ `icon-${item.icon}-sel` ]"></i>
      <span>{{ item.text }}</span>
    </router-link>
  </ul>
</template>
<script>
export default {
  name: "TabBarNav",
  data(){
    return {
      navs:[
        { icon:'home',text:'首页',url:'/home' },
        { icon:'qz',text:'圈子',url:'/community' },
        { icon:'order',text:'订单' ,url:'/order'},
        { icon:'user',text:'我的',url:'/user-center' },
      ]
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/_mixin.scss";
.tab-bar-nav {
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 98px;
  background: #fff;
  border-top: 1px solid color(bc);
  li{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: fontColor(gray);
    i{
      font-size: 1.5em;
      &.hover{
        display: none;
      }
    }
    &.active{
      color: color(orange);
      i{
        &.default{
          display: none;
        }
        &.hover{
          display: block;
        }
      }
    }
    span{
      margin-top: 13px;
      font-size: fontSize(24);
    }
  }
}
</style>