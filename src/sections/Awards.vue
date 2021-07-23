<template>
    <section id="awards" class="section">
        <div class="container mx-auto p-8">
            <Heading title="Scholarhips and Awards" />
            <div class="flex my-3" v-for="(award, id) in awards" :key="id">
                <div class="school w-2/5">
                    <h4 class="font-bold text-xl">{{ award.institution}}</h4>
                    <p>{{ award.date }}</p>
                </div>
                <div class="degree w-3/5">
                    <h5 class="font-bold text-lg">{{ award.title }}</h5>
                    <p>{{ award.description }}</p>
                </div>
            </div>
        </div>
    </section> 
</template>

<script>
import Heading from '../components/Heading.vue'
export default {
    name: 'Awards',
    components: {
        Heading
    },
    data(){
        return {
            awards: [
                {
                    institution: 'SUNY at Albany',
                    date: 'OCT 2020',
                    title: 'Scholarship: Charles S. Ochab Information Studies'
                },
                {
                    institution: 'Fulbright Commission',
                    date: 'AUG 2019- MAY 2021',
                    title: 'Scholarhip: Fulbright Foreign Student Program',
                    description: 'Selected by the Fulbright Commission in Ecuador to pursue a master’s degree study in the USA'
                },
                {
                    institution: 'IEEE ETCM 2016',
                    date: 'OCT-2016',
                    title: 'Award for best Computer Science Session',
                    description: 'Research Paper: “Enhancing Quality of Argumentation in a Co-located Collaborative Environment through a Tabletop System”'
                },
                {
                    institution: 'Shanghai University, China',
                    date: 'JUL-AUG 2016',
                    title: 'Scholarship: Shanghai Summer School'
                }
            ]
        }
    },
    methods: {
        
    }

}
</script>

<style>

</style>
