<template>
    <div class="skill-section">
        <h2 class="text-blue-700 text-2xl">{{ title }}</h2>
        <div class="grid md:grid-cols-2 py-2">
            <div class="skill flex" v-for="(skill, index) in skills" :key="index">
                <div class="w-2/3 md:w-1/3">{{ skill.skill }}</div>
                <star-rating :read-only="true" :rating="skill.rating" :star-size="15" :show-rating="false" />
            </div>
        </div>
    </div>
</template>

<script>
import StarRating from 'vue-star-rating'
export default {
    name: 'SkillSection',
    components: {
        StarRating
    },
    props: {
        skills: Array,
        title: String
    },
    data(){
        return {

        }
    },
    methods: {
        
    }

}
</script>

<style>

</style>
