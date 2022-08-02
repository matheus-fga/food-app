import Vue from 'vue'
import Vuex from 'vuex'
import { store } from './store/store'
import App from './App.vue'
import './assets/css/global.less'
import router from './router'
import 'es6-promise/auto'

Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
