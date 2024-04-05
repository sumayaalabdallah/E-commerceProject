<script>
import TestimonialCard from "../components/TestimonialCard.vue";
import img1 from "../assets/unsplash1.jpg";
import img2 from "../assets/unsplash2.jpg";
import img3 from "../assets/unsplash3.jpg";
import img4 from "../assets/unsplash4.jpg";
import img5 from "../assets/unsplash5.jpg";
import img6 from "../assets/unsplash6.jpg";
export default {
  components: {
    TestimonialCard,
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
    };
  },
};
</script>
<template>
  <section class="py-5" style="background-color: #ecf5f4">
    <v-container>
      <h1
        style="
          color: #589195;

          font-family: system-ui;
          font-weight: 500;
          font-size: 40px;
        "
        class="text-left my-5"
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
                    alt="testimonial-img"
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
</template>
<style scoped>
@media (max-width: 900px) {
  .testimonial {
    width: 100% !important;
  }
}
</style>
