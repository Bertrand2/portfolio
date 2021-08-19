<template>
        <section class="intro" id="intro">
            <div class="intro__left">
                <div class="intro__image-wrapper">
                    <img 
                        src="../../assets/images/bandicoot.jpg" 
                        alt="my picture" 
                        class="intro__image">
                </div>
            </div>
            <div class="intro__right">
                <h1 class="intro__title">
                    {{getLang.pretext}}<em>{{getLang.name}}</em>{{getLang.posttext}}
                </h1>
            </div>
        </section>
</template>

<script>
    import store from "../../store/index.js";
    export default {
        name: 'Intro',
        store: store,
        data() {
            return {};
        },
        methods: {

        },
        computed: {
            getLang(){
                return this.$store.getters.getLang.intro;
            }
        }
    }
</script>
