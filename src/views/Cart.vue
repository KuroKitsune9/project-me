<template>
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <div class="container mx-auto px-4 ">
            <h1 class="text-2xl font-semibold mb-4">Shopping Cart</h1>
            <div class="flex flex-col md:flex-row gap-4">
                <div class="md:w-3/4 col">
                    <div class="bg-white rounded-lg shadow-md p-6 mb-4" v-for="(data) in getKeranjang" :key="data.cart_id">
                        <table class="w-full">
                            <thead>
                                <tr>
                                    <th class="text-left font-semibold">img</th>
                                    <th class="text-left font-semibold">Price</th>
                                    <th class="text-left font-semibold">Quantity</th>
                                    <th class="text-left font-semibold">Total</th>
                                    <th class="text-left font-semibold">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="py-4">
                                        <div class="flex items-center">
                                            <img class="h-18 w-40 mr-4"
                                                src="https://images.unsplash.com/photo-1603320410149-db26b12d5c2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
                                                alt="Product image">
                                            <span class="font-semibold">{{ data.name }}</span>
                                        </div>
                                    </td>
                                    <td class="py-4">{{ formatCurrency(data.regular_price) }}</td>
                                    <td class="py-4">
                                        <div class="flex items-center">
                                            <button @click="change_qty({ cart_id: data.cart_id, type: 'minus' })"
                                                class="border rounded-md py-2 px-4 mr-2">-</button>
                                            <span class="text-center w-8">{{ data.qty }}</span>
                                            <button @click="change_qty({ cart_id: data.cart_id, type: 'plus' })"
                                                class="border rounded-md py-2 px-4 ml-2">+</button>
                                        </div>
                                    </td>
                                    <td class="py-4">{{ formatCurrency(data.regular_price * data.qty) }}</td>
                                    <td class="py-4"><button @click="DeleteKeranjang(data.cart_id)"
                                            class="border rounded-md py-2 px-4 ml-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </button></td>
                                        <td>{{ data.address }}</td>
                                </tr>
                                <!-- More product rows -->
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="md:w-1/4">
                    <div class="bg-white rounded-lg shadow-md p-6">
                        <h2 class="text-lg font-semibold mb-4">Summary</h2>
                        <div class="flex justify-between mb-2">
                            <span>Subtotal</span>
                            <span>{{ formatCurrency(calculateSubtotal) }}</span>
                        </div>
                        <div class="flex justify-between mb-2">
                            <span class="font-semibold">Alamat</span>
                            <span class="font-semibold">{{ getAddress[0].city }}</span>
                        </div>
                        <hr class="my-2">
                        <div class="flex justify-between mb-2">
                            <span class="font-semibold">Total</span>
                            <span class="font-semibold">{{ formatCurrency(calculateTotal) }}</span>
                        </div>
                        <router-link to="/checkout">
                        <button class="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">Checkout</button>
                        </router-link>
                    </div>
                </div>
                </div>
                </div>
            </div>
</template>

<script>

import { mapGetters, mapActions } from "vuex";
export default {
    name: 'KeranjangBadge',
    data() {
        return {
            totalAmount: 0
        }
    },
    computed: {
        ...mapGetters("keranjang", ["getKeranjang", "getAddress"]),
        
        calculateTotal() {
            return this.getKeranjang.reduce((total, cartItem) => {
                return total + cartItem.regular_price * cartItem.qty;
            }, 0);
        },
        calculateSubtotal() {
            return this.getKeranjang.reduce((subtotal, cartItem) => {
                return subtotal + cartItem.regular_price * cartItem.qty;
            }, 0);
        }

    },
    methods: {
        ...mapActions("keranjang", ["fetchKeranjang", "DeleteKeranjang", "change_qty", "fetchAddress"]),
        formatCurrency(amount) {
            return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(amount);
        },
        watch: {
            calculateTotal: {
                immediate: true,
                handler(newValue) {
                    this.totalAmount = newValue;
                },
            },
        },
        formatCurrency(amount) {
            return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(amount);
        },

    },
    created() {
        this.fetchKeranjang()
        this.fetchAddress()
    }
}
</script>