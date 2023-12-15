<template>
  <v-app>
    <default-bar />

    <default-view />
    <BackTotop />
    <FooterView />
  </v-app>
</template>

<script setup>
import DefaultBar from "./AppBar.vue";
import FooterView from "./FooterView.vue";
import DefaultView from "./View.vue";
import BackTotop from "./BackTotop.vue";
</script>
