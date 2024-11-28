<template>
  <header>
    <h1>{{ title }}</h1>
    <nav>
      <NuxtLink to="/">Start</NuxtLink>
      <NuxtLink to="/ressources">Ressources</NuxtLink>
      <NuxtLink to="/greetings">Greetings</NuxtLink>
      <NuxtLink to="/dynamic-route/question">Question 1: Dynamic Routes</NuxtLink>
      <!-- <NuxtLink :to="{name: 'broken'}">Question 2: Broken Link</NuxtLink> -->
      <!-- Comment out line above to get runtime error and see type error in your editor. -->
    </nav>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<style scoped>
header {
  background: green;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
}

h1 {
  font-size: 1rem;
}

nav {
  display: flex;
  flex-direction: column;
  text-align: right;
}

a {
  color: white;
}
a.router-link-active {
  font-style: italic;
}
</style>
