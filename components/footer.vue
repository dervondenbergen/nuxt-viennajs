<template>
  <footer>
    © Felix De Montis {{ year }}
  </footer>
</template>

<script setup lang="ts">
defineProps<{
  year: number;
}>();
</script>

<style scoped>
footer {
  background: blue;
  color: white;
  padding: .5rem;
}
</style>
