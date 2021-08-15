<template>
    <div class="work px-4 pb-8 experience-section">
        <h2 class="text-blue-700 text-3xl">Work Experience <i class="fas fa-briefcase"></i></h2>
        <div class="flex flex-wrap my-3" v-for="(job, jindex) in jobs" :key="jindex">
            <div class="company w-full md:w-2/5">
                <h4 class="font-bold text-xl">{{ job.company }}</h4>
                <p>{{ job.date }}</p>
            </div>
            <div class="degree w-full md:w-3/5 mb-4">
                <h5 class="font-bold text-lg">{{ job.title }}</h5>
                <ul class="list-disc list-inside list-inside">
                    <li class="text-justify" v-for="(desc, i) in job.description" :key="i">{{desc}}</li> 
                </ul>
                <a class="text-blue-500 hover:text-blue-400" :href="job.url"><i class="fas fa-link"></i> {{ job.url }}</a>
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
                      'Development and Support of Web Applications.',
                      'Design and Creation of interactive real-time web applications using modern technologies (Angular, React, ExpressJS, SocketIO)',
                      'Database systems design in MongoDB',
                    ],
                    'url': 'https://kf6-stage.ikit.org/'
                },
                {
                    'company': 'Escuela Superior Politécnica del Litoral, ESPOL',
                    'date': 'OCT 2018 - AUG 2019',
                    'title': 'Teaching Assistant in Computer Science',
                    'description': [
                      'Teach an introductory course to Computer Science for university students.',
                      'Tutor Computer Science students on their internship projects.'
                    ],
                    'url': 'https://espol.edu.ec'
                },
                {
                    'company': 'Centro de Tecnologías de Información, CTI',
                    'date':'MAY 2015 - SEPT 2018',
                    'title':'Software Developer | Research Assistant',
                    'description': [
                      'Data Analysis: Collect and Process Data, using machine learning and data mining techniques, on several experiments performed on university students. (Python, Scikit-learn, Pandas, etc)',
                      'Develop full-stack web applications and database design. (Django, AngularJS, MySQL)',
                      'Develop desktop applications and embedded apps for Windows and Linux (C#, Python)',
                      'Implement software for tracking people and objects, using Computer Vision and Deep Learning (C++, Python, OpenCV, Tensorflow)',
                      'Research in computer vision and multimodal learning analytics, focused in the development of collaborative and educational applications.'
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
