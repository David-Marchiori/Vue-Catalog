<template>
  <div class="section-carousel-category-product">
    <h2 class="section-title">Featured Products</h2>
    <ProductCarouselTabs
      :categoriesSlug="[
        { slug: 'electronics', id: 1, value: 'electronics' },
        { slug: 'Miscellaneous', id: 2, value: 'miscellaneous' },
        { slug: 'clothes', id: 3, value: 'clothes' },
      ]"
      @tab-change="handleTabChange"
    />
    <ProductCarouselList :categorySlug="categorySlug" />
  </div>
</template>
<script setup>
import { ref } from "vue";
import ProductCarouselTabs from "./ProductCarouselTabs.vue";
import ProductCarouselList from "./ProductCarouselList.vue";

const categorySlug = ref("");

const handleTabChange = (slug) => {
  categorySlug.value = slug;
};
</script>
