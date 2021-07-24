<template>
    <section id="publications" class="pb-8 section bg-gray-200">
        <div class="container mx-auto p-8">
            <Heading title="Publications" />
            <ul>
                <li class="list-disc list-inside mb-2 text-lg text-justify" v-for="(publication, id) in publications" :key="id">
                    {{ publication.desc }}
                </li>
            </ul>
        </div>
    </section> 
</template>

<script>
import Heading from '../components/Heading.vue'
export default {
    name: 'Publications',
    components: {
        Heading
    },
    data(){
        return {
            publications: [
                {
                    desc: 'Xavier Ochoa, Federico Domínguez, Bruno Guamán, Ricardo Maya, Gabriel Falcones and James Castells. The RAP System: Automatic Feedback of Oral Presentation Skills using Multimodal Analysis and Low-Cost Sensors. LAK 2018.'
                },
                {
                    desc: 'Gabriel Falcones, V. Echeverría, K. Chiluiza, M. Wong-Villacrés: “Enhancing Quality of Argumentation in a Co-located Collaborative Environment through a Tabletop System”. IEEE ETCM 2016.'
                },
                {
                    desc: 'Echeverria, V., Falcones, G., Castells, J., Granda, R., & Chiluiza, K. (1828). Multimodal collaborative workgroup dataset and challenges. In CEUR Workshop Proceedings (pp. 94-98).'
                },
                {
                    desc: 'Echeverria, V., Falcones, G., Castells, J., Martinez-Maldonado, R., & Chiluiza, K. (2017, April). Exploring on-time automated assessment in a co-located collaborative system. In eDemocracy & eGovernment (ICEDEG), 2017 Fourth International Conference on (pp. 273-276). IEEE.'
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
