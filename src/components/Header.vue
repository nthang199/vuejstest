<template>
    <div class="header-bg">
        <v-card class="rounded-0 header header-bg" elevation="0">
            <v-row class="">
                <v-col
                    class="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-12 d-flex px-md-16 px-lg-16 px-xl-16 px-sm-14 px-6"
                >
                    <img
                        src="../assets/images/logo.png"
                        class="header-logo"
                        alt="logo"
                    />
                </v-col>
                <!-- <div :class="menuPosition"> -->
                <v-expand-transition>
                    <v-col
                        v-if="isActiveMenu"
                        class="col-lg-1 col-md-1 col-xl-1 col-sm-12 col-12 header-menu"
                        :class="backgroundMenu"
                    >
                        <router-link
                            class="router-link text-lg-h6 text-xl-h6 text-md-h6"
                            to="/"
                            >Home</router-link
                        >
                    </v-col>
                </v-expand-transition>
                <v-expand-transition class="header-banner">
                    <v-col
                        v-if="isActiveMenu"
                        class="col-lg-1 col-md-1 col-xl-1 col-sm-12 col-12 header-menu"
                        :class="backgroundMenu"
                    >
                        <router-link
                            class="router-link text-lg-h6 text-xl-h6 text-md-h6"
                            to="/products"
                            >Products</router-link
                        >
                    </v-col></v-expand-transition
                >
                <v-expand-transition>
                    <v-col
                        v-if="isActiveMenu"
                        class="col-lg-1 col-md-1 col-xl-1 col-sm-12 col-12 header-menu"
                        :class="backgroundMenu"
                    >
                        <router-link
                            class="router-link text-lg-h6 text-xl-h6 text-md-h6"
                            to="/details"
                            >Details</router-link
                        >
                    </v-col></v-expand-transition
                >
                <v-expand-transition :class="backgroundMenu"
                    ><v-col
                        v-if="isActiveMenu"
                        class="col-lg-1 col-md-1 col-xl-1 col-sm-12 col-12 header-menu"
                        :class="backgroundMenu"
                    >
                        <router-link
                            class="router-link text-lg-h6 text-xl-h6 text-md-h6"
                            to="/cart"
                            >Cart</router-link
                        >
                    </v-col>
                </v-expand-transition>
                <v-expand-transition>
                    <v-col
                        v-if="isActiveMenu"
                        class="col-lg-1 col-md-1 col-xl-1 col-sm-12 col-12 header-menu"
                        :class="backgroundMenu"
                    >
                        <router-link
                            class="router-link text-lg-h6 text-xl-h6 text-md-h6"
                            to="/account"
                            >Account</router-link
                        >
                    </v-col>
                </v-expand-transition>
                <!-- </div> -->
                <div class="header-icon">
                    <img
                        src="../assets/images/cart.png"
                        alt=""
                        class="header-cart"
                    />
                    <v-icon
                        v-if="screen"
                        size="30"
                        color="grey darken-4"
                        :class="{ activeIcon }"
                        @click="openMenu"
                        >mdi-reorder-horizontal</v-icon
                    >
                </div>
            </v-row>
            <v-content
                v-if="isBanner"
                class="rounded-0 header-banner1 pa-lg-16 pa-md-10 pa-xl-10 pa-sm-10 pa-12 my-md-10"
                elevation="0"
            >
                <v-row class="">
                    <v-col
                        class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 d-flex align-center justify-center"
                    >
                        <div>
                            <h1
                                class="text-md-h2 text-md-h3 text-sm-h3 text-h3 text-center text-md-left text-xl-left text-lg-left text-sm-center font-weight-black"
                            >
                                Bài kiểm tra ktml css js Hiwweb !
                            </h1>
                            <p
                                class="py-md-6 font-weight-medium text-md-h6 text-md-left text-sm-center text-center"
                            >
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                            </p>
                            <div class="text-md-left text-center text-md-h6">
                                <v-btn
                                    rounded
                                    color="red darken-2"
                                    class="text-md-button font-weight-bold"
                                    dark
                                >
                                    Explore Now &rarr;
                                </v-btn>
                            </div>
                        </div>
                    </v-col>
                    <v-col
                        class="col-md-6 col-sm-12 col-12 header-banner__image"
                    >
                        <img
                            transition="slide-x-reverse-transition"
                            src="../assets/images/image1.png"
                        />
                    </v-col>
                </v-row>
            </v-content>
        </v-card>
    </div>
</template>

<script>
export default {
    name: 'header',
    data() {
        return {
            // isActiveMenu: true,
            isOpenMenu: false,
            isBanner: true,
        }
    },
    computed: {
        screen() {
            if (
                this.$vuetify.breakpoint.name === 'xs' ||
                this.$vuetify.breakpoint.name === 'sm'
            ) {
                return true
            } else {
                return false
            }
        },
        activeIcon() {
            return {
                'display-icon-block': this.screen,
                'display-icon-none': !this.screen,
            }
        },
        isActiveMenu() {
            if (!this.screen) {
                return true
            } else if (this.isOpenMenu) {
                return true
            } else {
                return false
            }
        },
        backgroundMenu() {
            return {
                'menu-background': this.isOpenMenu,
                'menu-background-none': !this.isOpenMenu,
            }
        },
        menuPosition() {
            return {
                'menu-position': this.isOpenMenu,
                'menu-position-md': !this.screen,
            }
        },
    },
    methods: {
        openMenu() {
            this.isOpenMenu = !this.isOpenMenu
        },
        activeBanner() {
            if (this.$route.path === '/') {
                this.isBanner = true
                console.log(this.$route.path)
            } else if (this.$route.path != '/') {
                this.isBanner = false
                console.log(this.$route.path)
            }
        },
    },
    watch: {
        $route: function() {
            if (this.$route.path === '/') {
                this.isBanner = true
                console.log(this.$route.path)
            } else if (this.$route.path != '/') {
                this.isBanner = false
                console.log(this.$route.path)
            }
        },
    },
    mounted() {
        this.activeBanner()
    },
}
</script>

<style scoped>
.header-bg {
    background-image: radial-gradient(#fff, #ffd6d6);
}
.header-logo {
    width: 30%;
}
.header {
    position: relative;
}
.header-banner {
    position: fixed;
    z-index: 100;
    width: 100%;
}
/* .header-banner1 {
    position: absolute;
    /* z-index: 2; */

.header-icon {
    position: absolute;
    top: 0.8rem;
    right: 5%;
    display: flex;
}
.header-cart {
    width: 2rem;
}
.header-menu {
    display: flex;
    align-items: center;
    justify-content: center;
    /* position: absolute; */
}
.header-icon-menu {
    width: 40px;
    color: #000;
}
.router-link {
    text-decoration: none;
    font-weight: 600 !important;
    color: rgb(32, 32, 32);
    text-align: center;
}
.display-icon-none {
    display: none !important;
}
.display-icon-block {
    display: block !important;
}
.menu-position {
    position: fixed;
    top: 4rem;
    width: 100%;
    z-index: 1;
}
.menu-position-md {
    position: inherit;
}
.menu-position-none {
    position: none;
    /* top: 4rem;
    width: 100%;
    z-index: 1; */
}
.menu-background {
    /* position: absolute; */
    top: 100px;
    background-color: rgb(31, 31, 31);
    /* z-index: 200; */
}
.menu-background-none {
    background-color: none;
}
.menu-background a {
    color: #fff;
}
.menu-background:hover {
    background-color: rgb(73, 73, 73);
    cursor: pointer;
}
.menu-background:active,
.menu-background:hover {
    background-color: rgb(73, 73, 73);
    cursor: pointer;
}
.banner-header {
    position: absolute;
    top: 50px;
    width: 100%;

    z-index: 110;
}
.header-banner__image img {
    width: 80%;
}
</style>
