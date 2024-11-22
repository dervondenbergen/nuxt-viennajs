<template>
  <h2>Ressources</h2>
  <ul>
    <li v-for="ressource in ressources">
      <a :href="ressource.link">{{ressource.name}}</a>
    </li>
  </ul>
</template>

<script setup lang="ts">
const ressources = [
  {
    name: "Docs",
    link: "https://nuxt.com",
  },
  {
    name: "GitHub",
    link: "https://github.com/nuxt/nuxt",
  },
];
</script>

<style scoped>
a {
  color: inherit;
}
</style>
