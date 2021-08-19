<template>
        <section class="about-me" id="aboutMe">
            <h1 class="section-title">{{getLang.title}}</h1>
            <ul class="about-me__list">
                <li 
                    class="about-me__list-item"
                    v-on:click="display('resume')">
                    {{getLang.nav.resume}}
                </li>
                <li 
                    class="about-me__list-item"
                    v-on:click="display('formation')">
                    {{getLang.nav.formation}}
                </li>
                <li 
                    class="about-me__list-item"
                    v-on:click="display('hobbies')">
                    {{getLang.nav.hobbies}}
                </li>
            </ul>
            <div class="about-me__content">
                <article
                    class="about-me__resume"
                    v-if="frame == 'resume'">
                    <p 
                        class="about-me__text" 
                        v-for="(line, index) in getLang.resume"
                        :key="index">
                        {{line}}
                    </p>
                </article>
                <article
                    class="about-me__formation"
                    v-else-if="frame == 'formation'">
                    <div class="about-me__timeline"></div>
                    <ul class="about-me__timelist">
                        <li 
                            class="about-me__timeitem"
                            v-for="(moment, index) in getLang.formation"
                            :key="index">
                            <p class="about-me__timeitem-date">
                                {{moment.date}}
                            </p>
                            <div class="about-me__timeitem-dot"></div>
                            <p 
                                class="about-me__timeitem-diploma"
                                v-if="moment.type == 'diploma'">
                                {{moment.title}}
                            </p>
                            <p 
                                class="about-me__timeitem-title" 
                                v-else>
                                {{moment.title}}
                            </p>
                            <p class="about-me__timeitem-desc">
                                {{moment.desc}}
                            </p>
                        </li>
                    </ul>
                </article>
                <article
                    class="about-me__hobbies"
                    v-else-if="frame == 'hobbies'">
                    <ul class="about-me__hobbies__list">
                        <li 
                            v-for="(hobby, index) in getLang.hobbies"
                            :key="index"
                            v-on:click="viewHobby(index)"
                            :title="hobby.name"
                            :class="{ active: index==hobbyId }"
                            class="about-me__hobbies__list-item">
                            <img
                                :src="require(`../../assets/images/hobbies/${hobby.icon}.png`)"
                                :alt="hobby.icon"
                                class="about-me__hobbies__icon">
                        </li>
                    </ul>
                    <h2 class="about-me__hobbies__name">
                        {{getLang.hobbies[hobbyId].name}}
                    </h2>
                    <p class="about-me__hobbies__desc">
                        {{getLang.hobbies[hobbyId].desc}}
                    </p>
                </article>
            </div>
        </section>
</template>

<script>
    import store from "../../store/index.js";
    // import icons from "../../assets/images/hobbies/*.png";
    export default {
        name: 'AboutMe',
        store: store,
        data() {
            return {
                "frame": "resume",
                "hobbyId": 0,
                // "icons": icons
            }
        },
        computed: {
            getLang(){
                return this.$store.getters.getLang.aboutMe;
            },
        },
        methods: {
            display(newFrame) {
                // const self = this;
                this.frame = newFrame;
            },
            viewHobby(hobby) {
                // const self = this;
                this.hobbyId = hobby;
            }
        }
    }
</script>