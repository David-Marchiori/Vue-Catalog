<template>
  <BannerMain :banners="['banner.png', 'banner2.jpg']" />
  <ProductCarousel />
</template>
<script setup>
import BannerMain from "../components/banners/BannerMain.vue";
import ProductCarousel from "../components/products/product-carousel/ProductCarousel.vue";
</script>
