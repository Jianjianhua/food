<template>
  <div class="checkbox" :class="{checked:checked}" >
    <input type="checkbox"  
      :value="value" 
      @change="change">
    <i class="fa fa-check"></i>
  </div>
</template>
<script>
export default {
  name:'CheckBox',
  props:['value','modelValue'],

  // model选项
  model:{
    prop: 'modelValue',
    event:'change'  
  },
  data(){
    return {
      checked:false
    }
  },
  methods:{
    change(){
      this.checked=!this.checked;

      //1.获取value在modelValue的索引
      const index = this.modelValue.findIndex(item=>item===this.value);
      if(index===-1){
        this.modelValue.push(this.value);
      }else{
        this.modelValue.splice(index,1);
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../assets/scss/_mixin.scss";
.checkbox{
  width: 38px;
	height: 38px;
  border: solid 2px #999999;
  border-radius: 100%;
  position: relative;
 
  &.checked{
    background: color(orange);
    border-color: color(orange);
  }
  input{
    z-index: 2;
    opacity: 0;
  }
  i{
     display: flex;
  justify-content: center;
  align-items: center;
    color: #fff;
    font-size: 20px;
  }
  
  input,i{
    position: absolute;
    width: 100%;
    height: 100%;
  }
}
</style>