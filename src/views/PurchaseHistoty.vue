<template>
    <h2 class="text-2xl font-semibold tracking-tight text-gray-900 px-9 px-7">your History Purchase</h2>
    <!-- Bagiab Table Alamat -->
    <div class="flex flex-col">
        <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-6">
                <div class="overflow-hidden">
                    <table class="min-w-full">
                        <thead class="bg-gray-200 border-b">
                            <tr>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Code order
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    total barang
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Total
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody v-for="orderHistory in getorderhistory">
                            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {{ orderHistory.code }}
                                    <p class="text-sm font-bold text-gray-600 truncate block capitalize mt-2 ml-4">{{
                                        orderHistory.date }}</p>
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {{ orderHistory.orders[0].products.data.length }}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {{ formatCurrency(orderHistory.orders[0].subtotal) }}
                                </td>
                                <td>
                                    <!-- <router-link :to="{ name: 'Order/:code', params: { OrderCode: orderHistory.code } }"> -->
                                    <button
                                        class="group relative h-10 w-40 overflow-hidden rounded-lg bg-white text-lg shadow">
                                        <div
                                            class="absolute inset-0 w-0 bg-slate-700 transition-all duration-[250ms] ease-out group-hover:w-full">
                                        </div>
                                        <span class="relative text-black group-hover:text-white">view detail</span>
                                    </button>
                                <!-- </router-link> -->
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    props: ['orderCode'],
    computed: {
        ...mapGetters('order', ['getOrder', 'getorderhistory']),
        ...mapGetters("keranjang", ["getAddress", "getKeranjang"]),

        calculateTotal() {
            return this.getKeranjang.reduce((total, cartItem) => {
                return total + cartItem.regular_price * cartItem.qty;
            }, 0);
        },
    },
    methods: {
        ...mapActions("keranjang", ["fetchAddress"]),
        ...mapActions('keranjang', ['fetchKeranjang']),
        ...mapActions('order', ['fetchOrderData','fetchOrderhistory']),
        formatCurrency(amount) {
            return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(amount);
        },
    },
    created() {
        this.$store.dispatch('order/fetchOrderData', this.orderCode);
        this.fetchAddress()
        this.fetchKeranjang();
        this.fetchOrderhistory();
    },
};
</script>