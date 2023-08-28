// import { createStore } from "vuex";
import axios from "axios";
import swal from "sweetalert";

const keranjang = {
  namespaced: true,
  state: {
    keranjang: [],
    address: [],
    dataCheckout: [],
  },
  getters: {
    getKeranjang: (state) => state.keranjang,
    getAddress: (state) => state.address,
    getCheckout: (state) => state.dataCheckout,
  },
  actions: {
    async fetchKeranjang({ commit }) {
      try {
        const dataKeranjang = await axios.post(
          "https://ecommerce.olipiskandar.com/api/v1/carts",
          {
            temp_user_id: null,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        // console.log(dataKeranjang.data.cart_items.data);
        commit("SET_KERANJANG", dataKeranjang.data.cart_items.data);
      } catch (error) {
        alert("Ada error");
        console.log(error);
      }
    },
    async fetchAddress({ commit }) {
      try {
        const dataAddress = await axios.get(
          "https://ecommerce.olipiskandar.com/api/v1/user/addresses",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log(dataAddress.data.data);
        commit("SET_ADDRESS", dataAddress.data.data);
        return dataAddress.data
      } catch (error) {
        alert("Ada error");
        console.log(error);
      }
    },
    async DeleteKeranjang({ commit, dispatch }, keranjangId) {
      try {
        const deleteCart = await axios.post(
          "https://ecommerce.olipiskandar.com/api/v1/carts/destroy",
          {
            cart_id: keranjangId,
            temp_user_id: null,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        // console.log(deleteCart.data.message);
        // commit("DELETE_KERANJANG", deleteCart.data.message);
        swal("Deleted", "Your item has been removed!", "error");
      } catch (error) {
        console.log(error);
      } finally {
        dispatch("keranjang/fetchKeranjang", null, { root: true });
      }
    },
    async change_qty({ commit, dispatch }, param) {
      try {
        const changeCart = await axios.post(
          "https://ecommerce.olipiskandar.com/api/v1/carts/change-quantity",
          param,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        // console.log(deleteCart.data.message);
        // commit("DELETE_KERANJANG", deleteCart.data.message);
      } catch (error) {
        console.log(error);
      } finally {
        dispatch("keranjang/fetchKeranjang", null, { root: true });
      }
    },
    async checkoutCart(
      { commit, dispatch },
      {
        shippingAddress,
        billingAddress,
        paymentType,
        deliveryType,
        cart_item_ids,
      }
    ) {
      try {
        const response = await axios.post(
          `https://ecommerce.olipiskandar.com/api/v1/checkout/order/store`,
          {
            shipping_address_id: shippingAddress,
            billing_address_id: billingAddress,
            payment_type: paymentType,
            delivery_type: deliveryType,
            cart_item_ids: cart_item_ids,
            transactionId: null,
            receipt: null,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        commit("SET_CHECKOUT", response.data);
        console.log(response.data.message);
        dispatch("fetchKeranjang");
      } catch (error) {
        alert("Error");
        console.log(error);
      }
    },
  },
  mutations: {
    SET_KERANJANG(state, keranjang) {
      state.keranjang = keranjang;
    },
    SET_ADDRESS(state, address) {
      state.address = address;
    },
    SET_CHECKOUT(state, keranjang) {
      state.dataCheckout = keranjang;
    },
  },
};

export default keranjang;
