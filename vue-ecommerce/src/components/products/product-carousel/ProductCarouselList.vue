<template>
  <Carousel :value="filteredProducts" :responsiveOptions="responsiveOptions">
    <template #item="slotProps">
      <ProductCard :product="slotProps.data" />
    </template>
  </Carousel>
  <li v-for="product in filteredProducts" :key="product.id">
    {{ product.name }}
  </li>
</template>
<script setup>
import Carousel from "primevue/carousel";
import { ref, computed } from "vue";
import { defineProps } from "vue";

import ProductCard from "../ProductCard.vue";
import { useProductsStore } from "../../../stores/useProductsStore";
import { useProductFilter } from "../../../composables/useProductFilter";

defineProps({
  categorySlug: {
    type: String,
    required: true,
  },
});

const productsStore = useProductsStore();
productsStore.fetchProducts();

const filteredProducts = computed(() =>
  productsStore.products.filter(
    (product) => product.category.slug === "electronics"
  )
);
const responsiveOptions = ref([
  {
    breakpoint: "1920px",
    numVisible: 4,
    numScroll: 1,
  },
  {
    breakpoint: "1199px",
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: "767px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "575px",
    numVisible: 1,
    numScroll: 1,
  },
]);
</script>
