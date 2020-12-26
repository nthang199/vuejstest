<template>
    <div class="brand pt-md-6 pb-4">
        <v-row
            class="px-md-16 px-lg-16 px-xl-16 px-sm-6 px-6 py-md-10 py-lg-10 py-xl-10 py-sm-6 py-6 d-flex align-center justify-center"
        >
            <v-col class="text-center col-md-2 col-12  logo-brand">
                <img src="../assets/images/logo-coca-cola.png" alt=""
            /></v-col>
            <v-col class="text-center col-md-2 col-12  logo-brand">
                <img src="../assets/images/logo-godrej.png" alt=""
            /></v-col>
            <v-col class="text-center col-md-2 col-12 logo-brand">
                <img src="../assets/images/logo-oppo.png" alt=""
            /></v-col>
            <v-col class="text-center col-md-2 col-12  logo-brand">
                <img src="../assets/images/logo-paypal.png" alt=""
            /></v-col>
            <v-col class="text-center col-md-2 col-12  logo-brand">
                <img src="../assets/images/logo-philips.png" alt=""
            /></v-col>
        </v-row>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
.brand .logo-brand {
    filter: grayscale(100%);
}
.brand .logo-brand:hover {
    filter: grayscale(0%);
}
</style>
