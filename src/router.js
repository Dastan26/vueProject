import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      name: "main",
      path: "/",
    },
    {
      name: "about",
      path: "/about",
    },
    // {},
    // {},
  ],
});
