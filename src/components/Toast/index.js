import Vue from "vue";
import Toast from './Toast.vue';


const ToastConstructor = Vue.extend(Toast);


const init = () => {
  const instance = new ToastConstructor({
    el: document.createElement('div'),
  });
  document.body.appendChild(instance.$el);
  return instance;
}

export const toast = function (options) {
  const instance = init();
  Object.assign(instance.$data, options);
  return instance;
}
export default {
  install(Vue) {
    Vue.prototype.$toast = function (options) {
      const instance = toast({ ...options,
        autoCloseTime: 1000
      });
    };
  }
}
