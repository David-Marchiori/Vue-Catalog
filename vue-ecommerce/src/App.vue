<script setup>
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import { ref } from "vue";

const text = ref("");
</script>

<template>
  <InputText v-model="text" placeholder="Enter text here" />
  <Button label="Submit" />

  <br />
  {{ text }}
</template>
