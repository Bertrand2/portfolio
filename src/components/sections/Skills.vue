<template>
    <section class="skills" id="skills">
        <h1 class="section-title">{{getLang.title}}</h1>
        <ul class="skills__list">
            <li
                class="skills__card-wrapper"
                v-for="(skill, index) in getLang.skills"
                :key="index">
                <div class="skills__card">
                    <div class="skills__card-front">
                        <img
                            :src="require(`../../assets/images/logos/${skill.icon}.svg`)"
                            alt="logo"
                            class="skills__icon">
                        <p>
                            {{skill.name}}
                        </p>
                    </div>
                    <div class="skills__card-back">
                        <ul class="skills__details">
                            <li
                                class="skills__detail"
                                v-for="(badge, index) in skill.badges"
                                :key="index">
                                <a 
                                    :href="badge.link" 
                                    class="detail__link"
                                    target="_blank"
                                    :title="badge.name">
                                    <img
                                        :src="require(`../../assets/images/logos/${badge.icon}.svg`)"
                                        :alt="badge.name"
                                        class="detail__icon">
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
        </ul>
    </section>
</template>

<script>
    import store from "../../store/index.js";
    export default {
        name: 'Skills',
        store: store,
        data() {
            return {};
        },
        methods: {

        },
        computed: {
            getLang(){
                return this.$store.getters.getLang.skills;
            }
        }
    }
</script>