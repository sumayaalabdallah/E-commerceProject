<template>
  <section class="my-16" id="home">
    <v-container
      class="py-16"
      style="background-color: #ecf5f4; border-radius: 50px"
    >
      <h1 class="my-10 text-center pb-6" id="font">Login to join us!</h1>

      <v-row justify="center">
        <v-col cols="12" sm="12" md="6">
          <v-card class="pa-16" style="border-radius: 50px">
            <v-form @submit.prevent="submit">
              <v-text-field label="username" v-model="username"></v-text-field>
              <v-text-field
                label="password"
                required
                v-model="password"
                type="password"
              ></v-text-field>

              <v-btn
                type="submit"
                color="secondary"
                class="mr-4"
                @click="submit"
              >
                Login
              </v-btn>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
  <contactSection />
</template>
<script setup>
import contactSection from "@/components/contactSection.vue";
import { ref } from "vue";
const username = ref("kminchelle");
const password = ref("0lelplR");
const submit = () => {
  fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username.value,
      password: password.value,
    }),
  })
    .then((res) => res.json())
    .then(console.log);
};
</script>
<style>
#font {
  color: #34394c;
  font-family: system-ui;
  font-size: 2.5rem;
}
</style>
