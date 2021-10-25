import Vue from "vue";
import router from "vue-router";
import Home from "@/components/Home.vue";
import Form from "@/components/baitap2/Form.vue";
import Select from "@/components/baitap3/Select.vue";

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
    {
      path: "/select",
      name: "select",
      component: Select,
    },
  ],
});
