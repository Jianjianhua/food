<template>
  <div class="userInfo">
    <TopHeader title="个人资料" bgColor="white"></TopHeader>
    <CellList>
      <Cell title="头像">
        <div class="avatar" slot="value">
          <img :src="userInfo.avatart" alt="">
        </div>
      </Cell>
      <Cell title="昵称" :value="userInfo.name"></Cell>
      <Cell title="性别" value="女"></Cell>
      <Cell title="生日" value="1991-03-06"></Cell>
      <Cell title="个性签名" value="开心一刻,吃起来"></Cell>
    </CellList>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "UserInfo",
  computed: {
    ...mapState({
      userInfo: state => state.userInfo
    })
  }
};
</script>
<style lang="scss" scoped>
.userInfo {
  .avatar {
    width: 80px;
    height: 80px;
    background-color: #aaaaaa;
    border-radius: 100%;
    overflow: hidden;
    img{
      width: 100%;
    }
  }
}
</style>