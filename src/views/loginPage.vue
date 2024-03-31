<template>
  <section class="my-16" id="home">
    <v-container>
      <h1 class="pb-10 text-center" id="font">Login to join us!</h1>

      <v-row justify="center">
        <v-col cols="12" sm="12" md="6">
          <v-card
            class="pa-16"
            style="background-color: #ecf5f4; border-radius: 50px"
          >
            <v-form @submit.prevent="login">
              <v-text-field
                bg-color="#ecf5f4"
                label="Email"
                type="text"
                v-model="email"
              ></v-text-field>
              <v-text-field
                bg-color="#ecf5f4"
                label="Password"
                required
                v-model="password"
                type="password"
              ></v-text-field>

              <v-btn type="submit" color="#659a9d" class="mr-4"> Login </v-btn>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
  <contactSection />
</template>
<script>
// import contactSection from "@/components/contactSection.vue";
// import { ref } from "vue";
// const username = ref("kminchelle");
// const password = ref("0lelplR");
// const submit = () => {
//   fetch("https://dummyjson.com/auth/login", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       username: username.value,
//       password: password.value,
//     }),
//   })
//     .then((res) => res.json())
//     .then(console.log);
// };

import { useUserStore } from "@/store/user";
export default {
  setup() {
    const userStore = useUserStore();
    return { userStore };
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      await this.userStore.signIn(this.email, this.password);
    },
  },
};
</script>
<style>
#font {
  color: #659a9d;
  font-family: system-ui;
  font-size: 2.5rem;
}
</style>
