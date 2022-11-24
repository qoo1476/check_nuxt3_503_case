<script setup lang="ts">
const { data, pending } = useAsyncData<string>(async () => {
  return (await $fetch("/api/getSomeComponentDataUrl4", {})).data;
});
</script>

<template>
  <div class="dataShow">
    <div v-if="pending">Loading...</div>
    <div v-else>COMPONENT4: {{ data }}</div>
  </div>
</template>
