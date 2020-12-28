<template>
    <div class="banner">
        <v-row
            class="px-xl-16 px-lg-16 px-md-16 px-sm-6 px-6 py-md-16 py-6 py-sm-6 banner-background d-flex align-center"
        >
            <v-col class="col-xl-6 col-md-6 col-lg-6 col-sm-12 col-12">
                <img src="../../assets/images/exclusive.png" alt="" />
            </v-col>
            <v-col
                class="col-xl-6 col-md-6 col-lg-6 col-sm-12 col-12 text-md-left text-center"
            >
                <div>
                    <h2 class="text-md-h3 font-weight-bold text-h3">
                        Smart Band 4
                    </h2>
                    <p
                        class="text-md-subtitle-1 text-sm-subtitle-1 text-subtitle-1 font-weight-medium py-md-6"
                    >
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                    </p>
                    <v-btn
                        rounded
                        color="red darken-2"
                        class="text-md-button font-weight-bold"
                        dark
                    >
                        Explore Now &rarr;
                    </v-btn>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: 'name',
}
</script>

<style scoped>
.banner img {
    width: 70%;
}
.banner-background {
    background-image: radial-gradient(#fff, #ffd6d6);
}
</style>
