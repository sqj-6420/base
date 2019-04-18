import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import 'babel-polyfill';
// 全局样式引入
import '@/assets/scss/main.scss';

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios,axios);

Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')