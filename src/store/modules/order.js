import axios from "axios";

const order = {
  namespaced: true,
  state: {
    orderData: [],
    orderHistory:[]
  },
  getters: {
    getOrder: (state) => state.orderData,
    getorderhistory: (state) => state.orderHistory
  },
  actions: {
    async fetchOrderData({ commit }, orderCode) {
      try {
        const urlOrder = `https://ecommerce.olipiskandar.com/api/v1/user/order/${orderCode}`;
        const responseOrder = await axios.get(urlOrder, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        commit("SET_ORDER", responseOrder.data["data"]);
        console.log(responseOrder.data);
      } catch (error) {
        console.error(error);
        alert(error);
      }
    },
    async fetchOrderhistory({ commit }, orderCode) {
      try {
        const urlOrder = "https://ecommerce.olipiskandar.com/api/v1/user/orders";
        const responseOrderHitory = await axios.get(urlOrder, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        commit("SET_ORDER_HISTORY", responseOrderHitory.data.data);
        console.log(responseOrderHitory.data['data']);
        // console.log(responseOrderHitory.orders.products);
      } catch (error) {
        console.error(error);
        alert(error);
      }
    },
  },
  mutations: {
    SET_ORDER(state, order) {
      state.orderData = order;
    },
    SET_ORDER_HISTORY(state, history) {
      state.orderHistory = history;
    },
  },
};

export default order;
