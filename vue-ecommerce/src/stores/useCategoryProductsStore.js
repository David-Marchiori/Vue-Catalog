import { defineStore } from "pinia";
import { ref } from "vue";

export const useCategoryProductsStore = defineStore("categoryProducts", () => {
  const apiUrl =
    "https://api.escuelajs.co/api/v1/products/?categorySlug=electronics";
  const productsCategory = ref([]);

  async function fetchCategoryProducts() {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    } else {
      productsCategory.value = await response.json();
    }
  }
  return { productsCategory, fetchCategoryProducts };
});
