<template>
  <Carousel :value="filteredProducts" :responsiveOptions="responsiveOptions">
    <template #item="slotProps">
      <ProductCard :product="slotProps.data" />
    </template>
  </Carousel>
</template>
<script setup>
import Carousel from "primevue/carousel";
import { ref, defineProps, onMounted, watch } from "vue";

import ProductCard from "../ProductCard.vue";
import { useProductsStore } from "../../../stores/useProductsStore";

const props = defineProps({
  categorySlug: {
    type: String,
    required: true,
  },
});

const productsStore = useProductsStore();

const filteredProducts = ref([]);

onMounted(() => {
  productsStore.fetchProducts();
});

watch(
  () => props.categorySlug,
  (newSlug) => {
    filteredProducts.value = filterProductsByCategory(
      productsStore.products,
      newSlug
    );
  }
);

const filterProductsByCategory = (products, categorySlug) => {
  return products.filter((product) => product.category.slug === categorySlug);
};

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
