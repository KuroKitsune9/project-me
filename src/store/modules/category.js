import { createStore } from "vuex";
import axios from "axios";

const categories = {
    namespaced : true,
    state: {
        categories : [],
    },
    getters: {
        getCategories: (state) => state.categoriesData
    },
    actions: {
        async fetchCategories({ commit }) {
            try {
                const dataCategories = await axios.get("https://ecommerce.olipiskandar.com/api/v1/all-categories")
                commit('SET_CATEGORIES', dataCategories.data.data.slice(0,20))
            } catch (error) {
                alert ('Ada error')
                console.log(error)
            }
        }
    },
    mutations: {
        SET_CATEGORIES(state, categories){
            state.categoriesData = categories
        }
    }
}

export default categories;