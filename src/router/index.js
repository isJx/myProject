import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/favorite/:uid",
    name: "Favorite",
    component: () => import(/* webpackChunkName: "favorite" */ "../views/Favorite.vue"),
    props: true,
  },
  {
    path: "/cart/:uid",
    name: "Cart",
    component: () => import(/* webpackChunkName: "cart" */ "../views/Cart.vue"),
    props: true,
  },
  {
    path: "/product",
    name: "AllProduct",
    component: () => import(/* webpackChunkName: "allproduct" */ "../views/AllProduct.vue"),
  },
  {
    path: "/details/:pid",
    name: "Details",
    component: () => import(/* webpackChunkName: "details" */ "../views/Details.vue"),
    props: true,
  },
  {
    path: "/about",
    name: "About",
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/",
    component: Index,
    // 缓存设置
    // meta: {
    //   keepAlive: true,
    // },
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
