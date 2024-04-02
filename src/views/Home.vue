<script>
import productsCard from "../components/productsCard.vue";
import TestimonialCard from "../components/TestimonialCard.vue";
import randomBlock from "../components/randomBlock.vue";
import typesCard from "@/components/typesCard.vue";
import contactSection from "@/components/contactSection.vue";

import img1 from "../assets/unsplash1.jpg";
import img2 from "../assets/unsplash2.jpg";
import img3 from "../assets/unsplash3.jpg";
import img4 from "../assets/unsplash4.jpg";
import img5 from "../assets/unsplash5.jpg";
import img6 from "../assets/unsplash6.jpg";

import team1 from "../assets/1.jpg";
import team2 from "../assets/2.jpg";
import team3 from "../assets/3.jpg";
import team4 from "../assets/4.jpg";
import team5 from "../assets/5.jpg";
import team6 from "../assets/6.jpg";
import team7 from "../assets/7.jpg";
import team8 from "../assets/8.jpg";
import slide1 from "../assets/photo_8.jpg";
import slide2 from "../assets/photo_10.jpg";
import slide3 from "../assets/photo_3.jpg";
import slide4 from "../assets/photo_4.jpg";
import slide5 from "../assets/photo_9.jpg";

export default {
  components: {
    productsCard,
    TestimonialCard,
    randomBlock,
    typesCard,
    contactSection,
  },
  data() {
    return {
      cards: [
        {
          id: "1",
          img: img1,
          fullName: "Henry Hall",
          role: "Freelancer",
        },
        {
          id: "2",
          img: img2,
          fullName: "Emma Wright",
          role: "Blogger",
        },
        {
          id: "3",
          img: img3,
          fullName: "Jack Smith",
          role: "Author",
        },
        {
          id: "4",
          img: img4,
          fullName: "Alice Williams",
          role: "Marketer",
        },
        {
          id: "5",
          img: img5,
          fullName: "David James",
          role: "Journalist",
        },
        {
          id: "6",
          img: img6,
          fullName: "Sophia Murphy",
          role: "Researcher",
        },
      ],
      teams: [
        {
          id: "1",
          img: team1,
          fullName: "Mark Smith",
          role: "Founder & CEO",
        },
        {
          id: "2",
          img: team2,
          fullName: "John Doe",
          role: "Sr. Developer",
        },
        {
          id: "3",
          img: team3,
          fullName: "Mark Wood",
          role: "Digital Marketer",
        },
        {
          id: "4",
          img: team4,
          fullName: "Catherina Perry",
          role: "Graphic Designer",
        },
        {
          id: "5",
          img: team5,
          fullName: "James Anderson",
          role: "Founder & CEO",
        },
        {
          id: "6",
          img: team6,
          fullName: "Kate Perry",
          role: "Sr. Developer",
        },
        {
          id: "7",
          img: team7,
          fullName: "Kane Richard",
          role: "Digital Marketer",
        },
        {
          id: "8",
          img: team8,
          fullName: "Brad Haddin",
          role: "Graphic Designer",
        },
      ],
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
  <!-- `Parallax` Section -->
  <v-parallax height="auto" src="../assets/cover2.jpg" id="home">
    <div
      class="d-flex flex-column fill-height justify-center align-center text-white"
    >
      <p
        class="font-weight-regular text-center mb-4 text-md-h3"
        style="
          color: #8d6e63 !important;
          background-color: #e4d9d3;
          border-radius: 50px;
          width: 60%;
          padding: 10px 0;
          font-family: system-ui !important;
        "
      >
        <span style="color: #5d4037"> {{ $t("message.hello") }} </span>
      </p>
    </div>
  </v-parallax>
  <!-- Hero Section -->
  <section class="py-16">
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
          <h3 class="title pb-8 ma-10">
            <span style="color: #589195; font-size: 2.7rem"
              >{{ $t("hero.title1") }}
            </span>
            {{ $t("hero.title2") }}
          </h3>
          <p class="subtitle pa-1 ma-10">
            {{ $t("hero.subtitle") }}
          </p>
          <div
            style="display: flex; flex-wrap: wrap"
            class="d-flex justify-start ma-10"
          >
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
            class="hero-img"
            src="../assets/person.png"
            width="500"
            height="600"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
  </section>
  <!-- Palestine section -->
  <section class="my-16 py-16">
    <v-container
      class="my-6"
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
                height="550"
                cover
              ></v-img>
            </v-col>
            <v-col cols="12" sm="6" lg="6" align-self="center" class="">
              <h3 class="title1 pa-6">
                <span style="color: #589195; font-size: 2.7rem">
                  Palestine
                </span>
                lives in the heart of every good human , My heart hurts with
                everything going on in Palestine . Gaza I’m praying for you.
              </h3>
              <v-btn
                style="background: linear-gradient(0deg, #79bbbf, #589195)"
                class="btn-sec ma-8"
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
  <!-- Types Section -->
  <typesCard></typesCard>
  <randomBlock></randomBlock>
  <!-- Products Section -->
  <section id="products"></section>
  <productsCard></productsCard>
  <!-- Team Section -->
  <section class="my-10">
    <v-container>
      <h1
        style="
          color: #589195;
          font-family: system-ui;
          font-weight: 500;
          font-size: 50px;
        "
        class="text-center my-16 py-16"
      >
        Our Team
      </h1>
      <v-row>
        <v-col cols="12" sm="6" md="3" v-for="t in teams" :key="t.id">
          <v-hover v-slot="{ isHovering, props }" open-delay="200">
            <v-card
              v-bind="props"
              :elevation="isHovering ? 10 : 5"
              :color="isHovering ? 'grey-lighten-4' : 'light-blue-lighten-5'"
              class="a-link"
              rounded="xl"
            >
              <v-img class="img align-end text-white" :src="t.img" cover>
              </v-img>
              <v-card-title class="full-name text-center">{{
                t.fullName
              }}</v-card-title>
              <v-card-text class="role text-center">{{ t.role }}</v-card-text>
              <v-card-actions class="card-social justify-center">
                <a
                  href="https://www.linkedin.com/in/sumaya-alabdallah-4aa51b276"
                >
                  <v-btn icon color="white">
                    <v-icon class="btn" size="1.5rem" color="#4a5556">
                      mdi-linkedin
                    </v-icon>
                  </v-btn>
                </a>
                <a
                  href="https://www.facebook.com/somya.alabdllah.3?mibextid=D4KYlr"
                >
                  <v-btn class="mx-1" icon color="white">
                    <v-icon class="btn" size="1.5rem" color="#4a5556">
                      mdi-facebook
                    </v-icon>
                  </v-btn>
                </a>
                <a
                  href="https://www.facebook.com/somya.alabdllah.3?mibextid=D4KYlr"
                >
                  <v-btn icon color="white">
                    <v-icon class="btn" size="1.5rem" color="#4a5556">
                      mdi-twitter
                    </v-icon>
                  </v-btn>
                </a>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </section>
  <!-- Testimonial Section -->
  <section class="my-16" style="background-color: #ecf5f4">
    <v-container>
      <h1
        style="
          color: #589195;

          font-family: system-ui;
          font-weight: 500;
          font-size: 40px;
        "
        class="text-left my-16"
      >
        What Customers Say About Us
      </h1>

      <v-window
        show-arrows
        prev-icon="mdi-arrow-left"
        next-icon="mdi-arrow-right"
      >
        <v-window-item v-for="card in cards" :key="card.id">
          <v-row>
            <v-col cols="12">
              <TestimonialCard width="55%" class="mx-auto testimonial">
                <template v-slot:img
                  ><v-img
                    style="border-radius: 50%; margin-left: 30px"
                    height="230"
                    width="230"
                    :src="card.img"
                    cover
                  ></v-img>
                </template>

                <template v-slot:fullName>{{ card.fullName }} </template>
                <template v-slot:role>{{ card.role }} </template>

                <v-rating
                  v-model="rating"
                  class="ma-4"
                  readonly
                  color="#ffb400"
                  half-increments
                ></v-rating>
              </TestimonialCard>
            </v-col>
          </v-row>
        </v-window-item>
      </v-window>
    </v-container>
  </section>
  <!-- Form Section -->
  <contactSection />
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
  font-size: 19px !important;
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
.hero-img {
  animation: move 1s infinite;
  cursor: pointer;
}
@keyframes move {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(7px);
  }
  50% {
    transform: translateY(-7px);
  }
  75% {
    transform: translateY(7px);
  }
  100% {
    transform: translateX(0);
  }
}
.title {
  color: #34394c;
  font-family: system-ui;
  font-size: 2.5rem;
}
.title1 {
  color: #34394c;
  font-family: system-ui;
  font-size: 2rem;
}
.subtitle {
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 2;
  color: #34394c;
}
.card-social {
  opacity: 0;
}
.btn:hover {
  color: #4db6ac !important;
  transform: translateY(-5px);
  transition: all 0.3s ease-in-out;
}
.a-link:hover .img {
  transform: scale(1.05);
  transition: all 0.3s ease-in-out;
}
.a-link:hover .card-social {
  cursor: pointer;
  transform: translate(0, -20%);
  transition: all 0.3s ease-in-out;
  opacity: 1;
}
.a-link:hover {
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
  cursor: pointer;
  background: #e0e0e0;
}
.full-name {
  color: #4a5556;
  font-size: 1.3rem;
  font-weight: 600;
}
.role {
  color: gray;
  font-size: 1rem;
  font-weight: 500;
}
@media (max-width: 900px) {
  .testimonial {
    width: 100% !important;
  }
}
</style>
