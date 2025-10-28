<template>
  <Carousel :value="props.banners" :numVisible="1">
    <template #item="slotProps">
      <div
        class="w-full max-h-25rem overflow-hidden flex items-center justify-center bg-gray-100 border-round-2xl"
      >
        <img :src="`/public/${slotProps.data}`" class="w-full object-cover" />
      </div>
    </template>
  </Carousel>
</template>

<script setup>
import Carousel from "primevue/carousel";

const props = defineProps({
  banners: {
    type: Array,
    required: true,
  },
});
</script>
