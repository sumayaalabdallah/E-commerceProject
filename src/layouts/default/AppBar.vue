<template>
  <v-app-bar>
    <v-app-bar-nav-icon
      class="ma-0"
      color="blue-grey-lighten-2"
      @click="drawer = !drawer"
    ></v-app-bar-nav-icon>
    <!-- <div class="icons d-flex justify-end"> -->
    <v-btn to="/Cart" icon color="#589195">
      <v-badge
        location="right top"
        :content="counter"
        color="blue-grey-lighten-2"
        offset-x="-5"
      >
        <v-icon>mdi-cart</v-icon>
      </v-badge>
    </v-btn>
    <v-btn to="/Likes" icon color="#589195">
      <v-icon>mdi-heart</v-icon>
    </v-btn>
    <v-btn icon color="#589195" @click="changeLocale"
      ><v-icon>{{
        this.$vuetify.locale.current === "ar"
          ? "mdi mdi-abjad-arabic"
          : "mdi mdi-alphabetical-variant"
      }}</v-icon></v-btn
    >
    <v-btn icon color="#589195" @click="toggleTheme()"
      ><v-icon>mdi mdi-brightness-4 </v-icon></v-btn
    >
    <!-- <v-spacer></v-spacer> -->
    <template v-slot:append>
      <img
        class="logo mx-4"
        src="../../assets/download.png"
        width="150"
        alt="logo-img"
      />
    </template>
  </v-app-bar>
  <v-navigation-drawer style="padding: 20px 0" v-model="drawer">
    <v-list nav>
      <v-list-item class="link-color" :to="{ name: 'Home' }">{{
        $t("appbar.home")
      }}</v-list-item>
      <v-list-item class="link-color" :to="{ name: 'About' }">{{
        $t("appbar.about")
      }}</v-list-item>
      <v-list-item class="link-color" :to="{ name: 'Product' }">{{
        $t("appbar.products")
      }}</v-list-item>
      <v-list-item class="link-color" @click="scrollMethod">{{
        $t("appbar.contact")
      }}</v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { useCartStore } from "@/store/cart.js";
import { useTheme } from "vuetify";
import i18n from "@/plugins/i18n";
export default {
  data() {
    const theme = useTheme();
    function toggleTheme() {
      theme.global.name.value = theme.global.current.value.dark
        ? "light"
        : "dark";
    }
    return {
      store: [],
      counter: 0,
      theme,
      toggleTheme,
      drawer: false,
    };
  },
  created() {
    setInterval(() => {
      this.store = useCartStore().items;
      this.counter = this.store.reduce((accumulator, item) => {
        return accumulator + item.count;
      }, 0);
    }, 1000);
  },
  methods: {
    changeLocale() {
      this.$vuetify.locale.current =
        this.$vuetify.locale.current === "en" ? "ar" : "en";
      i18n.global.locale = i18n.global.locale === "en" ? "ar" : "en";
    },
    scrollMethod() {
      this.$nextTick(() =>
        document
          .getElementById("contact")
          .scrollIntoView({ behavior: "smooth" })
      );
    },
  },
};
</script>

<style scoped>
.link-color {
  color: #589195;
}
.v-app-bar {
  background-color: #ecf5f427 !important;
  backdrop-filter: blur(15px) !important;
  border-radius: 30px;
  margin: 10px 0;
  padding: 5px;
}
@media (max-width: 500px) {
  .logo {
    width: 110px;
    margin-left: 2px !important;
  }
}
@media (max-width: 390px) {
  .logo {
    width: 75px;
    margin-left: 2px !important;
  }
}
@media (max-width: 335px) {
  .logo {
    width: 60px;
  }
}
@media (max-width: 323px) {
  .logo {
    width: 40px;
  }
}
</style>
