<script></script>
<template>
  <v-card
    v-bind="props"
    :elevation="isHovering ? 10 : 5"
    :color="isHovering ? 'grey-lighten-4' : 'light-blue-lighten-5'"
    class="a-link"
    rounded="xl"
  >
    <v-img :src="img" class="img" alt="team-img">
      <slot name="img"></slot
    ></v-img>
    <v-card-title class="full-name text-center">
      <slot name="fullName"></slot
    ></v-card-title>
    <v-card-text class="role text-center">
      <slot name="role"></slot
    ></v-card-text>
    <v-card-actions class="card-social justify-center">
      <v-btn icon color="white">
        <v-icon class="btn" size="2rem" color="#4a5556"> mdi-linkedin </v-icon>
      </v-btn>

      <v-btn icon color="white">
        <v-icon class="btn" size="2rem" color="#4a5556"> mdi-facebook </v-icon>
      </v-btn>

      <v-btn icon color="white">
        <v-icon class="btn" size="2rem" color="#4a5556"> mdi-twitter </v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<style scoped>
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
</style>
