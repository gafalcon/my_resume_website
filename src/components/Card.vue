<template>
    <div>
        <img :src="require(`@/assets/${img_url}`)" :alt="title" class="w-full h-64 object-fill object-center rounded-lg shadow-md">
        <div class="relative px-4 -mt-16  ">
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <h4 class="mt-1 text-xl text-blue-800 font-semibold uppercase leading-tight truncate">
                    <a :href="url" target="_blank" class="hover:text-blue-600">{{title}} <i class="fas fa-external-link-alt"></i></a>
                </h4>

                <div class="mt-1">
                    {{description}}
                </div>
                <div class="mt-4 flex flex-wrap">
                    <span class="text-xs p-1 bg-gray-300 text-white ml-1 rounded mb-1" v-for="tag in tags" :key="tag">{{tag}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        img_url: String,
        title: String,
        description: String,
        tags: Array,
        url: String
    },
    data(){
        return {

        }
    },
    methods: {

    }

}
</script>

<style>

</style>
