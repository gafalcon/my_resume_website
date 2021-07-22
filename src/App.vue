<template>
    <Header/>
    <Profile/>
    <Experiences/>
    <Abilities/>
</template>

<script>
import Header from './components/Header.vue'
import Profile from './components/Profile.vue'
import Experiences from './components/Experiences.vue'
import Abilities from './components/Abilities.vue'

export default {
  name: 'App',
  components: {
      Header, Profile, Experiences, Abilities
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
