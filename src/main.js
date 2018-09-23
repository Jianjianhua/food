// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyload from 'vue-lazyload'
import App from './App'
import router from './router'
import layouts from './layouts/index'
import GlobalComponents from './components/index'
import Toast from './components/Toast/index';
import Services from './service';
import store from './store/index'
import 'lib-flexible'
import 'swiper/dist/css/swiper.css'
import "font-awesome/css/font-awesome.min.css"
Vue.config.productionTip = false
Vue.use(Toast);
Vue.use(VueAwesomeSwiper)
Vue.use(GlobalComponents);
Vue.use(layouts);
Vue.use(Services);
Vue.use(VueLazyload)

/* 处理移动端 active伪类无法生效的问题 */
document.body.addEventListener('touchstart',()=>{});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
