<template>
    <section id="contact" class="section bg-gray-700 pb-16 text-gray-400 text-lg">
        <div class="container mx-auto p-8">
            <Heading title="Contact" color="text-gray-400" />
            <div class="flex flex-wrap justify-center mt-16">
                <div class="linkedin-contact md:mr-24">
                    <a class="hover:text-white flex items-center"  href="https://www.linkedin.com/in/gabriel-falcones">
                        <i class="fab fa-linkedin text-3xl mr-4"></i><span> www.linkedin.com/in/gabriel-falcones</span>
                    </a>
                </div>
                <div class="email-contact md:ml-24">
                    <a class="hover:text-white flex items-center" href="mailto:gabofalc@gmail.com">
                        <i class="fas fa-at text-3xl mr-4"></i>  gabofalc@gmail.com
                    </a>
                </div>
            </div>
            <p class="mt-64 text-center">This website was made with VueJS inspired by <a class="text-gray-200 hover:text-white" href="http://www.pascalvangemert.nl/#/profile"> this awesome website</a> by Pascal van Gemert.</p>
        </div>
    </section> 
</template>

<script>
import Heading from '../components/Heading.vue'
export default {
    name: 'Vue',
    components: { Heading }

}
</script>

<style>

</style>
