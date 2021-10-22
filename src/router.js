import Vue from "vue";
import router from "vue-router";
import Home from "@/components/Home.vue";
import Form from "@/components/baitap2/Form.vue";

Vue.use(router);

export default new router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/form",
      name: "form",
      component: Form,
    },
  ],
});
