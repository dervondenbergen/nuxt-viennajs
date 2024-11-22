<template>
  <div>
    <Header title="ViennaJS 27.11." />
    <main>
      <NuxtPage />
      <pre>Current Route: {{ route.path }}</pre>
    </main>
    <Footer :year="2024" />
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

useHead({
  titleTemplate: (pageTitle) => {
    return pageTitle
      ? `${pageTitle} - ViennaJS`
      : 'ViennaJS';
  },
});
</script>

<style>
* {
  box-sizing: border-box;
  font-family: sans-serif;
  margin: 0;
  padding: 0;
}

main {
  padding: 1rem;
  min-height: 10rem;
}

pre {
  margin-top: 1rem;
  padding: 1rem;
  font-family: monospace;
  background: lightgrey;
}
</style>
