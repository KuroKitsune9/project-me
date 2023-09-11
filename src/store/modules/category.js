import { createStore } from "vuex";
import axios from "axios";

const categories = {
    namespaced : true,
    state: {
        categories : [],
        categoryBySlug: [],
    },
    getters: {
        getCategories: (state) => state.categoriesData,
        getCategoriesBySlug: (state) => state.categoryBySlug
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
        },
        async fetchCategoryBySlug({ commit }, categorySlug) {
            try {
                const response = await axios.get('https://ecommerce.olipiskandar.com/api/v1/product/search', {
                    params: {
                        page: 1,
                        category_slug: categorySlug,
                        brand_ids: '',
                        attribute_values: '',
                        sort_by: 'popular',
                    },
                });
                commit('SET_CATEGORY_BY_SLUG', response.data.products.data);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        },
    },
    mutations: {
        SET_CATEGORIES(state, categories){
            state.categoriesData = categories
        },
        SET_CATEGORY_BY_SLUG(state, categoriesSlug){
            state.categoryBySlug = categoriesSlug
        }
    }
}

export default categories;