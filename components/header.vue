<template>
  <header>
    <h1>{{ title }}</h1>
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
</style>
