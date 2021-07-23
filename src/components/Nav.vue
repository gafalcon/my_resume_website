<template>
    <nav class="flex flex-col divide-y-2 divide-gray-400 fixed top-0 right-0 mr-10 mt-2 mr-10 mt-24">
        <a class="text-sm pt-7 text-center text-white font-bold font-mono w-28 h-20" :class="`${ current === section.tag ? 'bg-blue-500 hover:bg-blue-400': 'bg-black hover:bg-gray-800' }`"
           v-for="(section, i) in sections" :key="i"
           :href="`#${section.tag}`">
            {{ section.name }}
        </a>
    </nav>
</template>

<script>
export default {
    name: 'Nav',
    props: {
        current: String
    },
    data(){
        return {
            sections: [
                {name: 'Profile', tag: 'profile'},
                {name: 'Experiences', tag: 'experiences'},
                {name: 'Abilities', tag: 'skills'},
                {name: 'Projects', tag: 'projects'},
                {name: 'Contact', tag: 'contact'},
            ]
        
        }
    },
    methods: {
        
    }

}
</script>

<style>

</style>
