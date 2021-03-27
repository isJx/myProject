import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index.vue";
import AllProduct from "../views/AllProduct.vue";
import Details from "../views/Details.vue";
import Cart from "../views/Cart.vue";
import Favorite from "../views/Favorite.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/favorite/:uid", component: Favorite, props: true },
  { path: "/cart/:uid", component: Cart, props: true },
  { path: "/", component: Index },
  { path: "/product", component: AllProduct },
  { path: "/details/:pid", component: Details, props: true },
  {
    path: "/about",
    name: "About",
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
