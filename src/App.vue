<template>
    <Header/>
    <Nav :current="currentSection" />
    <Profile/>
    <Experiences/>
    <Abilities/>
    <Projects/>
    <Awards/>
    <Publications/>
    <Contact/>
</template>

<script>
import Header from './sections/Header.vue'
import Profile from './sections/Profile.vue'
import Experiences from './sections/Experiences.vue'
import Abilities from './sections/Abilities.vue'
import Projects from './sections/Projects.vue'
import Contact from './sections/Contact.vue'
import Publications from './sections/Publications.vue'
import Awards from './sections/Awards.vue'
import Nav from './components/Nav.vue'

export default {
  name: 'App',
  components: {
      Header, Profile, Experiences,
      Abilities, Projects, Nav, Contact,
      Publications, Awards
  },
    data(){
        return {
            sectionObserver: null,
            currentSection: ''
        }
    },
    mounted () {
        this.observeSections()
        console.log(window.location.hash)
        if (window.location.hash){
            this.currentSection = window.location.hash.substr(1);
        }
    },
    methods: {
        observeSections() {

            const options = {
                rootMargin: '0px 0px',
                threshold: 0.5
            }
            this.sectionObserver = new IntersectionObserver(this.sectionObserverHandler, options)

            // Observe each section
            const sections = document.querySelectorAll('.section')
            sections.forEach(section => {
                this.sectionObserver.observe(section)
            })
        },
        sectionObserverHandler (entries) {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id
                    this.currentSection = sectionId;
                }
            }
        }
}
}
</script>

<style>
.section-title {
    border-bottom: 1px solid #D1D5DB;
    margin-bottom: 1.5rem;
    /* border-bottom-color: rgba(255,255,255,0.35); */
}

html{
    scroll-behavior: smooth;
}
</style>
