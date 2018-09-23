<template>
  <div class="world-food">
    <CommunityItem v-for="(item,index) in list" :key="index" :data="item">
      <div class="content" slot="content">
        <p>{{ item.content.text }}</p>
        <ul class="pics">
          <li v-for="(pic,index) in item.content.images" :key="index">
            <img v-lazy="pic" alt="">
          </li>
        </ul>
      </div>
    </CommunityItem>
  </div>
</template>
<script>
export default {
  name: "WorldFood",
  data() {
    return {
      list: []
    };
  },
  created() {
    this.$http.worldFoodList().then(data => {
      // console.log(data);
      this.list = data;
    });
  }
};
</script>
<style lang="scss" scoped>
@import "../../../assets/scss/_mixin.scss";
.world-food {
  .content {
    p {
      font-size: fontSize(20);
      color: fontColor(lightGray);
      line-height: $offset * 1.5;
      margin-bottom: $offset;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      // justify-content: space-between;
    
      li {
        width: 30vw;
        height: 30vw;
        margin-bottom: calc((10vw - 48px) / 2);
        margin-right: calc((10vw - 48px) / 2);
        &:nth-of-type(3n){
          margin-right: 0;
        }
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>