<script>
import parallaxSection from "../components/parallaxSection.vue";
import heroSection from "../components/heroSection.vue";
import typesCard from "@/components/typesCard.vue";
import randomBlock from "../components/randomBlock.vue";
import productsCard from "../components/productsCard.vue";
import teamSection from "@/components/teamSection.vue";
import testimonialSection from "../components/testimonialSection.vue";
import contactSection from "@/components/contactSection.vue";
export default {
  components: {
    parallaxSection,
    heroSection,
    typesCard,
    randomBlock,
    productsCard,
    teamSection,
    testimonialSection,
    contactSection,
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
  <!-- Parallax Section -->
  <parallaxSection />
  <!-- Hero Section -->
  <heroSection />
  <!-- Types Section -->
  <typesCard />
  <!-- Category Section -->
  <randomBlock />
  <!-- Products Section -->
  <section id="products"></section>
  <productsCard />
  <!-- Team Section -->
  <teamSection />
  <!-- Testimonial Section -->
  <testimonialSection />
  <!-- contact Section -->
  <contactSection />
</template>
