<template>
  <div class="address-item" @click="handle">
    <div class="userinfo">
      <h3>{{ data.name }}</h3>
      <p>{{ data.phone }}</p>
    </div>
    <p class="content">
      {{ data.address }}
    </p>
    <div class="control" v-if="control">
      <Radio name="address" :value="data.name">
        默认地址
      </Radio>
      <ul class="edit">
        <li>
          <i class="icon-edit"></i>编辑</li>
        <li>
          <i class="icon-del"></i>删除</li>
      </ul>
    </div>
    <i class="icon-angle-right arrow" v-if="arrow"></i>
  </div>
</template>
<script>
export default {
  name: "Address",
  props: {
    arrow:{
      type:Boolean,
      default:false
    },
    data: {
      type: Object
    },
    control: {
      type: Boolean,
      default: false
    }
  },
  methods:{
    handle(){
      if(this.arrow){
        this.$router.push('/addressList');
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/_mixin.scss";
.address-item {
  padding: $offset;
  background: #fff;
  display: flex;
  width: 100%;
  flex-direction: column;
  position: relative;
  .userinfo {
    display: flex;
    margin-bottom: $offset;
    font-size: fontSize(24);
    h3 {
      margin-right: $offset;
    }
  }
  .arrow{
    position: absolute;
    right: $offset;
    top: 50%;
    transform: translateY(-50%);
  }
  .control {
    display: flex;
    justify-content: space-between;
    margin-top: $offset;
    padding-top: $offset;
    ul.edit {
      display: flex;
      align-items: flex-end;
      li {
        margin-left: $offset;
        color: fontColor(gray);
        i {
          margin-right: 12px;
        }
      }
    }
  }
}
</style>