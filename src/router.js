import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import SignIn from "./views/SignInFlow/SignIn";
import Request from "./views/SignInFlow/Request";
import Recover from "./views/SignInFlow/Recover";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/signin",
      name: "signin",
      component: SignIn
    },
    {
      path: "/request",
      name: "request",
      component: Request
    },
    {
      path: "/recover",
      name: "recover",
      component: Recover
    }

    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "./views/About.vue")
    // }
  ]
});
