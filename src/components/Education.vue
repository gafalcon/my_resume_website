<template>
    <div class="education px-4 pb-8 experience-section">
        <h2 class="text-blue-700 text-3xl">Education <i class="fas fa-graduation-cap"></i></h2>
        <div class="flex flex-wrap my-3" v-for="education in educations" :key="education.id">
            <div class="school w-full md:w-2/5">
                <h4 class="font-bold text-xl">{{ education.school }}</h4>
                <p>{{ education.location }}</p>
                <p>{{ education.date }}</p>
            </div>
            <div class="w-full degree md:w-3/5 mb-4">
                <h5 class="font-bold text-lg">{{ education.degree }}</h5>
                <p class="text-justify">Arcu odio ut sem nulla pharetra diam sit amet nisl suscipit? Dignissim sodales ut eu sem integer vitae justo eget magna fermentum iaculis eu non diam phasellus vestibulum lorem sed.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Education',
    data(){
        return {
            educations: [
                {
                    id: 1,
                    school: 'SUNY at Albany',
                    location: 'Albany, NY, US',
                    date: 'AUG 2019 - MAY 2021',
                    degree: 'MS in Computer Science'
                },
                {
                    id: 2,
                    school: 'Escuela Superior Politécnica del Litoral, ESPOL',
                    location: 'Guayaquil, Ecuador',
                    date: 'MAY 2010 - SEPT 2016',
                    degree: 'Bachelor: Computer Science Engineer' 
                },
            ]
        }
    },
    methods: {
        
    }

}
</script>

<style>

</style>
