<script>
export default {
  methods: {
    scrollMethod() {
      this.$nextTick(() =>
        document.getElementById("home").scrollIntoView({ behavior: "smooth" })
      );
    },
  },
};
</script>
<template>
  <a class="back-to-top" @click="scrollMethod">
    <i class="fa-solid fa-angle-up fa-sm"></i>
  </a>
</template>
<style scoped>
.back-to-top {
  width: 3.5%;
  text-align: center;
  color: #fff;
  position: fixed;
  background: #589195;
  border-radius: 50%;
  padding: 0.5rem;
  bottom: 20px;
  right: 20px;
  font-size: 22px;
  opacity: 1;
  transition: all 0.3s;
}
.back-to-top:hover {
  color: #fff;
  background: #4db6ac;
  cursor: pointer;
}
@media (max-width: 900px) {
  .back-to-top {
    width: 12%;
    bottom: 60px;
    right: 18px;
    font-size: 20px;
  }
}
</style>
