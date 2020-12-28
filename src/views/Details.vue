<template>
    <div class="details">
        <v-row
            class="py-md-12 py-lg-12 py-sm-6 py-6 mx-md-16 px-md-16 px-sm-10 px-10"
        >
            <v-col
                class="col-md-6 col-xl-6 col-lg-6 col-sm-12 col-12 details-primary"
            >
                <div>
                    <img :src="urlImagePrimary" alt="" />
                </div>
                <div>
                    <v-row class="px-md-2">
                        <v-col
                            class="col-md-3 col-sm-3 col-3 px-md-1"
                            v-for="(urlItem, index) in listImage"
                            :key="index"
                            @click="setImageprimary(urlItem)"
                        >
                            <img :src="urlItem" alt="" />
                        </v-col>
                    </v-row>
                </div>
            </v-col>
            <v-col
                class="col-md-6 col-xl-6 col-lg-6 col-sm-12 col-12 text-md-left py-md-16"
            >
                <h2 class="py-md-2 py-2 text-left">Red / T-shirt</h2>
                <h1 class="text-md-h3 text-left font-weight-bold py-md-2 py-2">
                    Red
                </h1>
                <p
                    class="text-md-h6 text-left text-h6 font-weight-bold py-md-2 py-2"
                >
                    $ 50.00
                </p>
                <v-combobox
                    class="col-md-3 col-6"
                    color="red"
                    value="M"
                    multiple
                    outlined
                    dense
                ></v-combobox>
                <v-row class="px-md-3 px-3 ">
                    <v-text-field
                        class="col-md-2 col-4 pr-md-4 mr-4"
                        type="number"
                        outlined
                        dense
                        value="1"
                    ></v-text-field>
                    <v-btn
                        rounded
                        color="red lighten-1"
                        dark
                        class="font-weight-bold text-center"
                        >Add To Card</v-btn
                    >
                </v-row>
            </v-col>
        </v-row>
        <ProductItem
            :title="`LastView Products`"
            :listProduct="listProductLast"
        ></ProductItem>
    </div>
</template>

<script>
import ProductItem from '../components/ProductItem'
export default {
    name: 'details',
    data() {
        return {
            listImage: [
                require('../assets/images/gallery-1.jpg'),
                require('../assets/images/gallery-2.jpg'),
                require('../assets/images/gallery-3.jpg'),
                require('../assets/images/gallery-4.jpg'),
            ],
            urlImagePrimary: require('../assets/images/gallery-1.jpg'),
        }
    },
    methods: {
        setImageprimary(url) {
            this.urlImagePrimary = url
        },
    },
    computed: {
        getImagePrimary() {
            return this.getImagePrimary
        },
        listProductLast() {
            return this.$store.getters.listProductLast
        },
    },
    components: { ProductItem },
}
</script>

<style>
.details-primary img {
    width: 100%;
}
</style>
