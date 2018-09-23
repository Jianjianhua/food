<template>
  <div class="community-item">
    <div class="header">
      <div class="avatar">
        美食
      </div>
      <span>美食连锁</span>
    </div>
    <div class="title">
      <h3>{{ data.title }}</h3>
      <time>{{ data.time }}</time>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
    <div class="footer">
      <div class="foot-top">
        <div class="left">
          <slot name="foot-left"></slot>
        </div>
        <div class="right">
          查看全部
        </div>
      </div>
      <ul class="foot-bottom">
        <li>
          <i class="icon-heart"></i>{{ data.like }}</li>
        <li>
          <i class="icon-eye"></i>{{ data.view }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "CommunityItem",
  props: {
    data: {
      type: Object
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/_mixin.scss";
.community-item {
  background: #fff;
  padding: $offset;
  margin-bottom: $offset;
  display: flex;
  flex-direction: column;
  .header {
    display: flex;
    align-items: center;
    margin-bottom: $offset;
    .avatar {
      width: 72px;
      height: 72px;
      text-align: center;
      line-height: 72px;
      color: #fff;
      background-color: color(orange);
      border-radius: 100%;
      margin-right: $offset;
      font-size: fontSize(28);
    }
    span {
      font-size: fontSize(26);
    }
  }
  .title {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: $offset;
    h3 {
      font-size: fontSize(26);
      color: fontColor(gray);
    }
    time {
      font-size: fontSize(18);
      color: fontColor(lightGray);
    }
  }
  .footer {
    margin-top: $offset;
    .foot-top {
      display: flex;
      justify-content: space-between;
      .right {
        font-size: fontSize(18);
        color: fontColor(gray);
      }
    }
    .foot-bottom{
      margin-top: $offset;
      display: flex;
      justify-content: flex-end;
      font-size: fontSize(20);
       color: fontColor(lightGray);
       li{
         margin-left: $offset;
         i{
           margin-right: 8px;
         }
       }
    }
  }
}
</style>