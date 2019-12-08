import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/record",
    name: "record",
    component: () => import("../views/Record.vue")
  },
  {
    path: "/charge",
    name: "charge",
    component: () => import("../views/Charge.vue")
  },
  {
    path: "/mine",
    name: "mine",
    component: () => import("../views/Mine.vue")
  },
  {
    path: "/bounty",
    name: "bounty",
    component: () => import("../views/Bounty.vue")
  },
  {
    path: "/bounty/rule",
    name: "bountyRule",
    component: () => import("../views/BountyRule.vue")
  },
  {
    path: "/faq",
    name: "faq",
    component: () => import("../views/Faq.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
