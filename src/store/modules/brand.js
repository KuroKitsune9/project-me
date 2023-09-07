import { createStore } from "vuex";
import axios from "axios";

const brand = {
    namespaced : true,
    state: {
        brandData : [],
        selectBrand : [],
    },
    getters: {
        getBrand: (state) => state.brandData,
        getBrandById: (state) => state.selectBrand
    },
    actions: {
        async fetchBrand({ commit }) {
            try {
                const dataBrand = await axios.get("https://ecommerce.olipiskandar.com/api/v1/all-brands")
                commit('SET_BRAND', dataBrand.data.data.slice(0,20))
            } catch (error) {
                alert ('Ada error')
                console.log(error)
            }
        },
        async fetchBrandById({ commit }, BrandId, pageId) {
            try {
                const response = await axios.get('https://ecommerce.olipiskandar.com/api/v1/product/search',
                {
                  params: {
                    page: pageId,
                    brand_ids: BrandId,
                    attribute_values: '',
                    sort_by: 'popular',
                  },
                }
              );
              console.log('Response from API:', response.data);
              // Simpan produk yang diterima ke dalam state
              commit('SET_BRANDID', response.data.products.data);
              console.log(response.data)
            } catch (error) {
              console.error('Error fetching products:', error);
            }
          },
    },
    mutations: {
        SET_BRAND(state, brand){
            state.brandData = brand
        },
        SET_BRANDID(state, BrandId){
          state.selectBrand = BrandId
        }
    }
}

export default brand;