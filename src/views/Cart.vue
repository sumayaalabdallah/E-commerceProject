<script setup>
import { useCartStore } from "@/store/cart";
import { computed } from "vue";
const cart = useCartStore();
const products = computed(() => cart.items);
</script>

<template>
  <section class="mt-10" id="home">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-table style="border-radius: 30px" hover class="bg-grey-lighten-2">
            <thead>
              <tr>
                <th style="color: #212121">#</th>
                <th style="color: #212121">Title</th>
                <th style="color: #212121">Image</th>
                <th style="color: #212121">Description</th>
                <th style="color: #212121">Quantity</th>
                <th style="color: #212121">Price</th>
                <th style="color: #212121">subTotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in products" :key="product.id">
                <td>{{ product.id }}</td>
                <td>
                  <v-card-text class="text-subtitle-1">{{
                    product.title
                  }}</v-card-text>
                </td>
                <td>
                  <v-img
                    rounded
                    width="150"
                    height="150"
                    :src="product.image"
                    cover
                  />
                </td>
                <td>
                  <v-card-text class="text-subtitle-1">{{
                    product.description
                  }}</v-card-text>
                </td>
                <td>
                  <v-icon
                    color="light-green-darken-3"
                    @click="cart.incrementQ(product)"
                  >
                    mdi-plus-circle</v-icon
                  >
                  <v-title class="text-h6" style="color: #444f60">{{
                    product.count
                  }}</v-title>
                  <v-icon
                    color="red-darken-3"
                    @click="cart.decrementQ(product)"
                  >
                    mdi-minus-circle</v-icon
                  >
                </td>
                <td>
                  <v-card-title style="color: #444f60"
                    >{{ product.price }}$</v-card-title
                  >
                </td>
                <td>
                  <v-card-title style="color: #444f60"
                    >{{ product.price * product.count }}$</v-card-title
                  >
                </td>
                <td>
                  <span>
                    <v-btn
                      icon="mdi-delete"
                      color="red-darken-3"
                      @click="cart.removeItem(product)"
                      variant="outlined"
                    />
                    <v-tooltip activator="parent" location="bottom" offset="20"
                      >Delete this Product ?</v-tooltip
                    >
                  </span>
                </td>
              </tr>
            </tbody>
          </v-table>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<style scoped>
tr:nth-child(even) {
  background-color: #fafafa;
}
@media (max-width: 400px) {
}
</style>
