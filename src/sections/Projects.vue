<template>
    <section id="projects" class="section bg-yellow-100">
        <div class="container mx-auto p-8">
            <Heading title="Projects" />

            <div class="grid grid-cols-3 gap-16">
                <Card v-for="(project, i) in projects_web" :key="i"
                      :title="project.title"
                      :img_url="project.img_url"
                      :url="project.url"
                      :tags="project.tags"
                      :description="project.description"
                />
            </div>
        </div>
    </section> 
</template>

<script>
import Heading from '../components/Heading.vue'
import Card from '../components/Card.vue'
export default {
    name: 'Projects',
    components: {
        Heading, Card
    },
    data(){
        return {
            projects_web: [
                {img_url: 'kf.png', url: 'https://knowledgeforum.org', title: 'Knowledge Forum', description: 'A knowledge forum is an electronic group workspace designed to support the process of knowledge building.', tags: ['ReactJS', 'Redux', 'ExpressJS', 'MongoDB']},
                {img_url: 'covid_tracker.png', url: 'https://mysterious-brook-20381.herokuapp.com/', title: 'Covid Tracker', description: 'Display covid-19 stats of cofirmed cases and confirmed deaths globally and by country.', tags: ['VueJS', 'GoogleAPI']},
                // {img_url: '', url: '', title: 'Travel Planner', description: '', tags: []},
                // {img_url: '', url: '', title: 'Ecommerce', description: '', tags: []},
                // {img_url: '', url: '', title: '', description: '', tags: []},
            ],
            projects_ml: [
                {img_url: '', url: '', title: '', description: '', tags: []},
                {img_url: '', url: '', title: '', description: '', tags: []},
                {img_url: '', url: '', title: '', description: '', tags: []},
                {img_url: '', url: '', title: '', description: '', tags: []},
            ]
        }
    },
    methods: {
        
    }

}
</script>

<style>

</style>
