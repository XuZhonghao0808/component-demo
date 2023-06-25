import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import App from './App.vue'
import router from './router/index.js'
import store from './store';
import './mock'

Vue.config.productionTip = false
Vue.use(ElementUI)

//axios.defaults.baseURL = 'http://localhost:8088'
Vue.prototype.$axios = axios

new Vue({
  render: h => h(App),
  router: router,
  store: store
}).$mount('#app')
