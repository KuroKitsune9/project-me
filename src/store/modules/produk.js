// import { createStore } from "vuex";
import axios from "axios";
import keranjang from "./keranjang";

const product = {
    namespaced: true,
    state: {
        productsData: [],
        Keranjang: []
    },
    getters: {
        getProducts: (state) => state.productsData,

        getProductById: (state) => (productId) => {
            console.log("Fetching single product by ID:", productId);
            console.log("ProductsData:", state.productsData);
            const product = state.productsData.find((p) => p.id == productId);
            console.log("Products:", product);
            return product;
        },
    },
    actions: {
        async fetchProduct({ commit }) {
            try {
                const dataProduct = await axios.get("https://ecommerce.olipiskandar.com/api/v1/product/search")
                commit('SET_PRODUCTS', dataProduct.data['products']['data'])
            } catch (error) {
                // alert('Ada error')
                console.log(error)
            }
        },
        async fetchSingleProduct({ commit }, productId) {
            try {
                const response = await axios.get(
                    `https://ecommerce.olipiskandar.com/api/v1/product/details/${productId}`
                );
                commit("SET_SINGLE_PRODUCT", response.data['products']);
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
        async AddKeranjang({ commit, dispatch }, variationId) {
            try {
                const response = await axios.post(
                    "https://ecommerce.olipiskandar.com/api/v1/carts/add", {
                    "variation_id": variationId,
                    "qty": 1,
                    "temp_user_id": null
                }, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem("token")}`
                    }
                });
                commit("ADD_KERANJANG", response.data)
                console.log(response.data)
            } catch (error) {
                console.error(error);
                
            }
            finally {
                dispatch("keranjang/fetchKeranjang", null,{root: true})
            }
        },
    },
    mutations: {
        SET_PRODUCTS(state, products) {
            state.productsData = products;
        },
        SET_SINGLE_PRODUCT(state, product) {
            state.singleProducts = product;
        },
        ADD_KERANJANG(state, Keranjang) {
            state.AddKeranjang = Keranjang
        }
    }
}

export default product;