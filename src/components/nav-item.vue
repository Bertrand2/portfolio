<template>
    <li>
        <a href="#{{section.name}}">
            {{
                (section.name.charAt(0).toUppercase()
                + section.slice(1))
                    .split("-")
                    .join(" ")
            }}
        </a>
    </li>
</template>

<script>
    export default NavItem = {
        "name": "NavItem",
        "props": {
            section: String
        }
    }
</script>