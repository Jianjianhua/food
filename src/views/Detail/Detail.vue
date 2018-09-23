<template>
  <div class="detail">
    <TopHeader :title="data.name">
      <div class="menu" slot="right">
        <i class="icon-menu"></i>
      </div>
    </TopHeader>
    <div class="main-pic">
      <img v-lazy="data.pic" :alt="data.name">
    </div>
    <div class="info">
      <div class="info-up">
        <h1 class="name">{{ data.name }}</h1>
        <div class="monthScal">月销量：{{ data.monthScal }}</div>
      </div>
      <p class="desc">{{ data.desc }}</p>
      <div class="price-wrap">
        <span class="price">{{ data.price | price }}</span>
        <span class="old-price">{{ data.oldPrice | price }}</span>
      </div>
      <div class="rt-sup">
        <span v-for="(item,index) in data.rt_sup" :key="index">
          <i class="icon-circle-check"></i> {{ item }}
        </span>
      </div>
      <div class="coupon">
        <span v-for="(item,index) in data.coupon" :key="index">
          <i class="icon-conph"></i> {{ item }}
        </span>
      </div>
    </div>
    <div class="store">
      <h2 class="store-name">
        <i class="icon-pos"></i>{{data.store&&data.store.name}}

      </h2>
      <p>{{ data.store && data.store.intro }}</p>
    </div>
    <div class="comment-wrap">
      <h2>评价
        <span class="comment-length">( {{ data.comments && data.comments.length }}人评价 )</span>
      </h2>
      <Rate :rate="data.star"></Rate>
      <ul class="comment-keys">
        <li>价格实惠{{ data.price_coupon_count }}</li>
        <li>味道好吃{{ data.good_food }}</li>
        <li>服务很棒{{ data.good_service }}</li>
        <li>份量足{{ data.good_many }}</li>
        <li>份量少{{ data.good_less }}</li>
      </ul>
      <div class="comment-list">
        <Comment v-for="(comment,index) in data.comments" :key="index" :comment="comment" v-show="index<commentShowCount" />
      </div>
      <div class="show-comment" @click="showAllComment">
        查看全部评价
      </div>
    </div>
    <div class="product-pics">
      <h2>详情</h2>
      <div class="pic" v-for="(pic,index) in data.detail_pics" :key="index">
        <img v-lazy="pic">
      </div>
    </div>
    <div class="guess-you-like">
      <h2>猜你喜欢</h2>

    </div>
    <div class="controls">
      <ul class="left">
        <li>
          <i class="icon-share"></i>
        </li>
        <li>
          <i class="icon-collect"></i>
        </li>
        <li>
          <i class="icon-kefu"></i>
        </li>
      </ul>
      <div class="btns">
        <FoodButton @click="openBuy">加入购物车</FoodButton>
        <FoodButton>立即抢购</FoodButton>
      </div>
    </div>

    <Popover ref="popover">
      <div class="buy-content">
        <div class="buy-info">
          <div class="pic">
            <img :src="data.pic" @load="load">
          </div>
          <div class="right">
            <div class="top">
              <h3>{{ data.name }}</h3>
              <i class="fa fa-close" @touchstart="closeBuy"></i>
            </div>
            <span class="price">
              {{ data.price | price }}
            </span>
            <div class="down">
              <div class="count-control">
                <span @click="decre" class="decre cc" :class="{dis:count<=1}">-</span>
                <span class="count">{{ count }}</span>
                <span @click="incre" class="incre cc">+</span>
              </div>
              <p>
                月售{{ data.monthScal }}份额    好评100%
              </p>
            </div>
          </div>
        </div>
        <div class="buy-footer">
          <div class="all-price">
            共计 <span> {{  data.price * count | price }}</span>
          </div>
          <div class="right">
            <FoodButton>堂食</FoodButton>
            <FoodButton>外卖</FoodButton>
          </div>
        </div>
      </div>
    </Popover>
  </div>
</template>
<script>
export default {
  name: "Detail",
  data() {
    return {
      id: this.$route.params.id,
      data: {},
      commentShowCount: 1,
      count:1
    };
  },

  created() {
    const id = this.id;
    this.$http
      .productDetail(id)
      .then(data => {
        this.data = data;
      })
      .catch(e => {
        this.$toast({
          icon: "close",
          text: "请求错误"
        });
      });
  },
  methods: {
    showAllComment() {
      this.commentShowCount = this.data.comments.length;
    },
    load(e) {
      if (e.target.width > e.target.height) {
        e.target.classList.add("w");
      } else {
        e.target.classList.add("h");
      }
    },
    openBuy() {
      this.$refs.popover.open();
    },
    closeBuy() {
      this.$refs.popover.close();
    },

    incre(){
      this.count++;
    },
    decre(){
      if(this.count<=1) return;
      this.count--;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/detail.scss";
</style>