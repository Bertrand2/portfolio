<template>
    <section class="contact" id="contact">
        <h1 class="section-title">{{getLang.title}}</h1>
        <ul class="contact__list">
            <li class="contact__item">
                <!-- mail -->
                <a class="contact__link" href="mailto:bertrand@dossogne.be">
                    <img 
                        class="contact__icon"
                        src="../../assets/images/icons/mail-send-line.svg"
                        alt="icon">
                    <p
                        class="contact__text" 
                        v-for="(line, index) of getLang.content.mail" 
                        :key="index">
                        {{line}}
                    </p>
                </a>
            </li>
            <li class="contact__item">
                <!-- phone -->
                <div class="contact__link">
                    <img 
                        class="contact__icon"
                        src="../../assets/images/icons/phone-line.svg"
                        alt="icon">
                    <p
                        class="contact__text" 
                        v-for="(line, index) of getLang.content.phone" 
                        :key="index">
                        {{line}}
                    </p>
                </div>
            </li>
            <li class="contact__item">
                <!-- CV -->
                <a class="contact__link" href="../../assets/CV_DOSSOGNE_Bertrand.pdf" download="CV_DOSSOGNE_Bertrand">
                    <img 
                        class="contact__icon"
                        src="../../assets/images/icons/draft-line.svg"
                        alt="icon">
                    <p
                        class="contact__text" 
                        v-for="(line, index) of getLang.content.cv" 
                        :key="index">
                        {{line}}
                    </p>
                </a>
            </li>
            <li class="contact__item">
                <!-- linkedin -->
                <a class="contact__link" href="" target="_blank">
                    <img 
                        class="contact__icon"
                        src="../../assets/images/icons/linkedin-line.svg"
                        alt="icon">
                    <p
                        class="contact__text" 
                        v-for="(line, index) of getLang.content.linkedin" 
                        :key="index">
                        {{line}}
                    </p>
                </a>
            </li>
            <li class="contact__item">
                <!-- github -->
                <a class="contact__link" href="" target="_blank">
                    <img 
                        class="contact__icon"
                        src="../../assets/images/icons/github-line.svg"
                        alt="icon">
                    <p
                        class="contact__text" 
                        v-for="(line, index) of getLang.content.github" 
                        :key="index">
                        {{line}}
                    </p>
                </a>
            </li>
            <li class="contact__item">
                <!-- gitlab -->
                <a class="contact__link" href="https://gitlab.com/SyldaveEngage" target="_blank">
                    <img 
                        class="contact__icon"
                        src="../../assets/images/icons/gitlab-line.svg"
                        alt="icon">
                    <p
                        class="contact__text" 
                        v-for="(line, index) of getLang.content.gitlab" 
                        :key="index">
                        {{line}}
                    </p>
                </a>
            </li>
        </ul>
    </section>
</template>

<script>
    import store from "../../store/index.js";
    export default {
        name: 'Contact',
        store: store,
        data() {
            return {};
        },
        methods: {

        },
        computed: {
            getLang(){
                return this.$store.getters.getLang.contact;
            }
        }
    }
</script>