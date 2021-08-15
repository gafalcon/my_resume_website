<template>
    <section id="profile" class="section p-8 container mx-auto">
        <Heading title="Profile" />

        <div class="flex flex-wrap center-items justify-center">
            <div class="about sm:w-1/2 md:w-1/3 p-4">
                <h2 class="text-blue-700 text-2xl mb-2">About me</h2>
                <p class="text-justify">
                  Computer Scientist with +3 years of experience in Software Development and MS in Computer Science.
                  Skilled in Full Stack Web Development with hands-on experience with React/Redux, VueJS, Angular, ExpressJS, Django.
                  Additional experience working in applications that require Machine Learning and Deep Learning Solutions.
                  I enjoy challenges, problem solving and continuing learning and exploring new technologies that help me grow professionally and personally. In previous roles I've been able to learn and work using all sorts of technologies and applications in the web, embedded and desktop.
                </p>
            </div>

            <div class="profile-pic sm:w-1/2 md:w-1/3 p-4 flex justify-center">
                <img class="rounded-full max-h-56 mt-2" alt="" src="https://gafalcon.github.io/my_resume_website/imgs/profile_pic2.png"/>
            </div>

            <div class="details sm:w-1/3 p-4">
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
