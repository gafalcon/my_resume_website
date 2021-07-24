<template>
    <div class="section-title flex flex-col content-center mb-8">
        <h1 class="pt-4 text-3xl md:text-5xl tracking-tight font-mono leading-none text-center" :class="[color]">
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
        subtitle: String,
        color: {
            type: String,
            default: 'text-blue-700'
        }
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
