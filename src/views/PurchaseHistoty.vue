<template>
     <h2 class="text-2xl font-semibold tracking-tight text-gray-900 px-7">your Addres</h2>
    <!-- Bagiab Table Alamat -->
    <div class="flex flex-col">
        <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-6">
                <div class="overflow-hidden">
                    <table class="min-w-full" >
                        <thead class="bg-gray-200 border-b">
                            <tr>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    id alamat
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    alamat
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Kode
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Negara
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Kota
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    No tel
                                </th>
                            </tr>
                        </thead>
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
        formatCurrency(amount) {
            return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(amount);
        },
    },
    created() {
        this.$store.dispatch('order/fetchOrderData', this.orderCode);
        this.fetchAddress()
        this.fetchKeranjang();
    },
};
</script>