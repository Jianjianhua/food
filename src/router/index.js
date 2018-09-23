import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home/Home.vue' // 首页

//圈子
import Community from '../views/Community/Community.vue'
import Member from '../views/Community/subPage/Member.vue'
import WorldFood from '../views/Community/subPage/WorldFood.vue'
import Log from '../views/Community/subPage/Log.vue'

import Order from '../views/Order/Order.vue'
import OrderList from '../views/Order/OrderList.vue';
import UserCenter from '../views/UserCenter/UserCenter.vue'
import UserInfo from '../views/UserCenter/UserInfo.vue'
import Setting from '../views/UserCenter/Setting.vue'
import Search from '../views/Search/Search.vue'//搜索
import List from '../views/List/List.vue'//搜索列表
import Detail from '../views/Detail/Detail.vue'//详情
import Login from '../views/Login/Login.vue'//登录
import PasswordLogin from '../views/Login/PasswordLogin.vue'//密码登录
import ForgetPassword from '../views/ForgetPassword/ForgetPassword.vue' //忘记密码
import Register from '../views/Register/Register.vue' //注册
import Pay from '../views/Pay/Pay.vue';//付款页
import AddressList from '../views/AddressList/AddressList.vue';//付款页

import store from '../store/index';

Vue.use(Router);


const router = new Router({
  linkActiveClass:'active',
  routes: [
    { path: '/' , component: Home , redirect: '/home' },
    { path: '/home' , component: Home },

    { path: '/community',component: Community ,redirect:'/community/member' ,children:[
      { path: '/community/member',component:Member },
      { path: '/community/worldFood',component:WorldFood },
      { path: '/community/log',component:Log },
    ]},

    //只要路由中有requiresAuth，就必须要登录之后才等进入
    { path: '/order',component: Order ,meta:{ requiresAuth: true } },
    { path: '/orderList',component: OrderList,meta:{ requiresAuth: true } },
    { path: '/user-center',component: UserCenter,meta:{ requiresAuth: true } },
    { path: '/pay',component:Pay ,meta:{requiresAuth:true} }, 
    { path: '/addressList',component: AddressList,meta: { requiresAuth:true } },
    { path: '/userInfo',component: UserInfo,meta: { requiresAuth:true } },
    { path: '/setting',component: Setting,meta: { requiresAuth:true } },
    { path: '/search',component: Search },
    { path: '/list',component: List },
    { path: '/detail/:id',component:Detail },
    { path: '/login',component:Login },
    { path: '/password-login',component:PasswordLogin },
    { path: '/forget-password',component:ForgetPassword },
    { path: '/register',component:Register }, 
    
  
  ]
});


/* 
  肯定会面试， 路由鉴权
*/
router.beforeEach((to,from,next)=>{
  if(to.meta.requiresAuth){
    if(store.getters.isLogin){
      //如果登录
      next();
    }else{
      next({
        path:'/login',
        query:{
          redirect:to.path
        }
      })
    }
  }else{
    next();
  }

})


export default router;