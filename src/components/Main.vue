<template>
    <main>
        <Nav />
        <Intro />
        <AboutMe />
        <Skills />
        <Realisations />
        <Contact />
    </main>
</template>

<script>
    import Nav from "./sections/Nav.vue";
    import Intro from "./sections/Intro.vue";
    import AboutMe from "./sections/AboutMe.vue";
    import Skills from "./sections/Skills.vue";
    import Realisations from "./sections/Realisations.vue";
    import Contact from "./sections/Contact.vue";
    export default {
        name: 'Main',
        components: {
            Nav,
            Intro,
            AboutMe,
            Skills,
            Realisations,
            Contact
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
