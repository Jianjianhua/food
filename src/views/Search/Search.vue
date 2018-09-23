<template>
  <div class="search">
    <TopHeader bgColor="white" class="search-bar">
      <div class="search-input" slot="center">
        <input v-model="searchText" type="text" placeholder="搜索商品名称">
      </div>
      <div class="search-btn" slot="right" @touchstart="search">
        搜索
      </div>
    </TopHeader>
    <div class="content">
      <div class="search-history item">
        <h3>搜索历史</h3>
        <ul class="list">
          <router-link 
          v-for="(item,index) in history" 
          :key="index"
           tag="li" 
           :to="`/list?keyWord=${encodeURI(item)}`">
            {{ item }}
          </router-link>
        </ul>
      </div>
      <div class="search-hot item">
        <h3>热门搜索</h3>
        <ul class="list">
          <router-link 
          v-for="(item,index) in hotList" 
          :key="index"
           tag="li" 
           :to="`/list?keyWord=${encodeURI(item)}`">
            {{ item }}
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>

import { setItem, getItem, isEmpty } from "../../util/index";
export default {
  name: "Search",
  data() {
    return {
      searchText: "",
      history: getItem("history") || [], //从本地存储获取,
      hotList:[],
    };
  },
  created(){
    this.$http.searchHot().then(data=>{
      this.hotList=data;
      console.log(data);
    })
  },
  methods: {
    search() {
      /* 
        点击搜索之后，
        1.将搜索的记录存在本地存储
        2.跳转到搜索列表页
      */
      const { searchText } = this;
      if (isEmpty(searchText)) {
        this.$toast({
          icon: "close",
          text: "搜索内容不能为空"
        });
        return;
      }

      this.history.push(searchText);
      this.save();


      //跳转逻辑
      this.$router.push({
        path:'/list',
        query:{
          keyWord:encodeURI(searchText),
        }
      })

      console.log("search");
    },
    //将历史记录数组存在本地存储中
    save() {
      setItem("history", this.history);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/search.scss";
</style>