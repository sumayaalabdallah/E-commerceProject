<script>
import slide1 from "../assets/person_2.png";
import slide2 from "../assets/person_3.png";
import slide3 from "../assets/person_2.78cc548fe45a5ee71390.png";
import contactSection from "@/components/contactSection.vue";
export default {
  components: {
    contactSection,
  },
  data() {
    return {
      sliders: [
        {
          id: "1",
          img: slide1,
          subtitle: "Discover Men's Latest Fashion",
        },
        {
          id: "2",
          img: slide2,
          subtitle: "Discover Men's Latest Fashion",
        },
        {
          id: "3",
          img: slide3,
          subtitle: "Discover Women's Latest Fashion",
        },
      ],
    };
  },
  methods: {
    scrollMethod() {
      this.$nextTick(() =>
        document.getElementById("hero").scrollIntoView({ behavior: "smooth" })
      );
    },
  },
};
</script>
<template>
  <section class="my-6" id="home">
    <v-carousel cycle show-arrows="hover" hide-delimiters height="auto">
      <v-carousel-item v-for="s in sliders" :key="s.id">
        <v-container
          class="my-6"
          style="background-color: #ecf5f4; border-radius: 50px"
        >
          <v-row no-gutters>
            <v-col cols="12" sm="6" lg="6" align-self="end" class="">
              <h3 class="title pa-6">summer sales is on</h3>
              <p class="subtitle">{{ s.subtitle }}</p>
              <v-btn
                color="#589195"
                @click="scrollMethod"
                class="my-8 btn"
                rounded="xl"
                size="large"
              >
                explore now
              </v-btn>
            </v-col>
            <v-col cols="12" sm="6" lg="6">
              <v-img :src="s.img" width="450" height="550"></v-img>
            </v-col>
          </v-row>
        </v-container>
      </v-carousel-item>
    </v-carousel>
  </section>
  <section class="py-16">
    <v-container>
      <h1
        style="
          color: #34394c;
          font-family: system-ui;
          font-weight: 500;
          font-size: 40px;
        "
        class="text-left mb-16"
      >
        Our Services
      </h1>

      <v-row>
        <v-col class="free_shipping_content" lg="3" md="6" sm="6">
          <div class="free_shipping_icon">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="truck"
              class="svg-inline--fa fa-truck"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path
                fill="currentColor"
                d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM208 416c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zm272 48c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48z"
              ></path>
            </svg>
          </div>
          <div class="free_shipping_text">
            <h3>Free Shipping</h3>
            <p>Doorstop delivery to most of the world</p>
          </div>
        </v-col>
        <v-col class="free_shipping_content" lg="3" md="6" sm="6">
          <div class="free_shipping_icon">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="credit-card"
              class="svg-inline--fa fa-credit-card"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M64 32C28.7 32 0 60.7 0 96v32H576V96c0-35.3-28.7-64-64-64H64zM576 224H0V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V224zM112 352h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16H368c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16z"
              ></path>
            </svg>
          </div>
          <div class="free_shipping_text">
            <h3>Secure Payments</h3>
            <p>99% secure payment</p>
          </div>
        </v-col>
        <v-col class="free_shipping_content" lg="3" md="6" sm="6">
          <div class="free_shipping_icon">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="headset"
              class="svg-inline--fa fa-headset"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V256C0 114.6 114.6 0 256 0S512 114.6 512 256V400.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24H240c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208zM144 208h16c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V272c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h16z"
              ></path>
            </svg>
          </div>
          <div class="free_shipping_text">
            <h3>24/7 Support</h3>
            <p>Dedicated support</p>
          </div>
        </v-col>
        <v-col class="free_shipping_content" lg="3" md="6" sm="6">
          <div class="free_shipping_icon">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="building-columns"
              class="svg-inline--fa fa-building-columns"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M243.4 2.6l-224 96c-14 6-21.8 21-18.7 35.8S16.8 160 32 160v8c0 13.3 10.7 24 24 24H456c13.3 0 24-10.7 24-24v-8c15.2 0 28.3-10.7 31.3-25.6s-4.8-29.9-18.7-35.8l-224-96c-8.1-3.4-17.2-3.4-25.2 0zM128 224H64V420.3c-.6 .3-1.2 .7-1.8 1.1l-48 32c-11.7 7.8-17 22.4-12.9 35.9S17.9 512 32 512H480c14.1 0 26.5-9.2 30.6-22.7s-1.1-28.1-12.9-35.9l-48-32c-.6-.4-1.2-.7-1.8-1.1V224H384V416H344V224H280V416H232V224H168V416H128V224zm128-96c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z"
              ></path>
            </svg>
          </div>
          <div class="free_shipping_text">
            <h3>Easy Returns</h3>
            <p>90 Days Return If goods have problems</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
  <section class="my-16" id="hero">
    <v-container>
      <p class="text-center my-16">Showing our latest arrival on this summer</p>
      <v-row justify="center">
        <v-col class="ma-1 card" cols="12" sm="6" lg="3">
          <div>
            <h3 class="title1 text-center my-6">Get 40% Off</h3>
            <p class="text-center pb-3">Man’s Latest Collection</p>
          </div>
          <img
            class="pb-16"
            src="../assets/random1.png"
            width="200"
            height="325"
            cover
          />
        </v-col>
        <v-col class="ma-1 card" cols="12" sm="6" lg="3">
          <div>
            <h3 class="title1 my-6 text-center">Couple Fashion</h3>
            <p class="text-center pb-3">Best Collection for Stylish Couple</p>
          </div>
          <img src="../assets/random2.png" width="250" height="300" cover />
        </v-col>
        <v-col class="ma-1 card" cols="12" sm="6" lg="3">
          <div>
            <h3 class="title1 text-center my-6">Be Stylish</h3>
            <p class="px-2 pb-3 text-center">Girl’s Latest Fashion</p>
          </div>
          <img
            class="pb-16"
            src="../assets/random3.png"
            width="225"
            height="325"
            cover
          />
        </v-col>
        <v-col class="ma-1 card" cols="12" sm="6" lg="3">
          <img src="../assets/random4.png" width="175" />
          <div>
            <p class="text-center">Exclusive Shoes Collection</p>
          </div>
        </v-col>
        <v-col class="ma-1 card" cols="12" sm="6" lg="3">
          <div>
            <h3 class="title1 my-6 text-center">Get 40% Off</h3>
            <p class="px-2 text-center">Ulina Trendy Sunglass</p>
          </div>
          <img
            class="pt-16 mt-16 ma-9"
            src="../assets/random5.png"
            width="200"
          />
        </v-col>
        <v-col class="ma-1 card" cols="12" sm="6" lg="3">
          <img src="../assets/random6.png" width="200" />
          <div>
            <h3 class="title1 my-6 text-center">Couple Fashion</h3>
            <p class="text-center pb-3">Best Collection for Stylish Couple</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
  <contactSection />
</template>
<style scoped>
.title {
  color: #367d82;
  font-family: system-ui;
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: uppercase;
}
.subtitle {
  color: #34394c;
  font-size: 4rem;
  font-weight: 600;
}
.btn {
  background-color: #3e9aa3;
  color: white;
  margin-bottom: 5rem !important;
}
p {
  color: #34394c;
  font-size: 30px;
  font-family: system-ui;
  font-weight: 600;
}
.title1 {
  color: #679da0;
  font-size: 16px;
  font-weight: 700;
  font-family: "Arial Narrow Bold", sans-serif;
}
.card {
  background-color: #ecf5f4;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  border-radius: 50px;
}
.free_shipping_icon svg {
  color: #589195;
  font-size: 41px;
  margin-right: 17px;
}
.svg-inline--fa {
  height: 1.5em;
}
.free_shipping_content {
  display: flex;
}
.free_shipping_text h3 {
  color: #6a6a6a;
  font-size: 1.5rem;
  font-family: system-ui;
  font-weight: 500;
}
.free_shipping_text p {
  font-family: system-ui;
  color: #9484a3;
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 30px;
}
</style>
