import { createStore } from 'vuex'

import frFile from "../assets/languages/fr.json";
import enFile from "../assets/languages/en.json";

export default createStore({
    state: {
        "languages": {
            "FR": frFile,
            "EN": enFile,
        },
        "selectedLang": "FR",
    },
    getters: {
        getLang(state) {
            return state.languages[state.selectedLang];
        },
        getLangList(state) {
            return Object.keys(state.languages);
        }
    },
    mutations: {
        setLang(state, lang) {
            state.selectedLang = lang;
        },
    },
    // actions: {

    // },
    // modules: {

    // }
})