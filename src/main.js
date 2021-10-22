import App from "./App.vue";
import Vue from "vue";
import Vuex from "vuex";
import store from "./store";
import router from "./router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "../src/assets/style/index.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import { ValidationProvider } from "vee-validate/dist/vee-validate.full.esm";
import { ValidationObserver } from "vee-validate";

Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(Vuex);

Vue.config.productionTip = false;
Vue.config.debug = true;
Vue.config.devtools = true;

new Vue({
  el: "#app",
  render: (h) => h(App),
  store,
  router,
});
