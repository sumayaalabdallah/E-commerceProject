<script>
export default {
  props: {
    img: String,
  },
};
</script>
<template>
  <a href="#">
    <div class="a-link">
      <v-img :src="img"><slot name="img"></slot></v-img>
      <div>
        <h5 class="my-2 text-center" style="color: #455a64; font-size: 1.5rem">
          <slot name="fullName"></slot>
        </h5>
        <p class="text-center" style="color: #aeb3c3; font-size: 1rem">
          <slot name="role"></slot>
        </p>
      </div>
    </div>
  </a>
</template>
<style scoped>
a {
  text-decoration: none;
}
a .a-link:hover {
  transform: scale(0.9);
  transition: all 0.3s ease-in-out;
}
</style>
