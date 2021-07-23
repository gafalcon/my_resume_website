<template>
    <div class="section flex flex-col content-center mb-8">
        <h1 class="pt-4 text-blue-700 text-5xl tracking-tight font-mono leading-none text-center">
            {{ title }}
        </h1>
        <p class="mt-4 mx-24 text-3xl text-white font-sans text-opacity-75 text-center">{{ subtitle }}</p>
    </div>
</template>

<script>
export default {
    name: 'Heading',
    props: {
        title: String,
        subtitle: String
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
