<script setup lang="ts">
const { data, pending } = useAsyncData<string>(async () => {
  return (await $fetch("/api/getSomeComponentDataUrl3", {})).data;
});
</script>

<template>
  <div class="dataShow">
    <div v-if="pending">Loading...</div>
    <div v-else>COMPONENT3: {{ data }}</div>
  </div>
</template>
