<template>
  <div class="comment">
    <div class="user-info">
      <div class="avatar">
        <img v-lazy="comment.user.avatar" :alt="comment.user.name">
      </div>
      <div class="detail">
        <h3>{{ comment.user.name }}</h3>
        <Rate class="star" :rate="comment.star"></Rate>
      </div>
    </div>
    <div class="content">
      {{ comment.content }}
    </div>
    <ul class="pics">
      <li v-for="(pic,index) in comment.images" :key="index">
        <img v-lazy="pic">
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Comment",
  props: {
    comment: {
      type: Object
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/_mixin.scss";
.comment {
  padding: $offset 0;
  border-bottom: 1px solid fontColor(lightGray);
  .user-info {
    display: flex;
    align-items: center;
    margin-bottom: $offset;
    .avatar {
      width: 65px;
      height: 65px;
      border-radius: 100%;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    .detail {
      flex: 1;
      padding-left: 12px;
      h3 {
        font-size: fontSize(18);
        color: fontColor(gray);
      }
      .star {
        margin-top: 11px;
        font-size: 0.8em;
      }
    }
  }
  .content {
    line-height: 1.5;
    font-size: fontSize(18);
    color: fontColor(gray);
  }
  .pics {
    display: flex;
    flex-wrap: wrap;
    margin-top: $offset;
    li {
      width: 144px;
      height: 144px;
      margin-right: $offset;
      img{
        width: 100%;
      }
    }
  }
}
</style>