<script setup>
import Header from "./components/Header.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div id="app">
    <Header />
    <RouterView />
  </div>
</template>
