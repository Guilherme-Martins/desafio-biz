import './assets/scss/custom.scss';
import Vue from 'vue';
import VueRouter from 'vue-router';
import {Vue2Storage} from 'vue2-storage'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import ElementUI from 'element-ui';
import moment from 'moment-timezone';
import App from './App.vue';
import router from './router';
import BizContainer from './components/BizContainer.vue';

moment.tz.setDefault('America/Sao_Paulo');
moment.locale('pt-br');

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Vue2Storage);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(ElementUI);

Vue.component('BizContainer', BizContainer);

new Vue({
  router,
  render: h => h(App),
  created () {
    if (!this.$storage.has('biz-watchlist')) {
      this.$storage.set('biz-watchlist', []);
    }
  },
}).$mount('#app');
