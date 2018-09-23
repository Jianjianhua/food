import DefaultLayout from './DefaultLayout.vue';
import FormLayout from './FormLayout.vue';
export default {
  install(Vue){
    Vue.component(DefaultLayout.name,DefaultLayout);
    Vue.component(FormLayout.name,FormLayout);
  }
}