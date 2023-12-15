<template>
  <v-app-bar style="box-shadow: 5px 5px 10px #4a5556" class="py-1">
    <v-container>
      <v-row>
        <v-col cols="12" md="4" class="hidden-sm-and-down">
          <div class="ma-3">
            <img
              class=""
              src="../../assets/download.png"
              width="150"
              alt="logo"
            />
          </div>
        </v-col>

        <v-col cols="12" md="4">
          <div class="d-flex justify-space-around ma-6">
            <router-link class="text-h6 link-color" to="/">Home</router-link>
            <router-link class="text-h6 link-color" to="/About"
              >About</router-link
            >
            <router-link class="text-h6 link-color" to="/Product"
              >Product</router-link
            >

            <a
              style="cursor: pointer"
              @click="scrollMethod"
              class="text-h6 link-color"
              >Contact</a
            >
          </div>
        </v-col>
        <v-col cols="12" md="4" class="hidden-sm-and-down">
          <div class="d-flex justify-end ma-4">
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
            <v-btn to="/login" icon color="#589195">
              <v-icon>mdi-account</v-icon>
            </v-btn>
            <v-btn icon color="#589195" @click="toggleTheme()"
              ><v-icon>mdi mdi-brightness-4 </v-icon></v-btn
            >
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
import { useCartStore } from "@/store/cart.js";
import { useTheme } from "vuetify";

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
  text-decoration: none;
  text-align: left !important;
  font-family: monospace !important;
  font-weight: 500 !important;
  font-size: 20px !important;
}
.v-app-bar {
  background-color: #ecf5f4a7 !important;
  backdrop-filter: blur(20px) !important;
}
</style>
