<template>
    <section id="profile" class="p-8 container mx-auto">
        <Heading title="Profile" />

        <div class="flex">
            <div class="about w-1/3 p-4">
                <h2 class="text-blue-700 text-2xl mb-2">About me</h2>
                <p>Mattis molestie a, iaculis at erat pellentesque adipiscing commodo elit, at imperdiet dui. Nam aliquam sem et tortor consequat id porta nibh venenatis cras sed felis eget velit aliquet sagittis.
                    Non nisi est, sit amet facilisis magna etiam tempor, orci eu lobortis elementum, nibh tellus molestie nunc! Nibh cras pulvinar mattis nunc, sed blandit libero volutpat sed cras ornare arcu?
                    Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia.</p>
            </div>

            <div class="profile-pic w-1/3 p-4 flex justify-center">
                <img class="rounded-full max-h-56 mt-2" alt="" src="/imgs/profile_pic2.png"/>
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
import Heading from './Heading.vue'
export default {
    name: 'Profile',
    components: { Heading }

}
</script>

<style>

</style>
