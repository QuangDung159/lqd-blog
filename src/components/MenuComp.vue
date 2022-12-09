<template>
    <section class="overlay-menu">
        <div class="container">
            <div class="row">
                <div class="main-menu">
                    <ul>
                        <li>
                            <router-link to="/">Home</router-link>
                        </li>
                        <li>
                            <router-link to="/blogs">Blog Entries</router-link>
                        </li>
                        <li>
                            <router-link to="/about-me">About Me</router-link>
                        </li>
                    </ul>
                    <p>My name is Lu Quang Dung</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "MenuComp"
    }
</script>

<style scoped>

</style>