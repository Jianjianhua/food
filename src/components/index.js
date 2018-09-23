import TopHeader from './TopHeader.vue'
import Product from './Product.vue'
import Rate from './Rate.vue'
import BackTop from './BackTop.vue'
import Comment from './Comment.vue'
import FoodButton from './FoodButton.vue'
import Popover from './Popover.vue'
import Flied from './Flied.vue'
import FliedList from './FliedList.vue'
import CommunityItem from './CommunityItem.vue'
import UserState from './UserState.vue'
import OrderItem from './OrderItem.vue'
import Slider from './Slider.vue'
import CheckBox from './CheckBox.vue'
import Cell from './Cell.vue'
import Address from './Address.vue'
import Radio from './Radio.vue';
import CellList from './CellList.vue';
// import _ from 'lodash'
import { isEmpty } from '../util/index'
/* 
  如果需要把组件变为全局组件则引入处理
*/
export default {
  install(Vue){
    // 全局filter
    Vue.filter('price',val=>{
      if(isEmpty(val)) return '';  
      if(val.toString().includes('.')) return `￥${val}`;
      return `￥${val}.00`;
    })
    //全局mixins
    Vue.mixin({
      methods:{
        goBack() {
          const scrollTop = document.documentElement.scrollTop;
          if (scrollTop > 0) {
            document.documentElement.scrollTop += (0 - scrollTop) / 10;
            requestAnimationFrame(this.goBack);
          } else {
            console.log('已经到达顶部');
          }
        }
      }
    })

    Vue.component(Product.name,Product)
    Vue.component(Rate.name,Rate)
    Vue.component(TopHeader.name,TopHeader)
    Vue.component(BackTop.name,BackTop)
    Vue.component(Comment.name,Comment)
    Vue.component(FoodButton.name,FoodButton)
    Vue.component(Popover.name,Popover)
    Vue.component(Flied.name,Flied)
    Vue.component(FliedList.name,FliedList)
    Vue.component(CommunityItem.name,CommunityItem)
    Vue.component(UserState.name,UserState)
    Vue.component(Cell.name,Cell)
    Vue.component(OrderItem.name,OrderItem)
    Vue.component(Slider.name,Slider)
    Vue.component(CheckBox.name,CheckBox)
    Vue.component(Radio.name,Radio)
    Vue.component(Address.name,Address)
    Vue.component(CellList.name,CellList)
  }
}