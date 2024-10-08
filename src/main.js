import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import store from './__data__/store/index.js'

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App),
}).$mount('#app');
