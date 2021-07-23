<template>
    <section id="experiences" class="bg-gray-100">
        <div class="container mx-auto p-8">
            <Heading title="Experiences" />
            <Education/>
            <Work/>
        </div>
    </section> 
</template>

<script>
import Heading from '../components/Heading.vue'
import Education from '../components/Education.vue'
import Work from '../components/Work.vue'

export default {
    name: 'Experiences',
    components: {
        Heading, Education, Work
    },
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
