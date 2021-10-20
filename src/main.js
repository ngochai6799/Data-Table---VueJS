import App from './App.vue'
import Vue from 'vue'
import Vuex from 'vuex'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vuex)

Vue.config.productionTip = false;
Vue.config.debug = true;
Vue.config.devtools = true;

new Vue({
  el: '#app',
  render: h => h(App),
  store
})