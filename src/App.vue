<template>
    <Header/>
    <Profile/>
    <Experiences/>
    <Abilities/>
    <Projects/>
</template>

<script>
import Header from './sections/Header.vue'
import Profile from './sections/Profile.vue'
import Experiences from './sections/Experiences.vue'
import Abilities from './sections/Abilities.vue'
import Projects from './sections/Projects.vue'

export default {
  name: 'App',
  components: {
      Header, Profile, Experiences, Abilities, Projects
  }
}
</script>

<style>
.section {
    border-bottom: 1px solid #eee;
    margin-bottom: 1.5rem;
    /* border-bottom-color: rgba(255,255,255,0.35); */
}
</style>
