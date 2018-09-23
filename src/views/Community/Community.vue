<template>
  <DefaultLayout class="community">
    <TopHeader title="圈子">
      <template slot="right">
        <i class="icon-menu"></i>
      </template>
    </TopHeader>
    <ul class="tab">
      <router-link tag="li" to="/community/member">
        会员活动
      </router-link>
      <router-link tag="li" to="/community/worldFood">
        世界美食
      </router-link>
      <router-link tag="li" to="/community/log">
        养身日志
      </router-link>
    </ul>
    <div class="cotent">
      <router-view></router-view>
    </div>
  </DefaultLayout>
</template>
<script>
export default {
  name: "Community"
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/community.scss";
</style>