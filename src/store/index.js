import Vue from 'vue'
import Vuex from 'vuex'
import {
  isEmpty
} from '../util/index';
import { ORDER_SATUS } from '../model/index';

Vue.use(Vuex)



export default new Vuex.Store({
  //全局变量（状态） 相当于组件的data
  state: {
    token: '', //从服务器返回登录识别码
    userInfo: {},
    orderList: [],
    address:null,
  },
  //相当于组件的 computed

  getters: {

    hasAddress(state){
      return state.userInfo.addressList && state.userInfo.addressList.length > 0;
    },
    addressList(state){
      return state.userInfo.addressList;
    },
    defaultAddress(state,{addressList}){
      console.log( addressList.filter(item=>item.default)[0])
      return addressList.filter(item=>item.default)[0];
    },

    isLogin(state) {
      return !isEmpty(state.token);
    },
    //退款/售后订单
    orderBackMoneyList(state){
      return state.orderList.filter(order=>order.status===ORDER_SATUS.BACK_MONEY.CODE);
    },
    //待评价订单
    orderWaitCommentList(state){
      return state.orderList.filter(order=>order.status===ORDER_SATUS.WAIT_COMMENT.CODE);
    },
    //待付款订单
    orderWaitPayList(state){
      return state.orderList.filter(order=>order.status===ORDER_SATUS.WAIT_PAY.CODE);
    },
    //获取订单跟踪的订单列表
    orderTailList(state){
      return state.orderList.filter(order=>order.status===ORDER_SATUS.TAIL.CODE);
    }
  },
  //更新（修改）全局状态只能够使用 mutation
  mutations: {
    // 每一个东西必须是方法，方法的参数只能有两个，第一个参数就是state
    setToken(state, value) {
      state.token = value;
    },
    //设置用户数据
    setUserInfo(state, value) {
      state.userInfo = value;
    },

    //设置订单列表
    setOrderList(state,value){
      state.orderList = value;
    }
  },

  //组合mutation，并且这里可以异步操作数据
  // 每一个东西必须是方法，方法的参数只能有两个，第一个参数就是store
  actions: {
    login({
      commit,
      dispatch
    }, data) {
      return new Promise((resolve, reject) => {
        Vue.prototype.$http.login(data).then(data => {
          console.log(data);
          commit('setToken', data.token);
          commit('setUserInfo', data.userInfo);
          
          return dispatch('getOrderList',{
            id:data.userInfo.id,
            token:data.token
          });
        }).then(()=>{
          resolve();
        },()=>{
          reject();
        })
      });
    },
    getOrderList({commit,state},{id,token}){
      return new Promise((resolve, reject) => {
        Vue.prototype.$http.getOrderList(id,token).then(data=>{
          
          // data=data.map()

          commit('setOrderList',data);
          resolve();
        },()=>{
          reject();
        });
      });
    }
  }
})
