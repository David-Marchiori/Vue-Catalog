import { computed, unref } from "vue";

export function useProductFilter(products, slug) {
  return computed(() => {
    const list = unref(products);
    return list.filter((product) => product.category?.slug === slug);
  });
}
