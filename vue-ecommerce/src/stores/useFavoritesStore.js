import { defineStore } from "pinia";
import { ref } from "vue";

export const useFavoritesStore = defineStore("favorites", () => {
  const favorites = ref([]);

  const toggleFavorite = (product) => {
    const exists = favorites.value.some((item) => item.id === product.id);

    if (exists) {
      favorites.value = favorites.value.filter(
        (item) => item.id !== product.id
      );
      alert(`Removed item from favorites.`);
    } else {
      favorites.value.push(product);
      alert(`Added item to favorites.`);
    }
  };
  return { favorites, toggleFavorite };
});
