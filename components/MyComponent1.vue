<script setup lang="ts">
const { data, pending } = useAsyncData<string>(async () => {
  return (await $fetch("/api/getSomeComponentDataUrl1", {})).data;
});
</script>

<template>
  <div class="dataShow">
    <div v-if="pending">Loading...</div>
    <div v-else>COMPONENT1: {{ data }}</div>
  </div>
</template>
