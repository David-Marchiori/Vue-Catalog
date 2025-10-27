<template>
  <div
    class="border border-surface-200 dark:border-surface-700 rounded m-2 p-4"
  >
    <div class="mb-4">
      <div
        class="w-full h-64 overflow-hidden flex items-center justify-center bg-gray-100 rounded"
      >
        <img
          :src="product.images[0]"
          :alt="product.title"
          class="object-cover w-full rounded"
        />
      </div>
    </div>
    <div class="mb-4 font-medium">{{ product.title }}</div>
    <div class="flex justify-between items-center">
      <div class="mt-0 font-semibold text-xl">${{ product.price }}</div>
      <span>
        <Button
          icon="pi pi-heart"
          severity="secondary"
          variant="outlined"
          @click="favoritesStore.toggleFavorite(product)"
        />
        <Button icon="pi pi-shopping-cart" class="ml-2" />
      </span>
    </div>
  </div>
</template>

<script setup>
import { useFavoritesStore } from "../../stores/useFavoritesStore";
import Button from "primevue/button";

defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const favoritesStore = useFavoritesStore();
</script>
