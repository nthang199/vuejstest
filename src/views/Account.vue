<template>
    <div class="account">
        <v-row
            class="px-xl-16 px-lg-16 px-md-16 px-sm-6 px-6  account-background d-flex align-center"
        >
            <v-col
                class="col-xl-8 col-md-8 col-lg-8 col-sm-12 col-12 account-image"
            >
                <img src="../assets/images/image1.png" alt="" />
            </v-col>
            <v-col class="col-xl-4 col-md-4 col-lg-4 col-sm-12 col-12 ">
                <v-row class="ma-md-12 account-form">
                    <v-col
                        class="col-md-6 col-6 text-md-center text-center font-weight-bold"
                        @click="chooseAccount('login')"
                    >
                        Login
                        <hr class="dashLogin" :class="setFormLogin"
                    /></v-col>

                    <v-col
                        class="col-md-6 col-6 text-md-center text-center font-weight-bold"
                        @click="chooseAccount('register')"
                    >
                        Register
                        <hr class="dashLogin" :class="setFormRegister"
                    /></v-col>

                    <div class="form d-flex align-center justify-between">
                        <v-template
                            transition="slide-x-transition"
                            class="col-md-12"
                            :class="setFormLogin"
                        >
                            <v-text-field
                                height="0.5rem"
                                placeholder="User name"
                                outlined
                                dense
                            ></v-text-field
                            ><v-text-field
                                height="0.5rem"
                                placeholder="Password"
                                outlined
                                dense
                            ></v-text-field>
                            <v-btn
                                rounded
                                class="text-md-button font-weight-bold"
                                color="red darken-1"
                                width="100%"
                                ><p class="ma-md-0 ma-0 white--text">
                                    Login
                                </p></v-btn
                            >
                            <p
                                class="text-md-subtitle-1 font-weight-bold py-md-2 py-2"
                            >
                                Forgot password ?
                            </p>
                        </v-template>
                        <v-template
                            transition="fade-transition"
                            class="col-md-12"
                            :class="setFormRegister"
                        >
                            <v-text-field
                                height="0.5rem"
                                placeholder="User name"
                                outlined
                                dense
                            ></v-text-field>
                            <v-text-field
                                height="0.5rem"
                                placeholder="Email"
                                outlined
                                dense
                            ></v-text-field
                            ><v-text-field
                                height="0.5rem"
                                placeholder="Password"
                                outlined
                                dense
                            ></v-text-field>
                            <v-btn
                                rounded
                                class="text-md-button font-weight-bold"
                                color="red darken-1"
                                width="100%"
                                ><p class="ma-md-0 ma-0 white--text">
                                    Register
                                </p></v-btn
                            >
                        </v-template>
                    </div>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: 'account',
    data() {
        return {
            isLogin: true,
        }
    },
    methods: {
        chooseAccount(string) {
            if (string === 'login') {
                this.isLogin = true
            } else if (string === 'register') {
                this.isLogin = false
            }
        },
    },
    computed: {
        setFormLogin() {
            return { login: this.isLogin, 'login-none': !this.isLogin }
        },
        setFormRegister() {
            return { register: !this.isLogin, 'register-none': this.isLogin }
        },
    },
}
</script>

<style scoped>
.account-image img {
    width: 75%;
}
.account-form {
    background-color: #fff;
}
.account-background {
    background-color: #ffd6d6;
}
.form {
    height: 300px;
    width: 100%;
    background-color: #fff;
}
.login {
    display: block;
}
.dashLogin {
    width: 100%;
    height: 5px;
    color: red;
    border: none;
    background-color: red;
}
.login-none {
    display: none;
}
.register {
    display: block;
}
.register-none {
    display: none;
}
</style>
