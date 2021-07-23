<template>
    <section id="skills" class="p-16">
        <div class="container mx-auto px-60">
            <Heading title="Abilities" />
            <template v-for="(section, i) in sections" :key="i">
                <SkillSection :title="section.name" :skills="section.skills" />
            </template>
        </div>
    </section> 
</template>

<script>
import Heading from '../components/Heading.vue'
import SkillSection from '../components/SkillSection.vue'
export default {
    name: 'Abilities',
    components: {
        Heading, SkillSection
    },
    data(){
        return {
            sections: [
                {name: 'Languages', skills: [
                    {skill: 'Spanish (Native)', rating: 5},
                    {skill: 'English (Fluent)', rating: 5}
                ]},
                {name: 'Operating Systems', skills: [
                    {skill: 'Linux', rating: 5},
                    {skill: 'Windows', rating: 5}
                ]},
                {name: 'Programming Languages', skills: [
                    {skill: 'Python', rating: 5},
                    {skill: 'Javascript', rating: 5},
                    {skill: 'Java', rating: 4.5},
                    {skill: 'C#', rating: 4},
                    {skill: 'C++', rating: 3.5},
                    {skill: 'PHP', rating: 3},
                    {skill: 'R', rating: 3},
                    {skill: 'Bash', rating: 3.5}
                ]},
                {name: 'Machine Learning', skills: [
                    {skill: 'Scikit-Learn', rating: 5},
                    {skill: 'Pandas', rating: 5},
                    {skill: 'Pytorch', rating: 3.5},
                    {skill: 'Tensorflow', rating: 3},
                    {skill: 'Keras', rating: 3}
                ]},
                {name: 'Web | Front-End', skills: [
                    {skill: 'HTML', rating: 5},
                    {skill: 'CSS', rating: 3},
                    {skill: 'ReactJS', rating: 4},
                    {skill: 'VueJS', rating: 4},
                    {skill: 'Angular', rating: 4},
                    {skill: 'JQuery', rating: 4},
                    {skill: 'Bootstrap 4', rating: 4},
                    {skill: 'TailwindCss', rating: 3},
                ]
                },
                {name: 'Web | Back-End', skills: [
                    {skill: 'ExpressJS', rating: 4},
                    {skill: 'Django', rating: 4},
                    {skill: 'Laravel', rating: 4},
                    {skill: 'Spring Boot', rating: 3}
                ]},
                {name: 'Databases', skills: [
                    {skill: 'MySQL | MariaDB', rating: 4},
                    {skill: 'PostgreSQL', rating: 4},
                    {skill: 'MongoDB', rating: 4},
                    {skill: 'SQL Server', rating: 3.5}
                ]},
                {name: 'Additional Tools', skills: [
                    {skill: 'Git', rating: 5},
                    {skill: 'Jupyter notebooks', rating: 5},
                    {skill: 'Latex', rating: 3},
                    {skill: 'Emacs', rating: 5},
                    {skill: 'Vim', rating: 3},
                    {skill: 'OpenFrameworks', rating: 3},
                    {skill: 'OpenCV (Python, C++)', rating: 3},
                    {skill: 'Microsoft Excel | Word | PowerPoint', rating: 5}
                ]},
            ]
        }
    },
    methods: {
        
    }

}
</script>

<style>

</style>
