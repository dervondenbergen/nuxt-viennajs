<template>
  <div>
    <p>{{ data?.greeting }} ViennaJS Crowd</p>
    <button @click="() => refresh()">
      Load other Greeting
    </button>
    <pre>Updated at {{ data?.time }}</pre>
  </div>
</template>

<script setup lang="ts">
const {
  data,
  refresh,
} = await useFetch("/api/greetings");
</script>
