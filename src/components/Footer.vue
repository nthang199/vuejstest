<template>
    <div class="footer">
        <v-row class="footer-background px-md-6 px-6 py-md-16 py-16">
            <v-col
                class="col-md-4 col-lg-4 col-xl-4 col-sm-12 col-12 text-md-left "
            >
                <p class="text-h6 white--text font-weight-bold">
                    Dowload Our App
                </p>
                <p class="grey--text text--lighten-1 font-weight-bold">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Illum quas assumenda delectus non amet.
                </p>
                <v-row>
                    <v-col class="col-md-6 col-lg-6 col-xl-6 col-sm-12 col-12 ">
                        <img
                            src="../assets/images/app-store.png"
                            class="footer-image"
                            alt=""
                        />
                    </v-col>
                    <v-col class="col-md-6 col-lg-6 col-xl-6 col-sm-12 col-12 ">
                        <img
                            src="../assets/images/play-store.png"
                            class="footer-image"
                            alt=""
                        />
                    </v-col>
                </v-row>
            </v-col>
            <v-col
                class="col-md-4 col-lg-4 col-xl-4 col-sm-12 col-12 py-md-8 text-md-left text-md-center text-center"
            >
                <img src="../assets/images/logo-white.png" alt="" />
                <p class="grey--text text--lighten-1 font-weight-bold py-md-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempora aperiam quae, inventore recusandae maxime
                    blanditiis?
                </p>
            </v-col>
            <v-col
                class="col-md-2 col-lg-2 col-xl-2 col-sm-12 col-12 py-md-6 py-6 text-md-left text-md-center text-center"
            >
                <p class="text-h6 white--text font-weight-bold">
                    Useful Links
                </p>
                <div>
                    <p class="ma-1 grey--text text--lighten-1 font-weight-bold">
                        Coupons
                    </p>
                    <p class="ma-1 grey--text text--lighten-1 font-weight-bold">
                        Blogs post
                    </p>
                    <p class="ma-1 grey--text text--lighten-1 font-weight-bold">
                        Return Policy
                    </p>
                    <p class="ma-1 grey--text text--lighten-1 font-weight-bold">
                        Coupons
                    </p>
                    <p class="ma-1 grey--text text--lighten-1 font-weight-bold">
                        Coupons
                    </p>
                </div>
            </v-col>
            <v-col
                class="col-md-2 col-lg-2 col-xl-2 col-sm-12 col-12 py-md-6 py-6 text-md-left text-md-center text-center"
            >
                <p class="text-h6 white--text font-weight-bold">
                    Useful Links
                </p>
                <div>
                    <p class="ma-1 grey--text text--lighten-1 font-weight-bold">
                        Coupons
                    </p>
                    <p class="ma-1 grey--text text--lighten-1 font-weight-bold">
                        Blogs post
                    </p>
                    <p class="ma-1 grey--text text--lighten-1 font-weight-bold">
                        Return Policy
                    </p>
                    <p class="ma-1 grey--text text--lighten-1 font-weight-bold">
                        Coupons
                    </p>
                    <p class="ma-1 grey--text text--lighten-1 font-weight-bold">
                        Coupons
                    </p>
                </div>
            </v-col>
            <hr class="dash" />
        </v-row>
    </div>
</template>

<script>
export default { name: 'footer' }
</script>

<style scoped>
.footer-background {
    background-color: #000;
}
.footer-image {
    width: 10rem;
}
.dash {
    color: white;
    width: 100%;
}
</style>
