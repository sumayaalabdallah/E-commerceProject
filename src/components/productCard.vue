<script setup>
import { useCartStore } from "../store/cart.js";
import { useLikeStore } from "../store/likes.js";
defineProps({
  product: {
    type: Object,
    required: true,
  },
});
const cart = useCartStore();
const likes = useLikeStore();
</script>

<template>
  <v-card
    elevation="10"
    variant="tonal"
    style="background-color: #ecf5f4"
    rounded="xl"
  >
    <v-img
      class="d-flex justify-center"
      width="100%"
      height="250"
      :src="product.image"
      cover
    />
    <v-card-title class="text-subtitle-1 pb-0">{{ product.star }}</v-card-title>
    <v-card-title class="subtitle text-button py-0">{{
      product.title
    }}</v-card-title>
    <div class="d-flex align-center">
      <v-card-title class="font-weight-bold text-h6 pb-0" style="color: #444f60"
        >{{ product.price }}$</v-card-title
      ><slot class="align-self-start" name="count"></slot>
    </div>
    <v-divider color="#4d5162"></v-divider>
    <v-divider color="#4d5162"></v-divider>
    <v-card-actions class="justify-space-evenly">
      <v-dialog
        transition="dialog-bottom-transition"
        width="700"
        align-self="center"
        persistent
      >
        <template v-slot:activator="{ props }">
          <span>
            <v-btn
              class="btn"
              elevation="5"
              :ripple="false"
              rounded
              v-bind="props"
              >See more</v-btn
            >
            <v-tooltip activator="parent" location="bottom" offset="20"
              >Description about this Product</v-tooltip
            >
          </span>
        </template>
        <template v-slot:default="{ isActive }">
          <v-row justify="center" align="center">
            <v-col cols="12" md="7">
              <v-card
                variant="tonal"
                style="background-color: #ecf5f4"
                rounded="xl"
                elevation="10"
              >
                <v-card-text class="px-10 bg-primary" color="#589195">
                  The Colors: 🔴⚫⚪🟤🟢🟣
                </v-card-text>

                <v-img
                  class="d-flex justify-center"
                  :src="product.image"
                  width="400"
                  max-height="350"
                  cover
                />
                <v-card-text class="subtitle text-center">{{
                  product.description
                }}</v-card-text>

                <v-card-actions class="justify-end">
                  <v-btn
                    class="btn-close"
                    rounded="xl"
                    size="large"
                    @click="isActive.value = false"
                    >Close</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </template>
      </v-dialog>

      <v-btn
        size="40"
        variant="tonal"
        elevation="5"
        class="btn-cart"
        color="#444f60"
        icon="mdi-cart-outline"
        @click="cart.addItem(product)"
      />
      <v-btn
        size="40"
        variant="tonal"
        elevation="5"
        class="btn-cart"
        color="#444f60"
        icon="mdi-heart-outline"
        @click="likes.addItem(product)"
      />

      <slot name="actions" />
    </v-card-actions>
  </v-card>
</template>
<style scoped>
.btn-cart:hover {
  color: #589195 !important;
}
.btn:hover {
  background-color: #4db6ac !important;
  box-shadow: 0 0 5px #4db6acaf, 0 0 10px #4db6acaf !important;
}
.subtitle {
  color: #4d5162;
  font-size: 1.1rem;
  font-weight: 400;
}
.btn {
  background-color: #444f60;
  color: white;
  font-weight: 600;
  font-family: system-ui;
  padding: 0 0.8rem;
}
.btn-close {
  background-color: #589195;
  color: white;
  font-weight: 600;
  font-family: system-ui;
  padding: 0 1.3rem;
}
</style>
