import Vue from "vue";

import frFile from "./languages/fr.json";
import enFile from "./languages/en.json";
const languages = {
    "frFile": frFile,
    "enFile": enFile,
}

let selectedLang = languages["frFile"];

const nav = new Vue({
    el: "#nav",
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
    methods: {
        changeLang: (value) => {
            const self = globalThis;
            console.log("yay", value);
            selectedLang = languages[value];
            console.log(selectedLang);
            // this.lang = selectedLang.nav;
        }
    }
});

const intro = new Vue({
    el: "#intro",
    data: {
        "lang": selectedLang.intro,
    },
});

const aboutMe = new Vue({
    el: "#aboutMe",
    data: {
        "lang": selectedLang.aboutMe,
    },
});

const skills = new Vue({
    el: "#skills",
    data: {
        "lang": selectedLang.skills,
    },
});

const realisations = new Vue({
    el: "#realisations",
    data: {
        "lang": selectedLang.realisations,
    },
});

const contact = new Vue({
    el: "#contact",
    data: {
        "lang": selectedLang.contact,
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