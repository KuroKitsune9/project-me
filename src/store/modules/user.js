// import { createStore } from "vuex";
import axios from "axios";

const user = {
    namespaced: true,
    state: {
        UserData: [],
        Dashboard: [],
        recentProduct: [],
    },
    getters: {
        getUser: (state) => state.UserData,
        getDashboard: (state) => state.UserDashboard,
        getrecentProduct: (state) => state.getrecentProduct
    },
    actions: {
        async fetchUser({ commit }) {
            try {
                const dataUser = await axios.get(
                    'https://ecommerce.olipiskandar.com/api/v1/user/info', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`

                    }
                })
                // console.log(dataUser.data)
                commit('SET_USER', dataUser.data['user'])
            } catch (error) {
                alert('Ada error')
                console.log(error)
            }
        },
        async fetchDashboard({ commit }) {
            try {
                const dataDashboard = await axios.get(
                    'https://ecommerce.olipiskandar.com/api/v1/user/dashboard', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`

                    }
                })
                console.log(dataDashboard.data)
                commit('SET_DASHBOARD', dataDashboard.data)
            } catch (error) {
                // alert('Ada error')
                console.log(error)
            }
        },
        async fetchRecentproduct({ commit }) {
            try {
                const dataRecent = await axios.get(
                    'https://ecommerce.olipiskandar.com/api/v1/user/dashboard', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`

                    }
                })
                console.log(dataRecent.data.recent_purchased_products.data)
                commit('SET_RECENT_PRODUCT', dataRecent.data.recent_purchased_products.data)
            } catch (error) {
                // alert('Ada error')
                console.log(error)
            }
        },
    },
    mutations: {
        SET_USER(state, users) {
            state.UserData = users;
        },
        SET_DASHBOARD(state, dashboard){
            state.UserDashboard = dashboard
        },
        SET_RECENT_PRODUCT(state, recent) {
            state.getrecentProduct = recent
        }
    }
}

export default user;