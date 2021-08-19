<template>
    <div class="nav-wrapper">
        <nav class="nav" id="nav">
            <ul class="nav__list">
                <li class="nav__list-icon">
                    <a class="nav__link" href="#">
                        <div class="nav__image-wrapper">
                            <img src="../../assets/images/bandicoot.jpg" alt="my picture" class="nav__image">
                        </div>
                    </a>
                </li>
                <li class="nav__list-item">
                    <a class="nav__link" href="#aboutMe">
                        {{getLang.aboutMe}}
                    </a>
                </li>
                <li class="nav__list-item">
                    <a class="nav__link" href="#skills">
                        {{getLang.skills}}
                    </a>
                </li>
                <li class="nav__list-item">
                    <a class="nav__link" href="#realisations">
                        {{getLang.realisations}}
                    </a>
                </li>
                <li class="nav__list-item">
                    <a class="nav__link" href="#contact">
                        {{getLang.contact}}
                    </a>
                </li>
            </ul>
            <select 
                name="langSelect" 
                id="langSelect" 
                class="nav__lang"
                v-on:change="changeLang(selected)"
                v-model="selected">
                <option 
                    v-for="option in getLangList"
                    :value="option"
                    :key="option">
                    {{option}}
                </option>
            </select>
        </nav>
    </div>
</template>

<script>
    import store from "../../store/index.js";
    export default {
        name: 'Nav',
        store: store,
        data() {
            return {
                "selected": "FR",
            }
        },
        computed: {
            getLang(){
                return store.getters.getLang.nav;
            },
            getLangList(){
                return store.getters.getLangList;
            }
        },
        methods: {
            changeLang(value) {
                store.commit("setLang", value);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>