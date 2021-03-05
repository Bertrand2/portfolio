import Vue from "vue";
import Vuex from "vuex";
import store from "./store/lang.js";

import frFile from "./languages/fr.json";
import enFile from "./languages/en.json";
const languages = {
    "frFile": frFile,
    "enFile": enFile,
}

let selectedLang = languages["frFile"];

Vue.use(Vuex);

const nav = new Vue({
    el: "#nav",
    store: store,
    data: {
        "lang": selectedLang.nav,
        "selected": "frFile",
        "options": [
            {
                "text": "FR",
                "value": "frFile",
            },
            {
                "text": "EN",
                "value": "enFile",
            },
        ],
    },
    computed: {
        getLang(){
            return store.getters.getLang.nav;
        }
    },
    methods: {
        changeLang(value) {
            console.log("yay", value);
            store.commit("setLang", value);
        }
    }
});

const intro = new Vue({
    el: "#intro",
    store: store,
    data: {
        "lang": selectedLang.intro,
    },
    computed: {
        getLang(){
            return store.getters.getLang.intro;
        }
    },
});

const aboutMe = new Vue({
    el: "#aboutMe",
    store: store,
    data: {
        "lang": selectedLang.aboutMe,
        "frame": "resume"
    },
    computed: {
        getLang(){
            return store.getters.getLang.aboutMe;
        }
    },
    methods: {
        display(newFrame) {
            // const self = this;
            this.frame = newFrame;
        }
    }
});

const skills = new Vue({
    el: "#skills",
    store: store,
    data: {
        "lang": selectedLang.skills,
    },
    computed: {
        getLang(){
            return store.getters.getLang.skills;
        }
    },
});

const realisations = new Vue({
    el: "#realisations",
    store: store,
    data: {
        "lang": selectedLang.realisations,
    },
    computed: {
        getLang(){
            return store.getters.getLang.realisations;
        }
    },
});

const contact = new Vue({
    el: "#contact",
    store: store,
    data: {
        "lang": selectedLang.contact,
    },
    computed: {
        getLang(){
            return store.getters.getLang.contact;
        }
    },
});






// import NavItem from "./components/nav-item";
// import Nav from "./Nav.vue";
// import App from "./App.vue";

// const nav = new Vue({
//     el: "#nav",
//     render: h => h(Nav),
// })

// const app = new Vue({
//     el: "#app",
//     render: h => h(App),
// })



// const sections = [...document.querySelectorAll("section")]
//     .map(section => ({
//         "name": section.id,
//         "section": section,
//     }));