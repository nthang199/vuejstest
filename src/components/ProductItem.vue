<template>
    <div>
        <div class="pt-md-10 pt-xl-10 pt-lg-10 pt-sm-10 pt-10">
            <h1 class="component-title">
                {{ title }}
            </h1>
        </div>
        <v-row class="py-md-10 py-lg-10 py-xl-10 py-sm-10 py-10 px-md-10 hover">
            <v-col
                v-for="(productItem, index) in listProduct"
                :key="index"
                class="col-md-3 col-xl-3 col-lg-3 col-sm-12 col-12 product-image"
            >
                <img :src="productItem.url" alt="" />
                <div
                    class="text-md-left text-xl-left text-lg-left text-center text-sm-center px-md-4 px-xl-4 px-lg-4 py-md-4 py-lg-4 py-xl-4 py-sm-2 py-2"
                >
                    <h3 class="text-h5 font-weight-bold">
                        {{ productItem.title }}
                    </h3>
                    <div>rating</div>
                    <p class="text-h6">$50.00</p>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: 'product-item',
    props: {
        title: String,
        listProduct: Array,
    },
    computed: {},
    methods: {
        getUrl(url) {
            return '../assets/images/' + url
        },
    },
}
</script>

<style>
.component-title {
    position: relative;
}
.component-title::after {
    content: '';
    position: absolute;
    background-color: #e45050;
    width: 15%;
    height: 5px;
    top: 115%;
    left: 50%;
    border-radius: 3px;
    transform: translate(-50%, -50%);
}
.product-image img {
    width: 97%;
}
</style>
