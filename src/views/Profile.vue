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
                                <td class="px-2 py-2 text-gray-500 font-semibold">Your wishlist</td>
                                <td class="px-2 py-2 text-gray-500 font-semibold">:
                                </td>
                                <td class="px-2 py-2">{{ getWishlist.data.length }}</td>
                            </tr>
                            <tr>
                                <td class="px-2 py-2 text-gray-500 font-semibold">Product Your Order</td>
                                <td class="px-2 py-2 text-gray-500 font-semibold">:
                                </td>
                                <td class="px-2 py-2">{{ getDashboard.total_order_products }}</td>
                            </tr>
                            <!-- <tr>
                                <td class="px-2 py-2 text-gray-500 font-semibold"><router-link to="/history"><u>Purchase History</u></router-link></td>
                            </tr> -->
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
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters('user', ['getUser', 'getDashboard']),
        ...mapGetters("keranjang", ["getAddress"]),
        ...mapGetters("wishlist", ["getWishlist"]),
    },
    methods: {
        ...mapActions('user', ['fetchUser', 'fetchDashboard']),
        ...mapActions("keranjang", ["fetchAddress"]),
        ...mapActions("wishlist", ["fetchWishlist"])
    },
    created() {
        this.fetchUser();
        this.fetchAddress();
        this.fetchWishlist();
        this.fetchDashboard();
    },
}
</script>