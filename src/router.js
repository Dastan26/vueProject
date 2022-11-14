import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Main from "./modules/main/Main-page.vue";
import About from "./modules/about/About-page.vue";
import News from "./modules/news/News-page.vue";
import Contacts from "./modules/contacts/Contacts-page.vue";

export default new VueRouter({
  mode: "history",
  routes: [
    {
      name: "main",
      path: "/",
      component: Main,
    },
    {
      name: "about",
      path: "/about",
      component: About,
    },
    {
      name: "news",
      path: "/news",
      component: News,
    },
    {
      name: "contacts",
      path: "/contacts",
      component: Contacts,
    },
  ],
});
