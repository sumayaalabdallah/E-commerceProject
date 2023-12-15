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
        class="text-h3 font-weight-regular text-center mb-4"
        style="
          font-size: 3rem !important;
          color: #8d6e63 !important;
          background-color: #e4d9d3;
          border-radius: 50px;
          width: 60%;
          padding: 10px 0;
          font-family: system-ui !important;
        "
      >
        <span style="color: #5d4037; font-size: 3.3rem"> Welcome </span> To Our
        Store
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
            <span style="color: #589195; font-size: 2.7rem">Ulina </span>
            Fashionable Jeans
          </h3>
          <p class="subtitle pa-1 ma-10">
            Get ready to elevate your style game with our exclusive selection of
            clothing and accessories. Welcome aboard! Step into our virtual
            wardrobe and discover the perfect look for every occasion
          </p>
          <div
            style="display: flex; flex-wrap: wrap"
            class="d-flex justify-start ma-10"
          >
            <v-btn
              color="secondary"
              class="btn-sec ma-3"
              rounded="xl"
              size="large"
            >
              <router-link class="link-color" to="/About"
                >Read more</router-link
              ></v-btn
            >
            <v-btn
              color="secondary"
              style="
                color: white;
                font-weight: 500 !important;
                font-size: 19px !important;
                font-family: system-ui !important;
              "
              @click="scrollMethod"
              class="btn-sec ma-3"
              rounded="xl"
              size="large"
            >
              Buy Now
            </v-btn>
          </div>
        </v-col>
        <v-col lg="6" sm="6" cols="12">
          <v-img src="../assets/person.png" width="500" height="600"></v-img>
        </v-col>
      </v-row>
    </v-container>
  </section>
  <!-- Palestine section -->
  <section class="my-16 py-16">
    <v-carousel cycle show-arrows="hover" hide-delimiters height="auto">
      <v-carousel-item v-for="item in items" :key="item.id">
        <v-container
          class="my-6"
          style="background-color: #ecf5f4; border-radius: 50px"
        >
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
                color="secondary"
                style="
                  color: white;
                  font-weight: 500 !important;
                  font-size: 19px !important;
                  font-family: system-ui !important;
                "
                class="btn-sec ma-3"
                rounded="xl"
                size="large"
              >
                Donate Now
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-carousel-item>
    </v-carousel>
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
          color: #34394c;
          font-family: system-ui;
          font-weight: 500;
          font-size: 50px;
        "
        class="text-center my-16 py-16"
      >
        Our Team
      </h1>
      <v-row>
        <v-col cols="12" md="3" sm="6" v-for="t in teams" :key="t.id">
          <a href="">
            <v-card
              class="a-link"
              style="background-color: #ecf5f4"
              max-width="300"
            >
              <v-img
                class="align-end text-white"
                height="300"
                width="500"
                :src="t.img"
                cover
              >
              </v-img>
              <v-card-title class="full-name">{{ t.fullName }}</v-card-title>
              <v-card-text class="role">{{ t.role }}</v-card-text>
              <v-card-actions>
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
          </a>
        </v-col>
      </v-row>
    </v-container>
  </section>
  <!-- Testimonial Section -->
  <section class="my-16" style="background-color: #ecf5f4">
    <v-container>
      <h1
        style="
          color: #34394c;

          font-family: system-ui;
          font-weight: 500;
          font-size: 40px;
        "
        class="text-left my-16"
      >
        What Customers Say About Us
      </h1>
      <v-row>
        <v-col cols="12" sm="6" lg="4" v-for="card in cards" :key="card.id">
          <TestimonialCard>
            <v-card-text class="text">
              Lorem ipsum dolor sit amet, elit deleniti dissentias quo eu, hinc
              minim appetere te usu, ea case duis scribentur has. Duo te
              consequat elaboraret, has quando suavitate at.
            </v-card-text>

            <template v-slot:img
              ><v-img
                style="display: block; border-radius: 50%"
                height="150"
                width="150"
                :src="card.img"
                cover
              ></v-img>
            </template>
            <template v-slot:fullName>{{ card.fullName }} </template>
            <template v-slot:role>{{ card.role }} </template>
          </TestimonialCard>
        </v-col>
      </v-row>
    </v-container>
  </section>
  <!-- Form Section -->
  <contactSection />
</template>
<style scoped>
.link-color {
  color: white;
  font-weight: 500 !important;
  font-size: 19px !important;
  font-family: system-ui !important;
}
.btn-sec {
  background-color: #589195;
}
.btn-sec:hover {
  background-color: #4db6ac !important;
  transform: translateY(1rem);
  transition: all 0.3s ease-in-out;
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
.btn:hover {
  color: #4db6ac !important;
  transform: translateY(-5px);
  transition: all 0.3s ease-in-out;
}
a {
  text-decoration: none;
}
a .a-link:hover {
  transform: scale(1.08);
  transition: all 0.3s ease-in-out;
}
.a-link {
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  border-radius: 20px;
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
</style>
