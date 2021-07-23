<template>
    <section id="profile" class="section p-8 container mx-auto">
        <Heading title="Profile" />

        <div class="flex">
            <div class="about w-1/3 p-4">
                <h2 class="text-blue-700 text-2xl mb-2">About me</h2>
                <p> I am a Computer scientist with interest in building applications for various areas. I enjoy writing solutions using Machine Learning technologies, like Pytorch and ScikitLearn. I'm familiar with web technologies like React/Redux, VueJS, Angular, ExpressJS, Django, Laravel. My primary goal is to keep exploring and learning new concepts. When not coding or writing code I usually spend my spare time with my guitar! </p>
            </div>

            <div class="profile-pic w-1/3 p-4 flex justify-center">
                <img class="rounded-full max-h-56 mt-2" alt="" src="https://gafalcon.github.io/my_resume_website/imgs/profile_pic2.png"/>
            </div>

            <div class="details w-1/3 p-4">
                <h2 class="text-blue-700 text-2xl mb-2">Details</h2>
                <h6 class="font-bold">Name:</h6>
                <p>Gabriel Falcones Paredes</p>
                <h6 class="font-bold">Age:</h6>
                <p>29 years</p>
                <h6 class="font-bold">Location</h6>
                <p>Guayaquil, Guayas, Ecuador</p>
            </div>
        </div>
    </section> 
</template>

<script>
import Heading from '../components/Heading.vue'
export default {
    name: 'Profile',
    components: { Heading }

}
</script>

<style>

</style>
