<script>
import randomCard from "../components/randomCard.vue";
import img1 from "../assets/cover4.jpg";
import img2 from "../assets/bag2.jpg";
import img3 from "../assets/watch18.jpg";
import img4 from "../assets/sneakers13.jpg";
export default {
  components: {
    randomCard,
  },

  data() {
    return {
      randoms: [
        {
          id: "1",
          img: img1,
          fullName: "Cloths",
          role: "192 Items",
        },
        {
          id: "2",
          img: img2,
          fullName: "Bags",
          role: "137 Items",
        },
        {
          id: "3",
          img: img3,
          fullName: "Watches",
          role: "133 Items",
        },
        {
          id: "4",
          img: img4,
          fullName: "Shoes",
          role: "187 Items",
        },
      ],
    };
  },
};
</script>
<template>
  <section class="my-16">
    <v-container>
      <h1
        style="
          color: #34394c;
          font-family: system-ui;
          font-weight: 500;
          font-size: 40px;
        "
        class="text-left"
      >
        Shop By Category
      </h1>
      <p
        style="
          color: #656565;
          font-family: system-ui;
          font-weight: 400;
          font-size: 20px;
        "
        class="text-left my-3 mb-10"
      >
        Showing our latest arrival on this summer
      </p>
      <v-row>
        <v-col v-for="r in randoms" :key="r.id" cols="12" sm="6" lg="3">
          <randomCard>
            <template v-slot:img>
              <v-img
                class="d-flex justify-center"
                style="border-radius: 30px"
                height="250"
                width="100%"
                :src="r.img"
                cover
              >
              </v-img>
            </template>
            <template v-slot:fullName>{{ r.fullName }}</template>
            <template v-slot:role>{{ r.role }}</template>
          </randomCard>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
