<template>
  <div class="details-view">
    <div class="product-gallery">
      <Galleria
        :value="product.images"
        :responsiveOptions="responsiveOptions"
        :numVisible="5"
        containerStyle="max-width: 640px"
      >
        <template #item="slotProps">
          <img
            :src="slotProps.item"
            :alt="slotProps.item.alt"
            style="width: 100%"
          />
        </template>
        <template #thumbnail="slotProps">
          <img :src="slotProps.item" :alt="slotProps.item.alt" />
        </template>
      </Galleria>
    </div>
    <div class="product-info">
      <h2>{{ product.title }}</h2>
      <p>{{ product.description }}.</p>

      <p class="price-producct">R${{ product.price }}</p>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import Galleria from "primevue/galleria";
import { useProductsStore } from "../stores/useProductsStore";

const route = useRoute();
const productsStore = useProductsStore();

const product = computed(() =>
  productsStore.products.find((p) => p.id === Number(route.params.id))
);

const responsiveOptions = ref([
  {
    breakpoint: "1300px",
    numVisible: 4,
  },
  {
    breakpoint: "800px",
    numVisible: 2,
  },
  {
    breakpoint: "575px",
    numVisible: 1,
  },
]);
</script>
<style scoped>
.details-view {
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
}

.product-info {
  max-width: 50%;
}

.product-info h2 {
  font-size: 2rem;
}

@media (max-width: 800px) {
  .details-view {
    flex-direction: column;
  }

  .product-info {
    max-width: 100%;
    padding: 20px;
  }
}
</style>
