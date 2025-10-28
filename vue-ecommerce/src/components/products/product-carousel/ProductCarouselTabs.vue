<template>
  <Tabs value="0">
    <TabList>
      <Tab
        v-for="category in categoriesSlug"
        :key="category.id"
        :value="category.value"
        @click="$emit('tab-change', category.value)"
        >{{ category.slug }}</Tab
      >
    </TabList>
  </Tabs>
</template>

<script setup>
import { defineProps } from "vue";
import Tabs from "primevue/tabs";
import TabList from "primevue/tablist";
import Tab from "primevue/tab";

const { categoriesSlug } = defineProps({
  categoriesSlug: {
    type: Array,
    required: true,
  },
});
</script>
