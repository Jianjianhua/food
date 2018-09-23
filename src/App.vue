<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import "./assets/scss/_mixin.scss";
*{
  margin: 0;
  padding: 0;
  list-style: none;
  font: inherit;
  text-decoration: none;
  word-break: break-all;
  box-sizing: border-box;
  &::before,&::after{
    box-sizing: border-box;
  }
}
body{
  font-size: 12px;
  line-height: 1;
  color: #333333;
  background-color: color(bg);
  overflow-x: hidden;
}
a{
  font-size: inherit;
  color: inherit;
}
input,textarea,select{
  vertical-align: middle;
  appearance: none;
  border: 1px solid color(bc);
  outline: none;
}
table{
  border-collapse: collapse;
  border-spacing: 0;
}
</style>
