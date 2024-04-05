<script setup>
import ProductCard from "../components/productCard.vue";
import { reactive } from "vue";
const data = reactive({
  products: [],
  productToShow: 8,
});
fetch("../../file.json")
  .then((res) => res.json())
  .then((items) => {
    data.products = items;
  });

const loadMoreProducts = () => {
  if (data.productToShow >= data.products.length) {
    return;
  } else {
    data.productToShow = data.productToShow + 8;
  }
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
          font-size: 40px;
        "
        class="text-left"
      >
        Latest Arrival
      </h1>
      <p
        style="
          color: #656565;
          font-family: system-ui;
          font-weight: 400;
          font-size: 20px;
        "
        class="text-left my-3"
      >
        Showing our latest arrival on this summer
      </p>
      <v-chip color="#589195" variant="outlined" class="mr-2">Clothes</v-chip>
      <v-chip color="#589195" variant="outlined" class="mr-2">Bags</v-chip>
      <v-chip color="#589195" variant="outlined" class="mr-2">Shoes</v-chip>
      <v-chip color="#589195" variant="outlined">Watches</v-chip>
      <v-row class="my-4">
        <v-col
          v-for="product in data.products.slice(0, data.productToShow)"
          :key="product.id"
          cols="12"
          sm="6"
          md="3"
        >
          <ProductCard :product="product" />
        </v-col>
        <v-col class="" cols="12" sm="6" lg="3">
          <v-btn
            class="ma-2 btn"
            rounded="xl"
            size="large"
            v-if="data.productToShow < data.products.length"
            @click="loadMoreProducts"
          >
            Load more
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<style scoped>
.btn {
  background: linear-gradient(0deg, #79bbbf, #589195);
  font-size: 18px;
  font-weight: 500;
  font-family: system-ui;
  padding: 0 1.1rem;
  position: relative;
  border: 1px solid #34394c;
  color: #34394c !important;
}
.btn:hover {
  background: linear-gradient(0deg, #8fc6c9, #77c7cd);
  box-shadow: inset 0px 1px 0px 0px rgb(88, 145, 149, 0.4);
  transition: all 0.3s ease-in-out;
  letter-spacing: 2px;
}
.btn:active {
  top: 10px;
}
</style>
