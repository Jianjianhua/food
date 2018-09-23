<template>
  <div class="default-layout">
    <div class="container">
      <slot></slot>
    </div>
    <TabBarNav></TabBarNav>
    <BackTop></BackTop>
  </div>
</template>
<script>
import TabBarNav from '../components/TabBarNav';
export default {
  name:'DefaultLayout',
  components:{
    TabBarNav,
  }
}
</script>
<style lang="scss" scoped>
.default-layout{
  .container{
    padding-bottom: 98px + 24px;
  }
}
</style>