<template>
    <!-- component -->
    <!-- follow me on twitter @asad_codes -->

    <div class="">
        <!-- navbar -->
        <nav class="flex justify-between bg-gray-900 text-white w-screen">
            <div class="px-5 xl:px-12 py-6 flex w-full items-center">
                <a class="text-3xl font-bold font-heading" href="#">
                    <!-- <img class="" src="C:\Users\Muharafi Dalilah\Pictures\Logo\PNG\s-1.png" alt="logo"> -->
                    KuroKitsune
                </a>
                <!-- Nav Links -->
                <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                    <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="/category">category</router-link></li>
                    <li><router-link to="/brand">Brand</router-link></li>
                </ul>
                <div class="pt-2 relative mx-auto text-gray-600" @click="closeSearch">
        <input class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search" name="search" placeholder="Search" v-model="searchKeyword" @input="searchProducts">
          <div v-if="showResults" class="search-results absolute bg-white border border-gray-400 mt-1 w-full py-1 shadow-md">
            <ul class="list-unstyled p-0">
                <li v-for="product in searchResults" :key="product.id" class="py-1 px-5">
                    <router-link :to="{ name: 'SingleProduk', params: { id: product.id } }" class="text-gray-900 text-sm">
                        <div class="flex items-center">
                            <img src="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg" :alt="product.name" class="w-10 h-10 object-cover mr-2" />
                            <div>
                                <div class="font-medium">{{ product.name }}</div>
                                <div class="text-red-500 font-bold">{{ formatRupiah(product.base_price) }}</div>
                            </div>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
        <button type="submit" class="absolute right-0 top-0 mt-5 mr-4" disabled>
          <svg class="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
            viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve"
            width="512px" height="512px">
            <path
              d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
          </svg>
        </button>
      </div>
                <!-- Header Icons -->
                <div class="hidden xl:flex items-center space-x-5 items-center">
                    <router-link to="/cart">
                        <a class="flex items-center hover:text-gray-200" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <KeranjangBadge></KeranjangBadge>
                        </a>
                    </router-link>
                    <!-- Sign In / Register      -->
                    <router-link to="/profile">
                    <a class="flex items-center hover:text-gray-200" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </a>
                </router-link>
                    <div v-if="isAuthenticated" class="flex md:order-2">
                        <button @click="logout" type="button"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Logout
                        </button>
                    </div>
                    <div v-else class="flex md:order-2">
                        <router-link to="/login" type="button"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Login
                        </router-link>
                    </div>
                </div>
            </div>
            <!-- Responsive navbar -->
            <a class="xl:hidden flex mr-6 items-center" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span class="flex absolute -mt-5 ml-4">
                    <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
                    </span>
                </span>
            </a>
        </nav>
    </div>
    <!-- Does this resource worth a follow? -->
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import KeranjangBadge from './KeranjangBadge.vue';


export default {
    data() {
        return {
            searchKeyword: "",
        }
    },
    components: {
        KeranjangBadge
    },
    computed: {
        ...mapGetters('auth', ['isAuthenticated']),
        searchResults() {
            return this.$store.getters["search/getSearchResults"];
        },
        showResults() {
            return this.searchResults.length > 0;
        },
    },
    methods: {
        ...mapActions('auth', ['logout']),
        searchProducts() {
            if (this.searchKeyword.trim() !== "") {
                this.$store.dispatch("search/fetchSearchResults", this.searchKeyword);
            } else {
                this.$store.commit("search/SET_SEARCH_RESULTS", []);
            }
        },
        closeSearch() {
            this.$store.commit("search/SET_SEARCH_RESULTS", []);
        },

        formatRupiah(number) {
            const formatter = new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR"
            });
            return formatter.format(number);
        },
    },
};
</script>

