import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue"
import Products from "../views/Products.vue"
import Details from "../views/Details.vue"
import Cart from "../views/Cart.vue"
import Account from "../views/Account.vue"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/products",
    name: "Products",
    component: Products
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/Navbar.vue")
  },
  {
    path: "/details",
    name: "Details",
    component: Details
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart
  },
   {
    path: "/account",
    name: "Account",
    component: Account
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
