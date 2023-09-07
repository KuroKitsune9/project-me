    <template>
        <div>
            <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
            <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Brand</h1>
            <br>
            <div class="grid md:grid-cols-4 gap-8">
                <div v-for="brand in getBrandById" :key="brand.id"
                    class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    
                        <img class="object-cover w-full rounded-md h-72 xl:h-80" src="https://images.unsplash.com/photo-1603320410149-db26b12d5c2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80" alt="T-Shirt">
                    
                    <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                                
                                <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">{{ brand.name }}</h4>
                                <p class="text-black-500"></p>

                                <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                                    <router-link :to="{ name: 'SingleProduk', params: { id: brand.id } }" class="group">
                                    <span class="mx-1">View Produk</span>
                                </router-link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </template>

    <script>
    import { mapGetters, mapActions } from "vuex";

    export default {
        data() {
            return {
                token: '',
                brand: '',
            }
        },
        computed: {
            ...mapGetters("brand", ["getBrandById"]),
            product() {
                return this.getBrandById(Number(this.$route.params.id));
            },
    //         async addwishlist(productId) {
    //             await this.$store.dispatch('wishlist/Addwishlist', productId);
    //             alert('Produk telah ditambahkan ke Wishlist!');
    //         },
        },
        methods: {
            ...mapActions("brand", ["fetchBrand", "fetchBrandById"]),
            // ...mapActions("wishlist", ["AddhWishlist", "DeleteWishlist"]),
            // ...mapActions("keranjang", ["fetchKeranjang"]),
            formatCurrency(amount) {
                return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(amount);
            }
        },
        beforeMount() {
            this.fetchBrand();
            // this.fetchKeranjang()
        },
        mounted() {
            const cektoken = localStorage.getItem("token");
            const brandId = this.$route.params.id;
            this.fetchBrandById(brandId);
            this.token = cektoken
          
        },

    };
    </script>

    <style lang="scss" scoped></style>