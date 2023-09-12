import { createRouter, createWebHistory } from 'vue-router'
// // import HomeView from '../views/HomeView.vue'
import ProdukView from '../views/Produk.vue'
import Category from '../views/Category.vue'
import SingleProduk from "../views/SingleProduk.vue";
import Login from '../views/Login.vue';
import Register from '../views/Register.vue'
// import CategoryDetail from '../views/CategoryDetail.vue';
// // import SingleSurah from '../views/SingleSurah.vue'
import Cart from '../views/Cart.vue'
import brand from '../views/Brand.vue';
import user from '../views/Profile.vue';
import checkout from '../views/Checkout.vue'
import order from '../views/Order.vue';
import DetailBrand from '../views/DetailBrand.vue'
import DetailCategory from '../views/DetailCategory.vue'
import PurchaseHistory from '../views/PurchaseHistoty.vue'
import DetailWishlist from '../views/DetailWishlist.vue'

function cekToken(to, from, next) {
  var isAuthenticated = false;
  if (localStorage.getItem("token")) {
    isAuthenticated = true;
    next();
  } else {
    isAuthenticated = false;
    next('/login')
  }
}


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "products",
      component: ProdukView,
      beforeEnter: cekToken,
    },
    {
      path: "/category",
      name: "category",
      component: Category,
      beforeEnter: cekToken,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    {
      path: "/product/:id",
      name: "SingleProduk",
      component: SingleProduk,
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart,
      beforeEnter: cekToken,
    },
    {
      path: "/brand",
      name: "brand",
      component: brand,
      beforeEnter: cekToken,
    },
    {
      path: "/profile",
      name: "profile",
      component: user,
      beforeEnter: cekToken,
    },
    {
      path: "/checkout",
      name: "checkout",
      component: checkout,
      beforeEnter: cekToken,
    },
    {
      path: "/order/:orderCode",
      name: "order",
      component: order,
      props: true,
    },
    {
      path: "/brand/:id",
      name: "DetailBrand",
      component: DetailBrand,
      props: true,
    },
    {
      path: '/category/:slug',
      name: 'DetailCategory',
      component: DetailCategory,
      props: true
    },
    {
      path: "/history",
      name: "history",
      component: PurchaseHistory,
    },
    {
      path: "/your-wishlist",
      name: "history",
      component: DetailWishlist,
    },
  ],
});

export default router
