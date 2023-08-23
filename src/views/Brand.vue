<template>
    <div class="bg-white">
        <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <center>
            <h2 class="text-2xl font-semibold tracking-tight text-gray-900">Brand</h2>
        </center>
            <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                <div v-for="data in getBrand" class="group relative">
                    <!-- <router-link :to="/category/ + category"> -->
                        <div 
                            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                            <img :src="data.logo"
                                alt="Front of men&#039;s Basic Tee in black."
                                class="h-full w-full object-cover object-center lg:h-full lg:w-full">
                        </div>
                        <div  class="mt-4 flex justify-between">
                            <div>
                                <h3 class="text-1xl font-medium text-gray-700">
                                    <a href="#">
                                        <span aria-hidden="true" class="absolute inset-0">
                                        {{ data.name }}
                                    </span>
                                    </a>
                                </h3>
                            </div>
                        </div>
                    <!-- </router-link> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters('brand', ['getBrand']),
    },
    methods: {
        ...mapActions('brand', ['fetchBrand']),
        capitalizeFirstLetter(text) {
            return text.charAt(0).toUpperCase() + text.slice(0,20);
        },

    },
    created() {
        this.fetchBrand();
    },
}
</script>

<style lang="scss" scoped></style>