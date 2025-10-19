<template>
  <header class="header-container">
    <Menubar :model="items">
      <template #item="{ item, props, hasSubmenu }">
        <router-link
          v-if="item.route"
          v-slot="{ href, navigate }"
          :to="item.route"
          custom
        >
          <a v-ripple :href="href" v-bind="props.action" @click="navigate">
            <span :class="item.icon" />
            <span>{{ item.label }}</span>
          </a>
        </router-link>
      </template>
    </Menubar>
  </header>
</template>

<script setup>
import Menubar from "primevue/menubar";
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();

const items = ref([
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Details",
    route: "/details",
  },
  {
    label: "About",
    route: "/about",
  },
]);
</script>
