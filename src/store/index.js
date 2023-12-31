import { createStore } from "vuex";
// import donatur from "./modules/donatur";
// import clients from "./modules/clients";
// import transaksi from "./modules/transaksi";
import user from "./modules/user";
// import berita from "./modules/berita";
import produk from "./modules/produk.js";
import category from "./modules/category.js";
import auth from "./modules/auth.js";
// import surah from "./modules/surah.js";
import brand from "./modules/brand.js";
import keranjang from "./modules/keranjang.js"
import order from "./modules/order.js";
import wishlist from "./modules/wishlist";
import search from "./modules/search";

const store = createStore({
    state: {
        isLoading: false,
    },
    modules: {
        // donatur,
        // clients,
        // transaksi,
        user,
        // berita,
        produk,
        category,
        auth,
        // surah,
        brand,
        keranjang,
        order,
        wishlist,
        search
    },
});

export default store;