<script></script>
<template>
  <!-- Parallax Section -->
  <v-parallax
    height="auto"
    src="../assets/cover2.jpg"
    alt="Parallax-img"
    id="home"
  >
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
</template>
