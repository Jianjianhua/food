<template>
  <div class="form-layout">
    <TopHeader :title="title"> </TopHeader>
    <FliedList>
      <slot name="flieds"></slot>
    </FliedList>
    <div class="btn">
      <FoodButton size="lg" @click="$emit('click')">
        {{ submitText }}
      </FoodButton>
    </div>
    <slot name="main"></slot>
  </div>
</template>
<script>
export default {
  name: "FormLayout",
  props: {
    title: String,
    submitText: {
      type: String,
      default: "确认"
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/_mixin.scss";
.form-layout {
  .btn {
    margin-top: 88px;
    margin-bottom: $offset;
    text-align: center;
  }
}
</style>