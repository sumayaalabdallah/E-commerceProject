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
              <span>
                <VBtn
                  icon="mdi-delete"
                  color="red-darken-3"
                  variant="tonal"
                  @click="likes.removeItem(product)"
                  size="40"
                />
                <v-tooltip activator="parent" location="bottom" offset="20"
                  >Delete this Product ?</v-tooltip
                >
              </span>
            </template>
          </ProductCard>
        </VCol>
      </VRow>
    </VContainer>
  </section>
</template>
