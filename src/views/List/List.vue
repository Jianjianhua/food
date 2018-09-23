<template>
  <div class="list">
    <TopHeader :title="keyWord" bgColor="white"></TopHeader>
    <div class="content">
      <ul class="top-bar" ref="topBar" :class="{'fixed-top':isFixed}">
        <li :class="{active:filterType==='all'}" @touchstart="toggleFilter('all')">综合</li>
        <li :class="{active:filterType==='good'}" @touchstart="toggleFilter('good')">好评</li>
        <li :class="{active:filterType==='price'}" @touchstart="togglePriceSortType">价格</li>
        <li :class="{active:filterType==='sx'}" @touchstart="toggleFilter('sx')">筛选</li>
      </ul>
      <Product v-for="(product,index) in doneList" :key="index" :product="product">

      </Product>
    </div>
    <BackTop/>
  </div>
</template>
<script>
// 处理js的数据  数组，对象，字符串
import _ from "lodash";
export default {
  name: "List",
  data() {
    return {
      keyWord: decodeURI(this.$route.query.keyWord),
      filterType: "all", //过滤类型
      sortType: "", //排序类型
      productList: [], //产品列表,
      isFixed: false
    };
  },
  computed: {
    filterList() {
      const { filterType, productList } = this;
      switch (filterType) {
        case "all":
        case "price":
          return productList;
        case "good":
          return productList.filter(product => product.fen >= 4);
      }
    },
    doneList() {
      switch (this.sortType) {
        case "PHL":
          return this.sortPHL(this.filterList);
        case "PLH":
          return this.sortPLH(this.filterList);
        default:
          return this.filterList;
      }
    }
  },
  created() {
    /* 
      创建的时候请求数据，通过keyWord参数请求
    */
    this.$http.search(this.keyWord).then(data => {
      //  console.log(data);
      this.productList = data;
    });
  },
  mounted() {
    const { topBar } = this.$refs;
    const top = topBar.getBoundingClientRect().top;
    window.onscroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      /* 
        滚动的距离，大于top的时候，给topbar设置固定定位
      */
      //  console.log();
      if (scrollTop >= top) {
        this.isFixed = true;
      } else {
        this.isFixed = false;
      }
    };
  },
  methods: {
    toggleFilter(val) {
      this.filterType = val;
      this.goBack();
    },
    //通过price排序
    togglePriceSortType() {
      this.filterType = "price";
      // PHL 表示 price from high to low
      // PLH 表示 price from low to high
      this.sortType = this.sortType === "PHL" ? "PLH" : "PHL";
      this.goBack();
    },
    sortPHL(list) {
      return _.sortBy(list, item => -item.price);
    },
    sortPLH(list) {
      return _.sortBy(list, item => item.price);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/list.scss";
</style>