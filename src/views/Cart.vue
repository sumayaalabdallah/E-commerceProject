<script setup>
import { useCartStore } from "@/store/cart";
import { computed } from "vue";
import ProductCard from "@/components/productCard.vue";

const cart = useCartStore();

const products = computed(() => cart.items);
</script>

<template>
  <section class="mt-10" id="home">
    <v-container>
      <v-row>
        <v-col
          v-for="product in products"
          :key="product.id"
          cols="12"
          sm="6"
          lg="3"
        >
          <ProductCard :product="product">
            <template #count>
              <v-card-text>
                <v-btn
                  style="color: #589195; font-size: 20px; font-weight: 500"
                >
                  {{ product.count }}</v-btn
                >
              </v-card-text>
            </template>
            <template #actions>
              <v-btn
                icon="mdi-delete"
                color="error"
                @click="cart.removeItem(product)"
              />
            </template>
          </ProductCard>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
