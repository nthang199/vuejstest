<template>
    <v-app>
        <Header></Header>
        <v-main>
            <!-- Provides the application the proper gutter -->
            <v-container fluid>
                <!-- If using vue-router -->
                <router-view></router-view>
            </v-container>
        </v-main>
    </v-app>
</template>
<script>
import Header from './components/Header'
export default {
    name: 'App',
    data() {
        return {}
    },
    components: { Header },
}
</script>
<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    position: relative;
}
.hover img {
    box-shadow: 0px 5px 5px 5px rgb(241, 240, 240);
}
.hover img:hover {
    transform: translateY(-5px);
    transition: all 0.5s;
}
</style>
