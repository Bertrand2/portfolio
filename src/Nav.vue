<template>
    <ul class="nav" id="nav">
        <NavItem v-for="section in sections" section={{section.name}}>
        </NavItem>
    </ul>
</template>

<script>
    import NavItem from "./components/nav-item.vue"; 
    export default {
        props: {
            
        }
    }
</script>