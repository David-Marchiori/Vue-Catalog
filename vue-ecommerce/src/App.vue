<script setup>
import Header from "./components/common/Header.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div id="app">
    <Header />
    <RouterView />
  </div>
</template>
