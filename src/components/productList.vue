<script setup>
import { ref, computed } from "vue";
import ProductCard from "@/components/productCard.vue";
import productsValues from "@/file.json";
const products = ref([]);
const currentPage = ref(1);
const pageSize = 8;
const handlePageChange = (newPage) => {
  currentPage.value = newPage;
};
const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * pageSize;
  const end = currentPage.value * pageSize;
  return products.value.slice(start, end);
});
// (async function dataFetcher() {
//   let response = await fetch("../../file.json");
//   products.value = await response.json();
// })();
// fetch("../../file.json")
//   .then((res) => res.json())
//   .then((items) => {
//     products.value = items;
//   });
products.value = productsValues;
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
          v-for="(product, index) in paginatedProducts"
          :key="index"
          cols="12"
          sm="6"
          md="3"
        >
          <ProductCard :product="product" />
        </v-col>
      </v-row>
      <v-col cols="12">
        <v-pagination
          v-model="currentPage"
          :length="Math.ceil(products.length / pageSize)"
          class="mt-10"
          rounded="circle"
          @update:model-value="handlePageChange"
          color="#589195"
          size="60"
        ></v-pagination>
      </v-col>
    </v-container>
  </section>
</template>
<style scoped>
.btn {
  font-size: 18px;
  font-weight: 500;
  font-family: system-ui;
  padding: 0 1.1rem;
}
</style>
