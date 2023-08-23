<template>
<div class="flex items-center h-screen w-full justify-center">

<div class="max-w-xs">
    <div class="bg-white shadow-xl rounded-lg py-3">
        <div class="photo-wrapper p-2">
            
        </div>
        <div class="p-2">
            <h3 class="text-center text-xl text-gray-900 font-medium leading-8">{{ getUser.name }}</h3>
            <div class="text-center text-gray-400 text-xs font-semibold">
            </div>
            <table class="text-xs my-3">
                <tbody>
                <tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                    <td class="px-2 py-2">{{ getUser.phone }}</td>
                </tr>
                <tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">Email</td>
                    <td class="px-2 py-2">{{ getUser.email }}</td>
                </tr>
            </tbody></table>

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
    },
    methods: {
        ...mapActions('user', ['fetchUser']),
    },
    created() {
        this.fetchUser();
    },
}
</script>