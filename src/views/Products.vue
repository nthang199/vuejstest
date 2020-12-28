<template>
    <div class="product">
        <v-row>
            <v-col
                class="col-md-4 col-lg-4 pr-md-12 col-xl-4 offset-md-8 offset-lg-8 offset-xl-8 "
            >
                <v-text-field
                    placeholder="Search"
                    filled
                    rounded
                    dense
                ></v-text-field>
            </v-col>
        </v-row>
        <ProductItem
            class="product-list"
            :title="`Products`"
            :listProduct="listProductLast"
        ></ProductItem>
        <div class="d-flex align-center justify-left px-md-10">
            <v-pagination :length="3" disabled></v-pagination>
        </div>
    </div>
</template>

<script>
import ProductItem from '../components/ProductItem'
export default {
    name: 'products',
    components: { ProductItem },
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

<style scoped>
/* .product {
    position: relative;
} */
/* .product-search {
    position: absolute;
    top: 1rem;
    width: 100%;
}
/* */
/* .product-list {
    position: absolute;
    top: 2rem;
} */
</style>
