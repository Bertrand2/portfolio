import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import frFile from "../languages/fr.json";
import enFile from "../languages/en.json";

export default new Vuex.Store({
    state: {
        "languages": {
            "frFile": frFile,
            "enFile": enFile,
        },
        "selectedLang": "frFile",
    },
    getters: {
        getLang (state) {
            return state.languages[state.selectedLang];
        }
    },
    mutations: {
        setLang (state, lang) {
            state.selectedLang = lang;
        },
    },
    // actions: {

    // },
    // modules: {

    // }
})