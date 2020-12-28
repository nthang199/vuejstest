<template>
    <v-app>
        <Header></Header>
        <v-main>
            <!-- Provides the application the proper gutter -->
            <div fluid class="ma-md-0 pa-md-0">
                <!-- If using vue-router -->
                <router-view></router-view>
            </div>
        </v-main>
        <Footer></Footer>
    </v-app>
</template>
<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
    name: 'App',
    data() {
        return {}
    },
    components: { Header, Footer },
    watch: {
        $route: function() {
            if (this.$route.path === '/') {
                this.isBanner = true
            } else if (this.$route.path != '/') {
                this.isBanner = false
                console.log(this.$route.path)
            }
        },
    },
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
