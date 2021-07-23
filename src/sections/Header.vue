<template>
    <header
        class="flex flex-col  content-center h-screen bg-fixed bg-center bg-cover bg-no-repeat" 
    >
        <h1 class="mt-64 pt-4 text-white text-7xl tracking-tight font-mono leading-none text-center">
            <span>
                Gabriel Falcones
            </span>
        </h1>
        <p class="mt-4 mx-24 text-3xl text-white font-sans text-opacity-75 text-center">Software Developer</p>
    </header>
</template>

<script>
export default {
    name: 'Header',
    data(){
        return {
            
        }
    },
    methods: {
        
    }

}
</script>

<style scoped>
header {
    background-image: linear-gradient(90deg, rgba(2,0,36,0.7) 0%, rgba(96,165,250,0.7) 0%, rgba(96,165,250,0.7) 96%), url("../assets/coding_wallpaper.png"); 
}

h1 span{
    border-bottom: 1px solid #FFFFFF;
    border-bottom-color: rgba(255,255,255,0.35);
}
</style>
