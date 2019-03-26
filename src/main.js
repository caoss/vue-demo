import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'animate.css';
import App from './App.vue';
import router from './router';
import './icons';
// 国际化
import i18n from './lang'

Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,
  i18n,
  render: h => h(App)
});