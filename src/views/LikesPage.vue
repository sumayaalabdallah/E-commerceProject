<script setup>
import { useLikeStore } from "@/store/likes";
import { computed } from "vue";
import ProductCard from "@/components/productCard.vue";

const likes = useLikeStore();

const products = computed(() => likes.items);
</script>

<template>
  <section class="my-10" id="home">
    <VContainer>
      <VRow>
        <VCol
          v-for="product in products"
          :key="product.id"
          cols="12"
          sm="6"
          lg="3"
        >
          <ProductCard :product="product">
            <template #actions>
              <VBtn
                icon="mdi-delete"
                color="error"
                @click="likes.removeItem(product)"
              />
            </template>
          </ProductCard>
        </VCol>
      </VRow>
    </VContainer>
  </section>
</template>
