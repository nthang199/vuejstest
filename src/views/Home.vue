<template>
    <div>
        <div class="mx-md-8 mx-4 mx-lg-8 mx-xl-8 hover">
            <v-row
                class="px-md-16 px-xl-16 px-lg-16 py-md-6 py-xl-10 py-lg-10  px-sm-6 px-6 category hover"
            >
                <v-col class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <img src="../assets/images/category-1.jpg" alt="" />
                </v-col>
                <v-col class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 ">
                    <img src="../assets/images/category-2.jpg" alt="" />
                </v-col>
                <v-col class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <img src="../assets/images/category-3.jpg" alt="" />
                </v-col>
            </v-row>
            <ProductItem
                :title="`Featured Products`"
                :listProduct="listProductFeat"
            ></ProductItem>
            <ProductItem
                :title="`LastView Products`"
                :listProduct="listProductLast"
            ></ProductItem>
        </div>
        <!-- <div class=""> -->
        <Banner></Banner>
        <Comment></Comment>
        <Brand></Brand>
        <Footer></Footer>
        <!-- </div> -->
    </div>
</template>

<script>
import ProductItem from '../components/ProductItem'
import Banner from '../components/home/Banner'
import Comment from '../components/home/Comment'
import Brand from '../components/home/Brand'
import Footer from '../components/Footer'
export default {
    name: 'home',
    components: { ProductItem, Banner, Comment, Brand, Footer },
    computed: {
        listProductLast() {
            return this.$store.getters.listProductLast
        },
        listProductFeat() {
            return this.$store.getters.listProductFeat
        },
    },
}
</script>

<style>
.category img {
    width: 99%;
}
</style>
