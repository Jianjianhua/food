import axios from 'axios';
import {
  toast
} from '../components/Toast/index'
//设置请求的前缀
axios.defaults.baseURL = `https://www.easy-mock.com/mock/5a5c06865af72a3a798db3da/api`;




const post = (url, data) => {
  const instance = toast({
    icon: 'loading',
    text: '加载中'
  });
  return new Promise((resolve, reject) => {
    axios.post(url, data).then(res => {
      instance.close();
      const {
        data
      } = res;
      if (data.code === 200) {
        resolve(data.data);
      } else {
        reject();
      }
    }, err => {
      toast({
        icon: 'close',
        text: '请求错误'
      })
    })
  })
}


const get = (url, data) => {
  const instance = toast({
    icon: 'loading',
    text: '加载中'
  });
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params:data
    }).then(res => {
      instance.close();
      const {
        data
      } = res;
      if (data.code === 200) {
        resolve(data.data);
      } else {
        reject();
      }
    }, err => {
      instance.close();
      toast({
        icon: 'close',
        text: '请求错误'
      })
    })
  })
}




const Services = {
  //每日推荐
  everyDayRecom() {
    return get(`/recommend/everyday`);
  },
  //热门搜搜
  searchHot(){
    return get(`/search/hot`);
  },
  //搜索
  search(keyWord){
    return get('/search',{keyWord});
  },
  //商品详情
  productDetail(id){
    console.log(id);
    return get('/product/detail',{ id:id });
  },

  //会员活动
  memberList(){
    return get('/community/member')
  },
  //世界美食
  worldFoodList(){
    return get('/community/worldFood')
  },
  //养生日志
  logList(){
    return get('/community/log')
  },
  //登录
  login(data){
    return post('/login',data);
  },
  //获取订单列表数据 ，需要携带用户id和登录状态token
  getOrderList(id,token){
    return get('/order/list',{
      id,
      token
    })
  }
};


export default {
  install(Vue) {
    Vue.prototype.$http = Services;
  }
}
