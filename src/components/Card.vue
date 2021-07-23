<template>
    <div>
        
        <img :src="require(`@/assets/${img_url}`)" :alt="title" class="w-full h-64 object-cover object-center rounded-lg shadow-md">    
        
        <div class="relative px-4 -mt-16  ">
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <h4 class="mt-1 text-xl text-blue-800 font-semibold uppercase leading-tight truncate">
                    <a :href="url" target="_blank" >{{title}} <i class="fas fa-external-link-alt"></i></a>
                </h4>
                
                <div class="mt-1">
                    {{description}}
                </div>
                <div class="mt-4">
                    <span class="text-blue-800 text-md font-semibold">Tags: </span>
                    <span> {{tags.join(', ')}} </span>
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
