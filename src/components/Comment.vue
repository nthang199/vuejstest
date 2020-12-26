<template>
    <div class="">
        <v-row
            class="px-md-16 px-lg-16 px-xl-16 px-sm-10 px-10 py-md-6 py-lg-6 py-xl-6 py-sm-6 py-6"
        >
            <v-col
                class="col-md-4 col-lg-4 col-xl-4 col-sm-12 col-12  hover-comment"
            >
                <v-card class="py-md-8 px-md-6 py-6 py-sm-6 px-6 px-sm-6">
                    <v-icon color="rgba(255, 0, 0, 0.7)" large>
                        mdi-twitch
                    </v-icon>
                    <p class="py-4 py-md-4 text-center font-weight-medium">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Suscipit odio consectetur quo distinctio voluptatum
                        dolore placeat error labore fugiat rem dicta similique
                        corrupti earum pariatur.
                    </p>
                    <v-avatar class="rounded-circle">
                        <img src="../assets/images/user-1.png" alt="John" />
                    </v-avatar>
                    <p
                        class="pt-md-6 pt-6 font-weight-bold  text-md-h6 text-h6"
                    >
                        Sean Parker
                    </p>
                </v-card>
            </v-col>
            <v-col
                class="col-md-4 col-lg-4 col-xl-4 col-sm-12 col-12  hover-comment"
            >
                <v-card class="py-md-8 px-md-6 py-6 py-sm-6 px-6 px-sm-6">
                    <v-icon color="rgba(255, 0, 0, 0.7)" large>
                        mdi-twitch
                    </v-icon>
                    <p class="py-4 py-md-4 text-center font-weight-medium">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Suscipit odio consectetur quo distinctio voluptatum
                        dolore placeat error labore fugiat rem dicta similique
                        corrupti earum pariatur.
                    </p>
                    <v-avatar class="rounded-circle">
                        <img src="../assets/images/user-1.png" alt="John" />
                    </v-avatar>
                    <p
                        class="pt-md-6 pt-6 font-weight-bold  text-md-h6 text-h6"
                    >
                        Sean Parker
                    </p>
                </v-card>
            </v-col>
            <v-col
                class="col-md-4 col-lg-4 col-xl-4 col-sm-12 col-12  hover-comment"
            >
                <v-card class="py-md-8 px-md-6 py-6 py-sm-6 px-6 px-sm-6">
                    <v-icon color="rgba(255, 0, 0, 0.7)" large>
                        mdi-twitch
                    </v-icon>
                    <p class="py-4 py-md-4 text-center font-weight-medium">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Suscipit odio consectetur quo distinctio voluptatum
                        dolore placeat error labore fugiat rem dicta similique
                        corrupti earum pariatur.
                    </p>
                    <v-avatar class="rounded-circle">
                        <img src="../assets/images/user-1.png" alt="John" />
                    </v-avatar>
                    <p class="pt-md-6 pt-6 font-weight-bold text-md-h6 text-h6">
                        Sean Parker
                    </p>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: 'comment',
}
</script>

<style scoped>
.hover-comment:hover {
    transform: translateY(-5px);
    transition: all 0.5s;
}
</style>
