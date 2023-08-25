<template>
        <span class="flex absolute -mt-6 ml-4">
        <span class=" inline-flex px-2 text-center rounded-full w-6 bg-pink-500"> {{ getKeranjang.length }}
        </span>
    </span>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";
    export default {
        name: 'KeranjangBadge',
        data() {
            return {
                total: 0

            }
        },
        computed: {
            ...mapGetters("keranjang", ["getKeranjang"])
        },
        methods: {
            ...mapActions("keranjang", ["fetchKeranjang"])
        },
        beforeMount() {
            this.fetchKeranjang()
        }
    }
</script>