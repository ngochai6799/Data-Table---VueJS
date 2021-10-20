import Vue from "vue";
import router from "router";
import Home from "@/components/Home.vue";

Vue.use(router);

export default router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
  ],
});
