<template>
  <h1>Home</h1>
  <Carousel
    :value="productsStore.products"
    :numVisible="3"
    :numScroll="1"
    :responsiveOptions="responsiveOptions"
  >
    >
    <template #item="slotProps">
      <ProductCard :product="slotProps.data" />
    </template>
  </Carousel>
</template>
<script setup>
import { useProductsStore } from "../stores/products";
import Carousel from "primevue/carousel";
import ProductCard from "../components/ProductCard.vue";
import { ref } from "vue";

const productsStore = useProductsStore();
productsStore.fetchProducts();

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

<style scoped></style>
