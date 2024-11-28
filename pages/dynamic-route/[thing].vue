<template>
  <div>
    <h2>Dynamic Routes</h2>
    <p>Current Dynamic Route Parameter: {{ thing }}</p>
    <ul>
      <li><NuxtLink to="/dynamic-route/test-route-1">Test Route 1</NuxtLink></li>
      <li><NuxtLink to="/dynamic-route/test-route-2">Test Route 2</NuxtLink></li>
      <li><NuxtLink to="/dynamic-route/test-route-3">Test Route 3</NuxtLink></li>
      <li><NuxtLink to="/dynamic-route/test-route-4">Test Route 4</NuxtLink></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const thing = useRoute().params.thing;
</script>

<style scoped>
a {
  color: inherit;
}

div > * + * {
  margin-top: 1rem;
}
</style>
