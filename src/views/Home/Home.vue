<template>
  <DefaultLayout class="home">
    <TopHeader class="header">
      <div slot="left" class="top-left">
        <i class="icon-pos"></i>
        <span>定位</span>
      </div>
      <div slot="center" class="search">
        <i class="icon-search"></i>
        <input type="text" placeholder="搜索:  菜名、店铺" @focus="$router.push('/search')">
      </div>
      <div slot="right" class="scan">
        <i class="icon-scan"></i>
        <span>扫一扫</span>
      </div>
    </TopHeader>

    <!-- 轮播图 -->
    <swiper class="banner" :options="swiperOption">
      <swiper-slide>
        <img :src="require('../../assets/img/banner1.jpg')" alt="">
      </swiper-slide>
      <swiper-slide>
        <img :src="require('../../assets/img/banner2.jpg')" alt="">
      </swiper-slide>
      <swiper-slide>
        <img :src="require('../../assets/img/banner3.jpg')" alt="">
      </swiper-slide>
    </swiper>

    <!-- 主要导航 -->
    <div class="main-nav">
      <router-link class="item" :to="`/list?keyWord=${encodeURI('荤菜')}`">
        <div class="pic">
          <img v-lazy="require('../../assets/img/hun.png')" alt="">
        </div>
        <span>荤菜</span>
      </router-link>
      <router-link class="item"  :to="`/list?keyWord=${encodeURI('素菜')}`">
        <div class="pic">
          <img v-lazy="require('../../assets/img/su.png')" alt="">
        </div>
        <span>素菜</span>
      </router-link>
      <router-link class="item" :to="`/list?keyWord=${encodeURI('蔬果煲')}`">
        <div class="pic">
          <img v-lazy="require('../../assets/img/shu.png')" alt="">
        </div>
        <span>蔬果煲</span>
      </router-link>
      <router-link class="item" :to="`/list?keyWord=${encodeURI('特色菜')}`">
        <div class="pic">
          <img v-lazy="require('../../assets/img/te.png')" alt="">
        </div>
        <span>特色菜</span>
      </router-link>
    </div>

    <!-- 活动模块 -->
    <div class="hd">
      <div class="top">
        <div class="top-item">
          <div class="text">
            <h3>会员优惠</h3>
            <p>会员优惠多多</p>
          </div>
          <div class="pic">
            <img :src="require('../../assets/img/plane1.png')" alt="">
          </div>
        </div>
        <div class="top-item">
          <div class="text">
            <h3>每周活动</h3>
            <p>优惠在生活</p>
          </div>
          <div class="pic">
            <img :src="require('../../assets/img/plane2.png')" alt="">
          </div>
        </div>
        <div class="top-item">
          <div class="text">
            <h3>特价区</h3>
            <p>激动人心</p>
          </div>
          <div class="pic">
            <img :src="require('../../assets/img/plane3.png')" alt="">
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="time">
          <div class="text">
            <h3>限时抢购</h3>
            <p>
              <span>10</span>:
              <span>26</span>:
              <span>30</span>
            </p>
          </div>
          <div class="pic">
            <img :src="require('../../assets/img/timebanner.jpg')" alt="">
          </div>
        </div>
        <div class="sacl">
          <div class="text">
            <h3>优惠券</h3>
            <p>会员抢不停</p>
          </div>
          <div class="pic">
            <img :src="require('../../assets/img/scal.png')" alt="">
          </div>
        </div>
      </div>
    </div>


    <div class="today-remm panel">
      <h3>每日推荐</h3>
      <Product
        v-for="(product,index) in evertDayProducts"
        :product="product"
        :key="index"
      >

      </Product>
    </div>
     <div class="guess-like panel">
      <h3>猜你喜欢</h3>
      <Product
        v-for="(product,index) in evertDayProducts"
        :product="product"
        :key="index"
      >

      </Product>
    </div>
  </DefaultLayout>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      swiperOption: {
        loop: true
      },
      //模拟数据，这里的数据应该是要请求数据的
      evertDayProducts:[]
    };
  },
  created(){
    // this.$toast({
    //   text:'加载中...',
    //   icon:'loading'
    // })
    this.$http.everyDayRecom().then(data=>{
      // console.log(data);
      this.evertDayProducts=data;
    })
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/home.scss";
</style>