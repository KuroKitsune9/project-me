<template>
    <section class="py-12 sm:py-16">
        <div class="container mx-auto px-4">
            <div v-if="product">
                <nav class="flex">
                    <ol role="list" class="flex items-center">
                        <li class="text-left">
                            <div class="-m-1">
                                <router-link to="/">
                                    <a href="#"
                                        class="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800">
                                        Home </a>
                                </router-link>
                            </div>
                        </li>


                        <li class="text-left">
                            <div class="flex items-center">
                                <span class="mx-2 text-gray-400">/</span>
                                <div class="-m-1">
                                    <a href="#"
                                        class="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                                        aria-current="page"> {{ product.name }} </a>
                                </div>
                            </div>
                        </li>
                    </ol>
                </nav>

                <div class="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
                    <div class="lg:col-span-3 lg:row-end-1">
                        <div class="lg:flex lg:items-start">
                            <div class="lg:order-2 lg:ml-5">
                                <div class="max-w-xl overflow-hidden rounded-lg">
                                    <img class="h-full w-full max-w-full object-cover"
                                        src="https://images.unsplash.com/photo-1603320410149-db26b12d5c2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
                                        alt="Fotone" />
                                </div>
                            </div>

                            <div class="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                                <div class="flex flex-row items-start lg:flex-col">
                                    <button type="button"
                                        class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center">
                                        <img class="h-full w-full object-cover"
                                            src="https://images.unsplash.com/photo-1603320410149-db26b12d5c2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
                                            alt="" />
                                    </button>
                                    <button type="button"
                                        class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center">
                                        <img class="h-full w-full object-cover"
                                            src="https://images.unsplash.com/photo-1603320410149-db26b12d5c2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
                                            alt="" />
                                    </button>
                                    <button type="button"
                                        class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center">
                                        <img class="h-full w-full object-cover"
                                            src="https://images.unsplash.com/photo-1603320410149-db26b12d5c2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
                                            alt="" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="lg:col-span-2 lg:row-span-2 lg:row-end-2">
                        <h1 class="sm: text-2xl font-bold text-gray-900 sm:text-3xl">{{ product.name }}</h1>

                        <div class="mt-5 flex items-center">
                            <div class="flex items-center">
                                <svg class="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20" fill="currentColor">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                        class=""></path>
                                </svg>
                                <svg class="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20" fill="currentColor">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                        class=""></path>
                                </svg>
                                <svg class="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20" fill="currentColor">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                        class=""></path>
                                </svg>
                                <svg class="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20" fill="currentColor">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                        class=""></path>
                                </svg>
                                <svg class="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20" fill="currentColor">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                        class=""></path>
                                </svg>
                            </div>
                            <p class="ml-2 text-sm font-medium text-gray-500">{{ product.rating }}</p>
                        </div>
                        <div
                            class="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
                            <div class="flex items-end">
                                <h1 class="text-3xl font-bold">{{ formatCurrency(product.base_price) }}</h1>
                                <!-- <span class="text-base">/month</span> -->
                            </div>
                            <div v-if="token">
                                <button type="button" @click="AddKeranjang(product.variations[0].id)"
                                    class="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="shrink-0 mr-3 h-5 w-5" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                    </svg>
                                    Add to cart
                                </button>
                                <button @click="AddhWishlist(product.variations[0].product_id)"
                        class="rounded-full w-22 h-22  p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                        <svg  stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            class="w-5 h-5" viewBox="0 0 24 24">
                            <path
                                d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z">
                            </path>
                        </svg>
                    </button>
             <button type="button" @click="DeleteWishlist(product.id)" class="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-8 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">Delete from wishlist</button>
                            </div>
                            <div v-else>
                                <router-link to="/login"><button type="submit"
                                        class="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="shrink-0 mr-3 h-5 w-5" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                        </svg>
                                        Add to cart
                                    </button></router-link>
                            </div>
                        </div>
                    </div>
                    <div class="lg:col-span-3">
                        <div class="border-b border-gray-300">
                            <nav class="flex gap-4">
                                <a href="#" title=""
                                    class="border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800">
                                    Description </a>


                            </nav>
                        </div>

                        <div class="mt-8 flow-root sm:mt-12">
                            <p class="mt-4">{{ product.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
                <div v-else>
                    <center>
                        <img src="https://hackernoon.com/images/0*4Gzjgh9Y7Gu8KEtZ.gif" alt="Girl in a jacket" width="500"
                            height="600">
                    </center>
                </div>
        </div>
    </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    data() {
        return {
            token: null
        }
    },
    computed: {
        ...mapGetters("produk", ["getProductById"]),
        product() {
            return this.getProductById(Number(this.$route.params.id));
        },
        async addwishlist(productId) {
            await this.$store.dispatch('wishlist/Addwishlist', productId);
            alert('Produk telah ditambahkan ke Wishlist!');
        },
    },
    methods: {
        ...mapActions("produk", ["fetchSingleProduct", "fetchProduct", "AddKeranjang"]),
        ...mapActions("wishlist", ["AddhWishlist", "DeleteWishlist"]),
        ...mapActions("keranjang", ["fetchKeranjang"]),
        formatCurrency(amount) {
            return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(amount);
        }
    },
    beforeMount() {
        this.fetchProduct()
        this.fetchKeranjang()
    },
    mounted() {
        const cektoken = localStorage.getItem("token");
        const productId = this.$route.params.id;
        this.fetchSingleProduct(productId);
        this.token = cektoken
        console.log(cektoken)
    },

};
</script>