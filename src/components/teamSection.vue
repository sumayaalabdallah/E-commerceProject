<script>
import teamCard from "../components/teamCard.vue";
import team1 from "../assets/1.jpg";
import team2 from "../assets/2.jpg";
import team3 from "../assets/3.jpg";
import team4 from "../assets/4.jpg";
import team5 from "../assets/5.jpg";
import team6 from "../assets/6.jpg";
import team7 from "../assets/7.jpg";
import team8 from "../assets/8.jpg";
export default {
  components: {
    teamCard,
  },
  data() {
    return {
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
    };
  },
};
</script>
<template>
  <section class="py-5">
    <v-container>
      <h1
        style="
          color: #589195;
          font-family: system-ui;
          font-weight: 500;
          font-size: 50px;
        "
        class="text-center my-5"
      >
        Our Team
      </h1>
      <v-row>
        <v-col cols="12" sm="6" md="3" v-for="t in teams" :key="t.id">
          <v-hover v-slot="{ isHovering, props }" open-delay="200">
            <teamCard
              v-bind="props"
              :elevation="isHovering ? 10 : 5"
              :color="isHovering ? 'grey-lighten-4' : 'light-blue-lighten-5'"
            >
              <template v-slot:img
                ><v-img height="250" :src="t.img" alt="team-img" cover></v-img>
              </template>
              <template v-slot:fullName>{{ t.fullName }} </template>
              <template v-slot:role>{{ t.role }} </template>
            </teamCard>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
