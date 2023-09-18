<template>
    <div class="flex items-center h-screen w-full justify-center">

        <div class="max-w-xs">
            <div class="bg-white shadow-xl rounded-lg py-3">
                <div class="photo-wrapper p-2">
                </div>
                <div class="p-6">
                    <center>
                        <svg class="w-24 h-24 mb-3 rounded-full shadow-lg" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                clip-rule="evenodd"></path>
                                  
                        </svg>
                    </center>
                    <h3 class="text-center text-xl text-gray-900 font-medium leading-8">{{ getUser.name }}</h3>
                    <div class="text-center text-gray-400 text-xs font-semibold">
                    </div>
                    <table class="text-xs my-3">
                        <tbody>
                            <tr>
                                <td class="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                                <td class="px-2 py-2 text-gray-500 font-semibold">:</td>
                                <td class="px-2 py-2">{{ getAddress[0].phone }}</td>
                            </tr>
                            <tr>
                                <td class="px-2 py-2 text-gray-500 font-semibold">Email</td>
                                <td class="px-2 py-2 text-gray-500 font-semibold">:
                                </td>
                                <td class="px-2 py-2">{{ getUser.email }}</td>
                            </tr>
                            <tr>
                                <td class="px-2 py-2 text-gray-500 font-semibold">addres</td>
                                <td class="px-2 py-2 text-gray-500 font-semibold">:
                                </td>
                                <td class="px-2 py-2">{{ getAddress[0].address }}</td>
                            </tr>
                            <tr>
                                <td class="px-2 py-2 text-gray-500 font-semibold">country</td>
                                <td class="px-2 py-2 text-gray-500 font-semibold">:
                                </td>
                                <td class="px-2 py-2">{{ getAddress[0].country }}</td>
                            </tr>
                            <tr>
                                <td class="px-2 py-2 text-gray-500 font-semibold">city</td>
                                <td class="px-2 py-2 text-gray-500 font-semibold">:
                                </td>
                                <td class="px-2 py-2">{{ getAddress[0].city }}</td>
                            </tr>
                            <tr>
                                <td class="px-2 py-2 text-gray-500 font-semibold"><router-link to="/your-wishlist"><u>Your wishlist</u></router-link></td>
                                <td class="px-2 py-2 text-gray-500 font-semibold">:
                                </td>
                                <td class="px-2 py-2">{{ getWishlist.length }}</td>
                            </tr>
                            <tr>
                                <td class="px-2 py-2 text-gray-500 font-semibold">Product Your Order</td>
                                <td class="px-2 py-2 text-gray-500 font-semibold">:
                                </td>
                                <td class="px-2 py-2">{{ getDashboard.total_order_products }}</td>
                            </tr>
                            <tr>
                                <td class="px-2 py-2 text-gray-500 font-semibold"><router-link to="/purchase-history"><u>See your Purchase History</u></router-link></td>
                            </tr>
                        </tbody>
                    </table>

                    <div class="text-center my-3">

                    </div>

                </div>
            </div>
        </div>

    </div>
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
                        <tbody v-for="alamat in getAddress" >
                            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ alamat.id }}</td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {{ alamat.address }}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {{ alamat.postal_code }}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {{ alamat.country }}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {{ alamat.city }}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {{ alamat.phone }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <h2 class="text-2xl font-semibold tracking-tight text-gray-900 px-7 py-8">Product Your Order</h2>
    <!-- Bagiab Table Recent purchase -->
    <div class="flex flex-col">
        <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
            <div class="py-1 inline-block min-w-full sm:px-6 lg:px-6">
                <div class="overflow-hidden">
                    <table class="min-w-full" >
                        <thead class="bg-gray-200 border-b">
                            <tr>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    id barang
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    gambar
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    nama barang
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Discount
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Harga
                                </th>
                            </tr>
                        </thead>
                        <tbody v-for="recent in getrecentProduct" >
                            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ recent.id }}</td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    <router-link :to="{ name: 'SingleProduk', params: { id: recent.id } }">
                                    <img class="h-20" src="https://images.unsplash.com/photo-1603320410149-db26b12d5c2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80" alt="">
                                </router-link>
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {{ recent.name }}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {{ formatCurrency(recent.base_discounted_price) }}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {{ formatCurrency(recent.base_price) }}
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
    computed: {
        ...mapGetters('user', ['getUser', 'getDashboard', 'getrecentProduct']),
        ...mapGetters("keranjang", ["getAddress"]),
        ...mapGetters("wishlist", ["getWishlist"]),
        ...mapGetters("order", ["getorderhistory"])
    },
    methods: {
        ...mapActions('user', ['fetchUser', 'fetchDashboard', 'fetchRecentproduct']),
        ...mapActions("keranjang", ["fetchAddress"]),
        ...mapActions("wishlist", ["fetchWishlist"]),
        ...mapActions("order", ["fetchOrderhistory"]),
        formatCurrency(amount) {
            return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(amount);
        },
    },
    created() {
        this.fetchUser();
        this.fetchAddress();
        this.fetchWishlist();
        this.fetchDashboard();
        this.fetchRecentproduct();
        this.fetchOrderhistory();
    },
}
</script>