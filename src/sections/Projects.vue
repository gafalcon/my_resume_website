<template>
    <section id="projects" class="section bg-yellow-100">
        <div class="container mx-auto p-8">
            <Heading title="Projects" />

            <h3 class="text-blue-700 text-2xl">Web</h3>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-16 mb-6">
                <Card v-for="(project, i) in projects_web" :key="i"
                      :title="project.title"
                      :img_url="project.img_url"
                      :url="project.url"
                      :tags="project.tags"
                      :description="project.description"
                />
            </div>

            <h3 class="text-blue-700 text-2xl">ML</h3>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-16 mb-4">
                <Card v-for="(project, i) in projects_ml" :key="i"
                      :title="project.title"
                      :img_url="project.img_url"
                      :url="project.url"
                      :tags="project.tags"
                      :description="project.description"
                />
            </div>
            <p class="text-center text-2xl">
                <a class="text-blue-600 hover:text-blue-400" href="https://github.com/gafalcon">Check out my github projects: <i class="fab fa-github"></i></a>
            </p>
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
                {img_url: 'travel_planner.png', url: 'http://54.147.114.159.nip.io/', title: 'Travel Planner', description: 'Book Travel Packages', tags: ['Angular', 'ExpressJs', 'GoogleAPIS']},
                // {img_url: '', url: '', title: 'Ecommerce', description: '', tags: []},
                // {img_url: '', url: '', title: '', description: '', tags: []},
            ],
            projects_ml: [
                {img_url: 'rap.png', url: 'https://github.com/gafalcon/dl_rap_postures', title: 'Posture Classifier', description: 'Classifying posture of speakers using deep learning', tags: ['Deep Learning', 'Tensorflow']},
                // {img_url: '', url: '', title: '', description: '', tags: []},
                // {img_url: '', url: '', title: '', description: '', tags: []},
                // {img_url: '', url: '', title: '', description: '', tags: []},
            ]
        }
    },
    methods: {
        
    }

}
</script>

<style>

</style>
