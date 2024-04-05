<script>
import slide1 from "../assets/photo_8.jpg";
import slide2 from "../assets/photo_10.jpg";
import slide3 from "../assets/photo_3.jpg";
import slide4 from "../assets/photo_4.jpg";
import slide5 from "../assets/photo_9.jpg";
export default {
  data() {
    return {
      items: [
        {
          id: "1",
          img: slide1,
        },
        {
          id: "2",
          img: slide2,
        },
        {
          id: "3",
          img: slide3,
        },
        {
          id: "4",
          img: slide4,
        },
        {
          id: "5",
          img: slide5,
        },
      ],
    };
  },
  methods: {
    scrollMethod() {
      this.$nextTick(() =>
        document
          .getElementById("products")
          .scrollIntoView({ behavior: "smooth" })
      );
    },
  },
};
</script>
<template>
  <!-- Hero Section -->
  <section class="my-5">
    <v-container
      style="
        background-color: #ecf5f4;
        border-radius: 50px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
          rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
          rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
      "
    >
      <v-row no-gutters>
        <v-col cols="12" sm="6" lg="6" align-self="center">
          <p class="title ma-5">
            <span style="color: #589195">{{ $t("hero.title1") }} </span>
            {{ $t("hero.title2") }}
          </p>
          <p class="subtitle ma-5">
            {{ $t("hero.subtitle") }}
          </p>
          <div>
            <v-btn
              style="
                background: linear-gradient(0deg, #79bbbf, #589195) !important;
              "
              class="btn-sec ma-1"
              rounded="xl"
              size="large"
            >
              <router-link color="white" class="link-color" to="/About">{{
                $t("hero.btn1")
              }}</router-link></v-btn
            >
            <v-btn
              @click="scrollMethod"
              class="btn-sec ma-1"
              size="large"
              rounded="xl"
            >
              {{ $t("hero.btn2") }}
            </v-btn>
          </div>
        </v-col>
        <v-col lg="6" sm="6" cols="12">
          <v-img
            src="../assets/person.png"
            width="500"
            height="500"
            alt="hero-img"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
    <!-- Palestine section -->
    <v-container
      class="mt-5"
      style="
        background-color: #ecf5f4;
        border-radius: 50px;
        border-radius: 50px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
          rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
          rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
      "
    >
      <v-carousel cycle show-arrows="hover" hide-delimiters height="auto">
        <v-carousel-item v-for="item in items" :key="item.id">
          <v-row no-gutters>
            <v-col cols="12" sm="6" lg="6">
              <v-img
                style="border-radius: 50px"
                :src="item.img"
                width="450"
                height="350"
                alt="palestine-img"
                cover
              ></v-img>
            </v-col>
            <v-col cols="12" sm="6" lg="6" align-self="center">
              <h3 class="subtitle">
                <span style="color: #589195" class="title"> Palestine </span>
                lives in the heart of every good human , My heart hurts with
                everything going on in Palestine . Gaza I’m praying for you.
              </h3>
              <v-btn
                style="background: linear-gradient(0deg, #79bbbf, #589195)"
                class="btn-sec my-10"
                rounded="xl"
                size="large"
              >
                Donate Now
              </v-btn>
            </v-col>
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </v-container>
  </section>
</template>
<style scoped>
a {
  text-decoration: none;
}
.link-color {
  color: #34394c;
}
.btn-sec {
  background: #b2b0b1;
  position: relative;
  border: 1px solid #34394c;
  border-bottom: 3px solid #34394c;
  color: #34394c !important;
  font-weight: 600 !important;
  font-size: 1.1rem !important;
  font-family: system-ui !important;
}
.btn-sec:hover {
  background: linear-gradient(0deg, #8fc6c9, #77c7cd);
  box-shadow: inset 0px 1px 0px 0px rgb(88, 145, 149, 0.4);
  transition: all 0.3s ease-in-out;
  letter-spacing: 3px;
}
.btn-sec:active {
  top: 10px;
  border-bottom: 1px solid rgb(50, 50, 50);
}

.title {
  color: #34394c;
  font-family: system-ui;
  font-size: 2.5rem;
  font-weight: 600;
}

.subtitle {
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 2;
  color: #34394c;
}
@media (max-width: 400px) {
  .title {
    font-size: 2.5rem;
    font-weight: 600;
  }

  .subtitle {
    font-size: 1.3rem;
    font-weight: 500;
    line-height: 2;
    color: #34394c;
  }
}
</style>
