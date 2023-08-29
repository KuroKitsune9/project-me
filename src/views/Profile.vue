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
                        </tbody>
                    </table>

                    <div class="text-center my-3">

                    </div>

                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters('user', ['getUser']),
        ...mapGetters("keranjang",  ["getAddress"]),
    },
    methods: {
        ...mapActions('user', ['fetchUser']),
        ...mapActions("keranjang", ["fetchAddress"]),
    },
    created() {
        this.fetchUser();
        this.fetchAddress()
    },
}
</script>