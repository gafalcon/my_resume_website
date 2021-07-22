<template>
    <div class="work px-4 pb-8 section">
        <h2 class="text-blue-700 text-3xl">Work Experience <i class="fas fa-briefcase"></i></h2>
        <div class="flex my-3" v-for="(job, jindex) in jobs" :key="jindex">
            <div class="company w-2/5">
                <h4 class="font-bold text-xl">{{ job.company }}</h4>
                <p>{{ job.date }}</p>
            </div>
            <div class="degree w-3/5">
                <h5 class="font-bold text-lg">{{ job.title }}</h5>
                <ul class="list-disc list-inside list-inside">
                    <li v-for="(desc, i) in job.description" :key="i">{{desc}}</li> 
                </ul>
                <a class="text-blue-500" :href="job.url"><i class="fas fa-link"></i> {{ job.url }}</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Work',
    data(){
        return {
            jobs: [
                {
                    'company': 'SUNY at Albany',
                    'date': 'MAR 2020 - MAY 2021',
                    'title': 'Part Time Web Developer',
                    'description': [
                        'Development and Support of Web Application. Database systems design. Front-end (Angular, ReactJS) and Back-end(ExpressJS, MongoDB)'
                    ],
                    'url': 'https://kf6-stage.ikit.org/'
                },
                {
                    'company': 'Escuela Superior Politécnica del Litoral, ESPOL',
                    'date': 'OCT 2018 - AUG 2019',
                    'title': 'Teaching Assistant in Computer Science',
                    'description': [
                        'Teaching students in laboratory sessions for an introductory course to Computer Science.',  
                    ],
                    'url': 'https://espol.edu.ec'
                },
                {
                    'company': 'Centro de Tecnologías de Información, CTI',
                    'date':'MAY 2015 - SEPT 2018',
                    'title':'Software Developer | Research Assistant',
                    'description': [
                        'Research in computer vision and multimodal learning analytics, focused in the development of collaborative and educational applications.',
                        'Assistance in experimentation processes with university students. Collect and preprocess data, perform statistical analysis, using machine learning and data mining techniques, and present results of the experiments.',
                        'Development of educational collaborative software for interactive surfaces.',
                        'Implementation of software solutions that enable the tracking of objects and people using computer vision',
                        'Development of web applications, front-end, back-end. Database systems design.'
                    ],
                    'url': 'https://cti.espol.edu.ec'
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
