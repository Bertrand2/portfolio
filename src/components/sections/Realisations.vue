<template>
    <section class="realisations" id="realisations">
        <h1 class="section-title">{{getLang.title}}</h1>
        <ul class="realisations__list">
            <li
                class="realisations__card"
                v-for="(realisation, index) in getLang.realisations"
                :key="index">
                <div class="realisations__card__background-wrapper">
                    <img 
                        class="realisations__card__background"
                        :src="require(`../../assets/images/realisations/${realisation.image}.png`)"
                        alt="">
                </div>
                <div class="realisations__card__content">
                    <h2 class="realisations__card__title">
                        {{realisation.title}} :
                    </h2>
                    <h2 class="realisations__card__name">
                        {{realisation.name}}
                    </h2>
                    <p class="realisations__card__used">
                        {{getLang.used}} :
                    </p>
                    <p class="realisations__card__technologies">
                        {{realisation.technologies.join(" - ")}}
                    </p>
                    <div class="realisations__card__buttons">
                        <a
                            class="realisations__card__button"
                            :href="realisation.testLink" target="_blank">
                            {{getLang.test}}
                        </a>
                        <a
                            class="realisations__card__button"
                            :href="realisation.repoLink" target="_blank">
                            {{getLang.repo}}
                        </a>
                    </div>
                </div>
            </li>
        </ul>
    </section>
</template>

<script>
    import store from "../../store/index.js";
    export default {
        name: 'Realisations',
        store: store,
        data() {
            return {};
        },
        methods: {

        },
        computed: {
            getLang(){
                return this.$store.getters.getLang.realisations;
            }
        }
    }
</script>