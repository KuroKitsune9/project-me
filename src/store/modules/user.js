// import { createStore } from "vuex";
import axios from "axios";

const user = {
    namespaced: true,
    state: {
        UserData: [],
        // token: localStorage.getItem("token") || "",
    },
    getters: {
        getUser: (state) => state.UserData,
    },
    actions: {
        async fetchUser({ commit }) {
            try {
                const token = localStorage.getItem("token");
                const dataUser = await axios.get(
                    'https://ecommerce.olipiskandar.com/api/v1/user/info', {
                    headers: {
                        Authorization: `Bearer ${token}`
                        
                    }
                })
                console.log(dataUser.data)
                commit('SET_USER', dataUser.data['user'])
            } catch (error) {
                alert('Ada error')
                console.log(error)
            }
        },
    },
    mutations: {
        SET_USER(state, users) {
            state.UserData = users;
        },
    }
}

export default user;