// import { createStore } from "vuex";
import axios from "axios";


const wishlist = {
    namespaced: true,
    state: {
        wishlist: [],
    },
    getters: {
        getWishlist: (state) => state.wishlist,
    },
    actions: {
        async fetchWishlist({ commit }) {
            try {
                const dataWishlist = await axios.get("https://ecommerce.olipiskandar.com/api/v1/user/wishlists", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    }
                })
                console.log(dataWishlist.data)
                commit('SET_WISHLIST', dataWishlist.data['data'])
            } catch (error) {
                alert('Ada error')
                console.log(error)
            }
        },
        async AddhWishlist({ commit }, productId) {
            try {
                const dataWishlist = await axios.post("https://ecommerce.olipiskandar.com/api/v1/user/wishlists",
                    {
                        product_id: productId
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`,
                        }
                    })
                console.log(dataWishlist.data)
                commit('ADD_WISHLIST', dataWishlist.data)
            } catch (error) {
                alert('Ada error')
                console.log(error)
            }
        },
        async DeleteWishlist({ commit, dispatch }, productId) {
            try {
                const response = await axios.delete(
                    `https://ecommerce.olipiskandar.com/api/v1/user/wishlists/${productId}`,
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`,
                        },
                    }
                );
                // console.log(deleteCart.data.message);
                commit("DELETE_WISHLIST", productId);
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        },
    },
    mutations: {
        SET_WISHLIST(state, wishlist) {
            state.wishlist = wishlist;
        },
        ADD_WISHLIST(state, wishlist) {
            state.wishlist = wishlist;
        },
        DELETE_WISHLIST(state, wishlist) {
            state.wishlist = wishlist;
        },
    }
}

export default wishlist;