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
    min-height="100%"
    style="
      background-color: #ecf5f4;
      border-radius: 20px;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px,
        rgba(0, 0, 0, 0.23) 0px 3px 6px;
    "
  >
    <v-img
      class="d-flex justify-center"
      width="100%"
      height="350"
      :src="product.image"
      cover
    />
    <v-card-text class="subtitle">{{ product.star }}</v-card-text>
    <v-card-text class="subtitle">{{ product.title }}</v-card-text>
    <div class="d-flex align-center">
      <v-card-text style="color: #589195; font-size: 20px; font-weight: 500"
        >{{ product.price }}$</v-card-text
      ><slot class="align-self-start" name="count"></slot>
    </div>
    <v-card-actions class="justify-center px-2">
      <v-dialog
        transition="dialog-top-transition"
        width="500"
        align-self="center"
      >
        <template v-slot:activator="{ props }">
          <v-btn class="btn" rounded="xl" v-bind="props">See more</v-btn>
        </template>
        <template v-slot:default="{ isActive }">
          <v-row justify="center" align="center">
            <v-col cols="12" md="7">
              <v-card>
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
        class="btn-cart"
        color="#444f60"
        icon="mdi-cart"
        @click="cart.addItem(product)"
      ></v-btn>
      <v-btn
        class="btn-cart"
        color="#444f60"
        icon="mdi-heart"
        @click="likes.addItem(product)"
      ></v-btn>
      <slot name="actions" />
    </v-card-actions>
  </v-card>
</template>
<style scoped>
.btn-cart:hover {
  color: #589195 !important;
}
.btn:hover {
  background-color: #589195;
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
