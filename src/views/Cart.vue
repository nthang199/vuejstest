<template>
    <div class="ma-md-16 px-md-16 ma-16 px-16">
        <v-row class="red">
            <v-col class="col-md-6 col-6 text-left text-md-left"
                ><p
                    class="ma-md-0 px-md-1 px-1 ma-0 white--text font-weight-bold"
                >
                    Product
                </p></v-col
            >
            <v-col class="col-md-3 col-3 text-right text-md-right"
                ><p
                    class="ma-md-0 px-md-1 px-1 ma-0 white--text font-weight-bold"
                >
                    Quantity
                </p></v-col
            >
            <v-col class="col-md-3 col-3 text-right text-md-right"
                ><p
                    class="ma-md-0 px-md-1 px-1 ma-0 white--text font-weight-bold"
                >
                    Subtotal
                </p></v-col
            >
        </v-row>
        <v-row class="cart-product">
            <v-col
                class="col-md-6 col-6 text-left text-md-left d-flex align-center justify-start "
            >
                <img src="../assets/images/buy-1.jpg" alt="" />
                <div class="px-md-6 px-6">
                    <p
                        class="text-md-h6 text-h6 font-weight-bold pt-md-4 ma-md-0 ma-0"
                    >
                        red
                    </p>
                    <p
                        class="text-md-subtitle-1 text-subtitle-1 font-weight-medium ma-md-0 ma-0"
                    >
                        Price: $ 50.00
                    </p>
                    <p
                        class="text-md-subtitle-1 text-subtitle-1 font-weight-bold red--text text--darken-1 ma-md-0 ma-0"
                    >
                        Remove
                    </p>
                </div>
            </v-col>
            <v-col
                class="col-md-3 col-3 d-flex align-center justify-end text-md-right"
            >
                <v-text-field
                    class="col-md-3"
                    type="number"
                    outlined
                    dense
                    value="1"
                ></v-text-field>
            </v-col>
            <v-col
                class="col-md-3 col-3 d-flex align-center justify-end text-md-right"
            >
                <p class="text-subtitle-1  font-weight-bold">$ 50.00</p>
            </v-col>
        </v-row>
        <v-row class="cart-product">
            <v-col
                class="col-md-6 col-6 text-left text-md-left d-flex align-center justify-start "
            >
                <img src="../assets/images/buy-2.jpg" alt="" />
                <div class="px-md-6 px-6">
                    <p
                        class="text-md-h6 text-h6 font-weight-bold pt-md-4 ma-md-0 ma-0"
                    >
                        red
                    </p>
                    <p
                        class="text-md-subtitle-1 text-subtitle-1 font-weight-medium ma-md-0 ma-0"
                    >
                        Price: $ 50.00
                    </p>
                    <p
                        class="text-md-subtitle-1 text-subtitle-1 font-weight-bold red--text text--darken-1 ma-md-0 ma-0"
                    >
                        Remove
                    </p>
                </div>
            </v-col>
            <v-col
                class="col-md-3 col-3 d-flex align-center justify-end text-md-right"
            >
                <v-text-field
                    class="col-md-3"
                    type="number"
                    outlined
                    dense
                    value="1"
                ></v-text-field>
            </v-col>
            <v-col
                class="col-md-3 col-3 d-flex align-center justify-end text-md-right"
            >
                <p class="text-subtitle-1  font-weight-bold">$ 50.00</p>
            </v-col>
        </v-row>
        <v-row class="cart-product">
            <v-col
                class="col-md-6 col-6 text-left text-md-left d-flex align-center justify-start "
            >
                <img src="../assets/images/buy-3.jpg" alt="" />
                <div class="px-md-6 px-6">
                    <p
                        class="text-md-h6 text-h6 font-weight-bold pt-md-4 ma-md-0 ma-0"
                    >
                        red
                    </p>
                    <p
                        class="text-md-subtitle-1 text-subtitle-1 font-weight-medium ma-md-0 ma-0"
                    >
                        Price: $ 50.00
                    </p>
                    <p
                        class="text-md-subtitle-1 text-subtitle-1 font-weight-bold red--text text--darken-1 ma-md-0 ma-0"
                    >
                        Remove
                    </p>
                </div>
            </v-col>
            <v-col
                class="col-md-3 col-3 d-flex align-center justify-end text-md-right"
            >
                <v-text-field
                    class="col-md-3"
                    type="number"
                    outlined
                    dense
                    value="1"
                ></v-text-field>
            </v-col>
            <v-col
                class="col-md-3 col-3 d-flex align-center justify-end text-md-right"
            >
                <p class="text-subtitle-1 font-weight-bold">$ 50.00</p>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="col-md-3 offset-md-10 col-6 offset-6">
                <hr class="text-hr" />

                <div
                    class="d-flex align-center justify-md-space-between justify-space-between"
                >
                    <p
                        class="text-md-subtitle-1  text-md-left text-left text-subtitle-1 px-md-6 px-6 font-weight-bold"
                    >
                        Subtotal
                    </p>
                    <p
                        class="text-md-subtitle-1  text-md-right text-right  text-subtitle-1 px-md-6 px-6 font-weight-bold"
                    >
                        $ 200.00
                    </p>
                </div>
                <div
                    class="d-flex align-center justify-md-space-between justify-space-between"
                >
                    <p
                        class="text-md-subtitle-1   text-md-left text-left text-subtitle-1 px-md-6 px-6 font-weight-bold"
                    >
                        Tax
                    </p>
                    <p
                        class="text-md-subtitle-1  text-md-right text-right  text-subtitle-1 px-md-6 px-6 font-weight-bold"
                    >
                        $ 20.00
                    </p>
                </div>
                <div
                    class="d-flex align-center justify-md-space-between justify-space-between"
                >
                    <p
                        class="text-md-subtitle-1  text-md-left text-left text-subtitle-1 px-md-6 px-6 font-weight-bold"
                    >
                        Total
                    </p>
                    <p
                        class="text-md-subtitle-1  text-md-right text-right  text-subtitle-1 px-md-6 px-6 font-weight-bold"
                    >
                        $ 200.00
                    </p>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: 'cart',
}
</script>

<style scoped>
.cart-product img {
    width: 7.2rem;
}
.text-hr {
    height: 5px;
    background-color: #e53935;
    border-radius: 5px;
    border: none;
}
</style>
