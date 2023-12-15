<script>
export default {
  data() {
    return {
      rating: 4,
    };
  },
};
</script>
<template>
  <v-card class="testimonial">
    <v-card-text class="text my-6">
      Lorem ipsum dolor sit amet, elit deleniti dissentias quo eu, hinc minim
      appetere te usu, ea case duis scribentur has. Duo te consequat elaboraret,
      has quando suavitate at.
    </v-card-text>
    <div class="author">
      <v-img :src="img" width="150" height="150" alt=""
        ><slot name="img"></slot
      ></v-img>
      <div>
        <h5 class="my-2" style="color: #e3f2fd; font-size: 1.3rem">
          <slot name="fullName"></slot>
        </h5>
        <p style="color: #90caf9; font-size: 1.1rem; opacity: 0.6">
          <slot name="role"></slot>
        </p>
      </div>
    </div>
    <v-rating
      v-model="rating"
      class="ma-4"
      readonly
      color="#ffb400"
      half-increments
    ></v-rating>
  </v-card>
</template>
<style scoped>
.text {
  font-size: 1.25rem !important;
  font-weight: 400 !important;
  line-height: 27px;
  opacity: 0.7;
  color: beige !important;
}
.text::before {
  font-family: FontAwesome;
  content: "\201D";
  display: block;
  position: absolute;
  top: 16px;
  left: 16px;
  font-size: 30px;
  color: #bbdefb;
}
.author {
  display: flex;
  align-items: center;
}
.testimonial {
  position: relative;
  background-color: #444f60;
  padding: 2rem;
  border-radius: 30px;
}
@media (max-width: 310px) {
  .author {
    flex-wrap: wrap;
  }
}
</style>
