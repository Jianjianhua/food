<template>
  <div class="member">
    <CommunityItem v-for="(item,index) in list" :key="index" :data="item">
      <div slot="content" class="content">
        <ul class="list">
          <li>会员：
            <span>{{ item.content.member }}折优惠</span>
          </li>
          <li>vip会员：
            <span>{{ item.content.vip }}折优惠</span>
          </li>
          <li>白金VIP :
            <span>{{ item.content.bj }}折优惠</span>
          </li>
          <li>黄金VIP :
            <span>{{ item.content.hj }}折优惠</span>
          </li>
        </ul>
        <div class="pic">
          <img v-lazy="item.content.pic" alt="">
        </div>
      </div>
      <span slot="foot-left">
        你在等什么？
      </span>
    </CommunityItem>
  </div>
</template>
<script>
export default {
  name: "member",
  data() {
    return {
      list: []
    };
  },
  created() {
    this.$http.memberList().then(data => {
      this.list = data;
    });
  }
};
</script>
<style lang="scss" scoped>
@import "../../../assets/scss/_mixin.scss";
.member {
  .content {
    .list {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 50%;
        color: fontColor(gray);
        margin-bottom: $offset;
        font-size: fontSize(20);
        span {
          color: color(orange);
          font-size: fontSize(24);
        }
      }
    }
    .pic {
      img {
        width: 100%;
      
      }
    }
  }
}
</style>