import { defineStore } from "pinia";
import { ref } from "vue";

export const useProductsStore = defineStore("products", () => {
  const apiUrl = "https://api.escuelajs.co/api/v1/products";

  const products = ref([]);

  async function fetchProducts() {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    } else {
      products.value = await response.json();
    }
  }
  return { products, fetchProducts };
});
