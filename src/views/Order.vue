<template>
    <!-- component -->
    <div class="flex justify-center items-center h-screen bg-gray-200 text-gray-900">
        <div class="rounded-md relative w-100% shadow-2xl p-3 bg-white">
            <div class="py-2">
                <div class="text-center text-xl font-bold">ORDER</div>
                <div class="text-center text-xs font-bold">The order details</div>
                <div class="text-center text-xs font-bold">Thanks For Buying</div>
            </div>
            <div class="text-center text-xs font-bold mb-1">~~~~~~~~~~~~~~~~~~~~~~~~~~~~</div>
            <div class="text-xs pl-2">
                <table>
                    <tr>
                        <td><div class="text-xs mb-1">Order Code</div></td>
                        <td>：</td>
                        <td>{{ getOrder.code }}</td>
                    </tr>
                    <tr>
                        <td><div class="text-xs mb-1">Customer</div></td>
                        <td>：</td>
                        <td>{{ getOrder.user.name }}</td>
                    </tr>
                    <tr>
                        <td><div class="text-xs mb-1">TelePhone</div></td>
                        <td>：</td>
                        <td>{{ getAddress[0].phone }}</td>
                    </tr>
                    <tr>
                        <td><div class="text-xs mb-1">Email</div></td>
                        <td>：</td>
                        <td>{{ getOrder.user.email }}</td>
                    </tr>
                    <tr>
                        <td><div class="text-xs mb-1">Shipping address</div></td>
                        <td>:</td>
                        <td>{{ getAddress[0].address }},{{ getAddress[0].postal_code }},{{ getAddress[0].state }},{{ getAddress[0].city }},{{ getAddress[0].country }}</td>
                    </tr>
                    <tr>
                        <td><div class="text-xs mb-1">Delivery Type</div></td>
                        <td>:</td>
                        <td>{{ getOrder.orders[0].payment_type }}</td>
                    </tr>
                    <tr>
                        <td><div class="text-xs mb-1">Delivery Type</div></td>
                        <td>:</td>
                        <td>{{ getOrder.orders[0].delivery_type }}</td>
                    </tr>
                </table>
            </div>
            <div class="border-double border-t-4 border-b-4 border-l-0 border-r-0 border-gray-900 my-3">
                <div class="flex text-sm pt-1 px-1">
                    <span class="w-2/6">Name</span>
                    <span class="w-2/6 text-right">Price</span>
                    <span class="w-2/6 text-right">Number</span>
                </div>
                <div v-for="(order,) in getOrder.orders[0].products.data">
                <div class="border-dashed border-t border-b border-l-0 border-r-0 border-gray-900 mt-1 my-2 py-2 px-1">
                    <div class="flex justify-between text-sm">
                        <span class="w-2/6 truncate">{{ order.name }}</span>
                        <span class="w-2/6 text-right">{{ order.total }}</span>
                        <span class="w-2/6 text-right">{{ order.quantity }}</span>
                    </div>
                </div>
            </div>
            </div>
            <div class="text-xs">
                <div class="text-right">
                    <div>Time: {{ getOrder.date }}</div>
                    <div class="font-bold text-sm">Total: {{ getOrder.grand_total }}</div>
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
        ...mapGetters('order', ['getOrder']),
        ...mapGetters("keranjang",  ["getAddress", "getKeranjang"]),

        calculateTotal() {
            return this.getKeranjang.reduce((total, cartItem) => {
                return total + cartItem.regular_price * cartItem.qty;
            }, 0);
        },
    },
    methods: {
        ...mapActions("keranjang", ["fetchAddress"]),
        ...mapActions('keranjang', ['fetchKeranjang']),
    },
    created() {
        this.$store.dispatch('order/fetchOrderData', this.orderCode);
        this.fetchAddress()
        this.fetchKeranjang();
    },
};
</script>