<template>
  <div class="grid p-4">
    <div
      v-for="product in favoritesStore.favorites"
      :key="product.id"
      class="col-12 sm:col-6 md:col-4 lg:col-3 p-2"
    >
      <ProductCard :product="product" />
    </div>
  </div>
</template>

<script setup>
import { useFavoritesStore } from "../stores/useFavoritesStore";
import ProductCard from "../components/products/ProductCard.vue";

const favoritesStore = useFavoritesStore();
</script>
